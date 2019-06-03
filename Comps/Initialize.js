import firebase from 'firebase'

export const Initialize = () => {

var config = {
    apiKey: "AIzaSyABEcd6LanWp3JtR8Lc7cq_5-qWN1iSLTk",
    authDomain: "superchat-b7d5b.firebaseapp.com",
    databaseURL: "https://superchat-b7d5b.firebaseio.com",
    projectId: "superchat-b7d5b",
    storageBucket: "",
    messagingSenderId: "534462431203"
  };
  firebase.initializeApp(config);

}