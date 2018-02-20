import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDtdHykWwcjMur8Axh8YN8rvkKFB9uR8Z0',
  authDomain: 'todolist-ee4b6.firebaseapp.com',
  databaseURL: 'https://todolist-ee4b6.firebaseio.com',
  projectId: 'todolist-ee4b6',
  storageBucket: 'todolist-ee4b6.appspot.com',
  messagingSenderId: '563235595970',
};

const fire = firebase.initializeApp(config);
export const authProvider = new firebase.auth.GoogleAuthProvider();
export const fireAuth = firebase.auth();

export function fireId() {
  return firebase.auth().currentUser.uid;
}

export default fire;
