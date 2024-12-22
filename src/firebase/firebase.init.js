import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAyvMaGeJl_g_EsKRkiCFyNzUnsqAK_RSg",
  authDomain: "ph-assignment-11-sajmul.firebaseapp.com",
  projectId: "ph-assignment-11-sajmul",
  storageBucket: "ph-assignment-11-sajmul.firebasestorage.app",
  messagingSenderId: "414024827016",
  appId: "1:414024827016:web:2da6648e9ab70a53889f3d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
