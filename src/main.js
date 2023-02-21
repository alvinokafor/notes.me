import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7p5I5MHpHo2dDP2U_od4Be5oIzme4_RU",
  authDomain: "notes-22702.firebaseapp.com",
  projectId: "notes-22702",
  storageBucket: "notes-22702.appspot.com",
  messagingSenderId: "738748879603",
  appId: "1:738748879603:web:9914e367fa6801a6eb9d86",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App);
app.use(router);
app.mount("#app");
