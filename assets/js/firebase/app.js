  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB8cibhfkCn6H2c7juPolGJCprFNTHWeTE",
    authDomain: "projeto-teste-a430d.firebaseapp.com",
    projectId: "projeto-teste-a430d",
    storageBucket: "projeto-teste-a430d.appspot.com",
    messagingSenderId: "898357018909",
    appId: "1:898357018909:web:1928e87a9d50c0c15021f4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  export default app