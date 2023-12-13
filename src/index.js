import React from 'react';          
import ReactDOM from 'react-dom/client'; 
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAHzefTGdjbCQa8sXPIxhFt2Tvs6Pji6X0",
//   authDomain: "indyfixer.firebaseapp.com",
//   projectId: "indyfixer",
//   storageBucket: "indyfixer.appspot.com",
//   messagingSenderId: "175199605468",
//   appId: "1:175199605468:web:fba57af006afd87bee1a19",
//   measurementId: "G-RQT91J0PL3"
// };

const firebaseConfig = {
  apiKey: "AIzaSyAhPcObgajKaSdoBWlwIoyYKjresrBc8Qo",
  authDomain: "my-react-blog-bb3f3.firebaseapp.com",
  projectId: "my-react-blog-bb3f3",
  storageBucket: "my-react-blog-bb3f3.appspot.com",
  messagingSenderId: "433549547261",
  appId: "1:433549547261:web:d90ed65270b5753a5bd094"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
<React.StrictMode>
    <App />
</React.StrictMode>
    );


