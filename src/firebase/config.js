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

export default getFirestoreApp