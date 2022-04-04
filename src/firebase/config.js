import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB19PPdQfpZJeXCBmtmYIulKV2v_Oq7H58",
    authDomain: "reading-list-434bc.firebaseapp.com",
    projectId: "reading-list-434bc",
    storageBucket: "reading-list-434bc.appspot.com",
    messagingSenderId: "635634073464",
    appId: "1:635634073464:web:71928eab572517eabb528d"
}

// init firebase
initializeApp(firebaseConfig)

// init firestore
const db = getFirestore()

export { db }


