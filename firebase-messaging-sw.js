importScripts('https://www.gstatic.com/firebasejs/5.5.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.2/firebase-messaging.js');


 var config = {
    apiKey: "AIzaSyDXTSwwB78ZO2BCeHpfVbE6Q-o7LiSzLus",
    authDomain: "pushnotificationproject-6cd09.firebaseapp.com",
    databaseURL: "https://pushnotificationproject-6cd09.firebaseio.com",
    projectId: "pushnotificationproject-6cd09",
    storageBucket: "pushnotificationproject-6cd09.appspot.com",
    messagingSenderId: "1099139601062"
  };

  firebase.initializeApp(config);
   const messaging = firebase.messaging();