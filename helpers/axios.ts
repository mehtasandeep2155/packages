import Axios, { AxiosRequestConfig } from "axios";
import { LOCAL_STORAGE_KEY } from "./constant";

const config = {
  baseURL: `${process.env.NEXT_PUBLIC_API_BACKUP_URL}`,
};

Axios.defaults.timeout = 5000
const axiosInstance = Axios.create(config);
axiosInstance.interceptors.request.use(function (config: AxiosRequestConfig) {
  const token = localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
  if (config.headers === undefined) {
    config.headers = {};
  }
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

let isRefreshing = false;
let failedQueue: any = [];

const processQueue = (error: any, token = null) => {
  failedQueue.forEach((prom: any) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    if (err?.response?.status === 401 && !originalConfig._retry) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then(token => {
            originalConfig.headers['Authorization'] = 'Bearer ' + token;
            return Axios(originalConfig);
          })
          .catch(err => {
            return Promise.reject(err);
          });
      }
      originalConfig._retry = true;
      isRefreshing = true;
      const getLocal = localStorage.getItem("refreshToken")
      return new Promise(function (resolve, reject) {
        axiosInstance
          .post('/auth/refresh-token', {
            refreshToken: getLocal
          })
          .then(({ data }) => {
            axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;
            originalConfig.headers['Authorization'] = 'Bearer ' + data.token;
            localStorage.setItem("accessToken", data.token)
            processQueue(null, data.token);
            resolve(Axios(originalConfig));
          })
          .catch(err => {
            processQueue(err, null);
            reject(err);
          })
          .then(() => {
            isRefreshing = false;
          });
      });
    }
    return Promise.reject(err);
  }
);

export default axiosInstance;
