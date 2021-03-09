// Import the stuff you need from the sdk
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDdU-Itf15y2i4Ns1NiXiwCeNNiNZ34HUA",
    authDomain: "cyhermes-project-1.firebaseapp.com",
    projectId: "cyhermes-project-1",
    storageBucket: "cyhermes-project-1.appspot.com",
    messagingSenderId: "136314634490",
    appId: "1:136314634490:web:b44d8af2c0ec1936f94943"
  };


// initialize the firebase app
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage()

// timestamp
//const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export the above
export { projectFirestore, projectAuth, projectStorage }// add timestamp if you want