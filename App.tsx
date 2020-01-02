import React from 'react';
import firebase from 'firebase';
import MainMenu from './components/MainMenu';

var firebaseConfig = {
  apiKey: "AIzaSyDYp7V6sinBr9wAV35xIxw3KyyTeJWLfk0",
  authDomain: "task-manager-d7260.firebaseapp.com",
  databaseURL: "https://task-manager-d7260.firebaseio.com",
  projectId: "task-manager-d7260",
  storageBucket: "task-manager-d7260.appspot.com",
  messagingSenderId: "922738783851",
  appId: "1:922738783851:web:67ae67903cd95679cfa32e"
};

firebase.initializeApp(firebaseConfig);

export default function App() {
  return <MainMenu />
};
