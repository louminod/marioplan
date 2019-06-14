import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyDCZmhwLCcv9HfhyrQwUJ4TwFG1BJy-Q6Y",
  authDomain: "obloow-marioplan-c2162.firebaseapp.com",
  databaseURL: "https://obloow-marioplan-c2162.firebaseio.com",
  projectId: "obloow-marioplan-c2162",
  storageBucket: "obloow-marioplan-c2162.appspot.com",
  messagingSenderId: "495635202536",
  appId: "1:495635202536:web:5a56ac46c180e881"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 