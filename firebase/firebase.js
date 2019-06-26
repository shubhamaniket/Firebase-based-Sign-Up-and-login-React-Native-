import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDCVmepGzN1cnWGSsIsJIJYclM5OIFdaGY",
    authDomain: "signup-react-native.firebaseapp.com",
    databaseURL: "https://signup-react-native.firebaseio.com",
    projectId: "signup-react-native",
    storageBucket: "",
    messagingSenderId: "436855989006",
    appId: "1:436855989006:web:23c3f9076229b372"
  };
const fb = firebase.initializeApp(firebaseConfig);
export default fb;