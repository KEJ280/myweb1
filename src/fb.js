import * as firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBtGvQv3fNTQ9LNL8X-n2yCIDHIlKx4-B4",
    authDomain: "kejfirstweb.firebaseapp.com",
    databaseURL: "https://kejfirstweb.firebaseio.com",
    projectId: "kejfirstweb",
    storageBucket: "kejfirstweb.appspot.com",
    messagingSenderId: "835151192629",
    appId: "1:835151192629:web:fad800901027500bc8c77c",
    measurementId: "G-6KJVEYXF0R"



}
 firebase.initializeApp(firebaseConfig);
 const auth = firebase.auth()

 export default auth
