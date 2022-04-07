import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDcg4nNv1flluBMzBlw04GuBbqO-3OGbUQ",
  authDomain: "ecommerce-cdprojektred.firebaseapp.com",
  projectId: "ecommerce-cdprojektred",
  storageBucket: "ecommerce-cdprojektred.appspot.com",
  messagingSenderId: "302178821417",
  appId: "1:302178821417:web:dd9852107f40cec2eb4338"
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () =>{
  return app
}
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
