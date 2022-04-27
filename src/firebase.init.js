// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3m17AcKvzf5Bhu61QB-gYBn00UoG5-M8",
    authDomain: "ema-john-shopping-72e78.firebaseapp.com",
    projectId: "ema-john-shopping-72e78",
    storageBucket: "ema-john-shopping-72e78.appspot.com",
    messagingSenderId: "624144667532",
    appId: "1:624144667532:web:26649f3e66e918f152fca9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;