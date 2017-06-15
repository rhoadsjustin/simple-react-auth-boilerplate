import firebase from 'firebase';

// Provided by the Firebase console
const config = {
      apiKey: "AIzaSyBH4yPRwG797ZixX8cRKP2LyrFknpRGUcw",
      authDomain: "simple-react-auth.firebaseapp.com",
      databaseURL: "https://simple-react-auth.firebaseio.com",
      projectId: "simple-react-auth",
      storageBucket: "",
      messagingSenderId: "865887545456"
};

// Firebase instance
firebase.initializeApp(config);

// Firebase doesn't return data as an array but as a parent object
//  containing child objects. This utility function will extract
//  the child objects into an array and place the key as 'id'
const firebaseListToArray = (firebaseObjectList) => {
  if (!firebaseObjectList) return [];

  return Object.keys(firebaseObjectList)
    .map(k => {
      const obj = {
        id: k
      };
      for (let key in firebaseObjectList[k]) {
        if (firebaseObjectList[k].hasOwnProperty(key)) {
          obj[key] = firebaseObjectList[k][key];
        }
      }
      return obj;
    });
}

const database = firebase.database();
const auth = firebase.auth();

export { firebase, database, auth };
export { firebaseListToArray };
