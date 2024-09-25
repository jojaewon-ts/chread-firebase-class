// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIGmKuseznI68qJvvCadqwF-QmoBHALHg",
  authDomain: "chureads0925-d8dd4.firebaseapp.com",
  projectId: "chureads0925-d8dd4",
  storageBucket: "chureads0925-d8dd4.appspot.com",
  messagingSenderId: "852994237967",
  appId: "1:852994237967:web:32c004e42176c4d328257a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 우리 프로젝트에 대한 인증 서비스를 사용하겠다라는 의미
export const auth = getAuth(app);
