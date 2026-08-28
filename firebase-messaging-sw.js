// Service worker for background push notifications when the PWA isn't in
// the foreground. Required by firebase_messaging on web. Config must match
// lib/firebase_options.dart — both point at the same Firebase project
// (modernhealth-82bf4, shared with adaptive-fitness/mobile) since this app
// only reuses that project's Cloud Messaging setup, nothing else in it.
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyDF5rzxPlvGBkkWoxVKQGA_nB_WivO4QsI',
  appId: '1:395370344807:web:c57cd510fa6f2de56c3fc2',
  messagingSenderId: '395370344807',
  projectId: 'modernhealth-82bf4',
});

firebase.messaging();
