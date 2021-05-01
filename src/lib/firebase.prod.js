import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyDSlieMTiVZ559YxJFF-2sHe9z0KPGUDIA",
  authDomain: "airbnb-clone-7f6bc.firebaseapp.com",
  projectId: "airbnb-clone-7f6bc",
  storageBucket: "airbnb-clone-7f6bc.appspot.com",
  messagingSenderId: "124519983579",
  appId: "1:124519983579:web:e8fe6be11e932e1b519ffe"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
