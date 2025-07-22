// Fire base imports 
import { log } from 'console';
import { initiaizeApp } from 'firebase/app';
import { getFireStore } from 'firebase/firestore';

import { collection, addDoc} from 'firebase/firestore'


// fire base configuration is done here
const firebaseConfig = {
  apiKey: import.meta.FIREBASE_API_KEY,
  authDomain: "nadis-ecommerce-site.firebaseapp.com",
  projectId: "nadis-ecommerce-site",
  storageBucket: "nadis-ecommerce-site.firebasestorage.app",
  messagingSenderId: "764774332008",
  appId: import.meta.FIREBASE_API_ID,
  measurementId: "G-WXDQWQHFR1"
}


// initialization
const app = initiaizeApp(firebaseConfig)


try{
    const docref = await addDoc(collection(db, "users"), {
        first: 'Ada',
        last: 'Lovelace',
        born: 1817
    });
    console.log(`Document written with ID : ${docref.id}`)
} catch(err){
    console.log('There was an error', err)   
}