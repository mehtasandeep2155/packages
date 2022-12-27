// import { NotifyType } from "@components/notification/types";

export interface TimerProps {
  label: string;
  value: any;
}

export interface ILevel {
  label: string;
  value: string;
}
export const difficultyLevel = Object.freeze([
  {
    label: "Beginner",
    value: "Easy",
  },
  {
    label: "Intermediate",
    value: "Medium",
  },
  {
    label: "Pro",
    value: "Hard",
  },
]);

export const quizTimers = Object.freeze([
  {
    label: "15 Minutes",
    value: {
      hours: 0,
      minutes: 15,
      seconds: 0,
    },
  },
  {
    label: "30 Minutes",
    value: {
      hours: 0,
      minutes: 30,
      seconds: 0,
    },
  },
  {
    label: "45 Minutes",
    value: {
      hours: 0,
      minutes: 45,
      seconds: 0,
    },
  },
  {
    label: "1 hour",
    value: {
      hours: 1,
      minutes: 0,
      seconds: 0,
    },
  },
]);

export enum QuestionType {
  SCQ = "scq",
  MCQ = "mcq"
}

export const questionType = Object.freeze([
  {
    label: "Single Select Question",
    value: QuestionType.SCQ,
  },
  {
    label: "Multiple Select Question",
    value: QuestionType.MCQ
  },
]);
export const questionCategory = Object.freeze([
  { label: "HTML", value: "html" },
  { label: "CSS", value: "css" },
  { label: "JAVASCRIPT", value: "javascript" },
  { label: "REACT JS", value: "reactjs" },
  { label: "PHP", value: "php" },
  { label: "JAVA", value: "java" },
  { label: "ANGULAR", value: "angular" },
]);

export enum QUIZ_STATUS {
  PENDING = "Pending",
  IN_PROGRESS = "In_Progress",
  COMPLETED = "Completed",
  TERMINATED = "Terminated",
}

export interface columnNameTypes {
  name: string;
}
export const tableColumnName = Object.freeze([
  { name: "Name" },
  { name: "Email" },
  { name: "Score" },
  { name: "Technology" },
  { name: "Assigned by" },
]);

export enum MESSAGE_TYPE {
  ERROR = "error",
  SUCCESS = "success",
  INFO = "info",
  UNAUTHORIZED_USER = "Unauthorized User",
  UNAUTHORIZED_ADMIN = "Unauthorized Admin",
}
// export const notifyInitialState: NotifyType = {
//   message: "",
//   isOpen: false,
//   type: MESSAGE_TYPE.INFO,
// };

export const quizListColumnName = Object.freeze([
  {
    id: "score",
    numeric: false,
    disablePadding: true,
    label: "Score",
  },
  { id: "status", numeric: false, disablePadding: true, label: "Status" },
  {
    id: "quiz_stack",
    numeric: false,
    disablePadding: true,
    label: "Technology",
  },
  {
    id: "difficulty_level",
    numeric: false,
    disablePadding: true,
    label: "Difficulty Level",
  },
  {
    id: "assigned_by_admin",
    numeric: false,
    disablePadding: true,
    label: "Assigned by",
  },
  {
    id: "started_at",
    numeric: false,
    disablePadding: true,
    label: "Start Date",
  },
  {
    id: "ended_at",
    numeric: false,
    disablePadding: true,
    label: "End Date",
  },
  { id: "userId", numeric: false, disablePadding: true, label: "User" },
]);
export const cardShadowInitialState = { raised: false, shadow: 1 };
export const userDetailsInitialState = {
  _id: "", 
  name: "", 
  email: "", 
  bio: "",
  linkedInLink: "",
  githubLink: "",
};
export const adminDetailsInitialState = {
  avatar: "",
  email: "",
  mobileNumber: 0,
  name: "",
  password: "",
  _id: "",
};

export const questionInitialValue = {
  category: questionCategory[0].value,
  difficulty: difficultyLevel[0].value,
  questionType: questionType[0].value,
  question: "",
  options: [
    { option: "", label: "a", isTrue: false },
    { option: "", label: "b", isTrue: false },
  ],
};
export const isUserBlockedInitialState = { id: "", isBlocked: false };
export interface IIsUserBlockedInitailStateTypes {
  id: string;
  isBlocked: boolean;
}

export enum LOCAL_STORAGE_KEY {
  ACCESS_TOKEN = "accessToken",
  REFRESH_TOKEN = "refreshToken",
  QUIZ = "quiz_id",
  TIME = "time",
}

export const userTableColumn = Object.freeze(["Name", "Email", "Blocked"]);
export const userFilters = Object.freeze([
  { label: "All Users", value: "all-user" },
  { label: "Blocked", value: "blocked" },
  { label: "Active", value: "active" },
]);

export const quizDetailsInitialState = {
  _id: "",
  assignedByAdmin: false,
  questions: [],
  quizStack: [],
  status: "",
  score: 0,
  startedAt: "",
  endedAt: "",
  difficultyLevel: "",
  email: "",
  name: "",
  timeCount: { hours: 0, minutes: 0, seconds: 0 },
};

export const quizTime: {
  [key: string]: { hours: number; minutes: number; seconds: number };
} = Object.freeze({
  Easy: { hours: 0, minutes: 15, seconds: 0 },
  Medium: { hours: 0, minutes: 20, seconds: 0 },
  Hard: { hours: 0, minutes: 25, seconds: 0 },
});

export enum Role {
  User = "user",
  Admin = "admin",
}

export enum LayoutType {
  NoLayout = "noSidebar",
}

export enum Color {
  Primary = '#000000b3',
  White = '#FFFFFF',
  Secondary = '#80808029'
}

export const quotes = [{ quote: "Big Brother fills us all with the same crap. My guess is he was clever the same way everybody thinks they're clever. I tell her to type in 'password.", author: "Chuck Palahniuk, Lullaby" },
{ quote: `Tradition is the code that keeps change in lock. If you refuse change, you are likely to rust and guess the cause; that long held way of doing things.`, author: "Israelmore Ayivor" },
{ quote: `Well, I reckon you should --" Ron began, but he was interrupted by the Fat Lady, who had been watching them sleepily and now burst out, "Are you going to give me the password or will I have to say awake all night waiting for you to finish your conversation?.`, author: "J.K. Rowling, Harry Potter and the Order of the Phoenix" },
{ quote: `The password to creativity is SILENCE.`, author: "Michael Bassey Johnson, Before You Doubt Yourself: Pep Talks and other Crucial Discussions" },
{ quote: `You are my password. People can unlock me through you.`, author: "Anushka Bhartiya" },
{ quote: `My room is now my headquarters. Nobody's allowed in without the password and I haven't even told anybody what the password is (it's pigeon, after my pigeon. Nobody else can find out if you only think it).`, author: "Stephen Kelman, Pigeon English" }]

export const passwordValidityCheck = [{ text: 'Character', shouldContain: '7+' }, { text: 'Uppercase', shouldContain: 'AA' }, { text: 'Lowercase', shouldContain: 'aa' }, { text: 'Number', shouldContain: '123' }, { text: 'Symbol', shouldContain: '@@$' }]
export enum PASSWORD{
  ForgotForm='forgot-form',
  MailSent='sent'
}