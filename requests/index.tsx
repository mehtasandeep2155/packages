import axios from "axios";
import { axiosGetWithBackup, axiosPatchWithBackup, axiosPostWithBackup } from "../helpers/axios-backup";

// Public-questions APIs Endpoints

export const getAllPublicQuestion = async () => {
    const  data  = await axiosGetWithBackup(`public-questions/list`);
    return data;
};

export const createPublicQuestion = async (questionData: any) => {
    const  data  = await axiosPostWithBackup(`public-questions/create`, questionData);
    return data;
};

export const reviewedQuestionsPatch = async(questionId:Array<string>,isReviewed:boolean)=>{
    const data = await axiosPatchWithBackup(`public-questions/review-questions/${isReviewed}`,questionId)
    return data
}

export const migrateQuestions = async(questions:Array<any>)=>{
    const data = await axiosPostWithBackup(`public-questions/migrate-questions`,questions)
    return data
}


// Admin APIs Endpoints
export const getDashboardStats = async () => {
  const  data  = await axiosGetWithBackup(`admin/dashboard/quiz-stats`);
  return data;
};

export const getTopScorerOfWeek = async () => {
  const  data  = await axiosGetWithBackup(`admin/dashboard/top-scorer`);
  return data;
};

export const getLeaderBoardData = async () => {
  const  data  = await axiosGetWithBackup(`admin/dashboard/leader-board`);
  return data;
};

export const getAdminById = async (id: string) => {
  const  data  = await axiosGetWithBackup(`admin/${id}`);
  return data;
};


// Questions APIs Endpoints

export const getAllQuestion = async () => {
  const  data  = await axiosGetWithBackup(`questions/question-list`);
  return data;
};

export const createQuestion = async (questionData: any) => {
  const  data  = await axiosPostWithBackup(`questions/create`, questionData);
  return data;
};

export const getQuestionById = async (id: string) => {
  const  data  = await axiosGetWithBackup(`questions/${id}`);
  return data;
};

export const deleteQuestionById = async (id: string) => {
  const  data  = await axios.delete(`questions/delete/${id}`);
  return data;
};

export const updateQuestionById = async (id: string, newQuestion: any) => {
  const  data  = await axiosPatchWithBackup(`questions/update/${id}`, newQuestion);
  return data;
};



// Quiz APIs Endpoints

export const fetchQuizzDetails = async (id: any) => {
  const  data  = await axiosGetWithBackup(`quizzes/${id}`);
  return data;
};

export const getAllQuiz = async () => {
  const data = await axiosGetWithBackup(`admin/dashboard/all-quiz-list`);
  return data;
};

export const createQuiz = async (createQuiz: any) => {
  const  data  = await axiosPostWithBackup(`quizzes/new-quiz`, createQuiz);
  return data;
};

export const submitAnswer = async (saveAnser: any) => {
  const  data  = await axiosPatchWithBackup(`user-quizzes/save-answer`, saveAnser);
  return data;
};

export const submitQuiz = async (id: string, submitQuiz: any) => {
  const  data  = await axiosPatchWithBackup(`quizzes/update/${id}`, submitQuiz);
  return data;
};

export const updateTimer = async (id: string, time: any) => {
  const  data  = await axiosPatchWithBackup(`quizzes/update/time/${id}`, time);
  return data;
};

export const getSavedAnswers = async (id: any) => {
  const  data  = await axiosGetWithBackup(`user-quizzes/get-save-answers/${id}`);
  return data;
};




// Users APIs Endpoints
export const getPendingQuizByEmail = async (email: string) => {
  const  data  = await axiosGetWithBackup(`users/pending-quiz/${email}`);
  return data;
};
export const getCompletedQuizByEmail = async (email: string) => {
  const  data  = await axiosGetWithBackup(`users/completed-quiz/${email}`);
  return data;
};

export const getUserById = async (id: string | string[]) => {
  const  data  = await axiosGetWithBackup(`users/${id}`);
  return data;
};

export const updateUserById = async (id: string, updateUser: any) => {
  const  data  = await axiosPatchWithBackup(`/users/update/${id}`, updateUser);
  return data;
};

export const getUserPerformance = async (id: string | string[]) => {
  const  data  = await axiosGetWithBackup(`user-performance/${id}`);
  return data;
};

export const getAllUser = async () => {
  const  data  = await axiosGetWithBackup(`users/user-list`);
  return data;
};

export const blockUnblockUser = async (id: string, userDetail: any) => {
  const  data  = await axiosPatchWithBackup(`/users/block-unblock/${id}`, userDetail);
  return data;
};

export const changePassword = async (id: string, user: any) => {
  const  data  = await axiosPatchWithBackup(`/users/update/${id}`, user);
  return data;
};
// export const forgotPassword = async (values: forgotPasswordFormValue) => {
//   const  data  = await axiosPostWithBackup(`/users/forgot-password`, values);
//   return data;
// };

export const setUserNewPassword = async (id: string | Array<string>, token: string | Array<string>, newPassword: any) => {
  const  data  = await axiosPostWithBackup(`/users/set-password/${id}/${token}`, newPassword)
  return data
}