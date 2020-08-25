import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyC9nvkzSy0VymnO9BPo09DB32lXXiPi2qw",
    authDomain: "procurement-f865c.firebaseapp.com",
    databaseURL: "https://procurement-f865c.firebaseio.com",
    projectId: "procurement-f865c",
    storageBucket: "procurement-f865c.appspot.com",
    messagingSenderId: "548531397302",
    appId: "1:548531397302:web:f86a423b5b2493fb73fc17"
  };
// Initialize Firebase
var db = firebase.initializeApp(firebaseConfig);

export default db.database().ref();