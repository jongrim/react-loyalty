import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBjHKQDLfXp8WYN1cnQYqn2Bv6j0py8aNc',
  authDomain: 'customer-management-b7ddb.firebaseapp.com',
  databaseURL: 'https://customer-management-b7ddb.firebaseio.com',
  projectId: 'customer-management-b7ddb',
  storageBucket: 'customer-management-b7ddb.appspot.com',
  messagingSenderId: '382547368422'
};

firebase.initializeApp(config);

export const firebaseAuth = firebase.auth;
