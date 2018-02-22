import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAKh6pFF90SFJ_1_Rb5zmOO-XSTkDqsaGI',
  authDomain: 'tasklist-90401.firebaseapp.com',
  databaseURL: 'https://tasklist-90401.firebaseio.com',
  projectId: 'tasklist-90401',
  storageBucket: 'tasklist-90401.appspot.com',
  messagingSenderId: '472745352982',
};

const fire = firebase.initializeApp(config);
export const authProvider = new firebase.auth.GoogleAuthProvider();
export const fireAuth = firebase.auth();

export function fireId() {
  return firebase.auth().currentUser.uid;
}

export default fire;
