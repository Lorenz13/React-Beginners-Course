import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "XXX",
  authDomain: "react-for-beginners-lorenz.firebaseapp.com",
  databaseURL: "https://react-for-beginners-lorenz.firebaseio.com",
  projectId: "react-for-beginners-lorenz",
  storageBucket: "react-for-beginners-lorenz.appspot.com",
  messagingSenderId: "970822825916"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;