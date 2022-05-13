import firebase from "firebase/app"
import "firebase/auth"
// firebase config
const config = {
  apiKey: "AIzaSyCX_WFadqwTmT3dimmEZwIK6QLqV6vQnJg",
  authDomain: "ecommerce-1c7b9.firebaseapp.com",
  projectId: "ecommerce-1c7b9",

  messagingSenderId: "384357228821",
  appId: "1:384357228821:web:ab2e8b3ae420036edec91c"
}
// initialize firebase app
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
// export
// export default firebase;
export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
