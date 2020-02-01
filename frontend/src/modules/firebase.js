import * as firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyDr0PbKiYLGrn7yiTlEfnAuVDxWEEixEqM",
  authDomain: "we-world-d10dd.firebaseapp.com",
  databaseURL: "https://we-world-d10dd.firebaseio.com",
  projectId: "we-world-d10dd",
  storageBucket: "we-world-d10dd.appspot.com",
  messagingSenderId: "448267857261",
  appId: "1:448267857261:web:331f510e8b7578cc4bbe64",
  measurementId: "G-H837KT6F63"
}
firebase.initializeApp(firebaseConfig);

const database = firebase.database()

export default database