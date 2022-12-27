import axios from "./axios";

export const axiosGetWithBackup = async (url: string) => {
  try {
    const data = await axios.get(url).then((res) => res.data);
    return data;
  } catch (err) {
    try {
      const data = await axios({
        url: `${process.env.NEXT_PUBLIC_API_URL}${url}`,
      }).then((res) => res.data);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
};

export const axiosPostWithBackup = async (url: string, postData : any) => {
  try {
    const data = await axios.post(url,postData).then((res) => res.data);
    return data;
  } catch (err) {
    try {
      const data = await axios({
        url: `${process.env.NEXT_PUBLIC_API_URL}${url}`,
        method : 'post',
        data: postData
      }).then((res) => res.data);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
};

export const axiosPatchWithBackup = async (url: string, patchData : any) => {
  try {
    const data = await axios.patch(url,patchData).then((res) => res.data);
    return data;
  } catch (err) {
    try {
      const data = await axios({
        url: `${process.env.NEXT_PUBLIC_API_URL}${url}`,
        method : 'patch',
        data: patchData
      }).then((res) => res.data);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
};