import {initializeApp} from "firebase/app";

// firebase configuration
const app = initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain:  process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL:  process.env.REACT_APP_DATABASE_URL,
  projectId:  process.env.REACT_APP_PROJECT_ID,
  storageBucket:  process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:  process.env.REACT_APP_MESSAG_ING_SENDER_ID,
  appId:  process.env.REACT_APP_APP_ID,
});

export default app;
