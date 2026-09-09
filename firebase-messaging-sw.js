// Service worker for background push notifications — this is what
// displays a notification when the app is closed or backgrounded.
//
// The SDK version here MUST match what the Dart side loads on the page,
// which is `supportedFirebaseJsSdkVersion` in the firebase_core_web
// package (check
// ~/.pub-cache/hosted/pub.dev/firebase_core_web-*/lib/src/firebase_core_web_version.dart
// after changing firebase_core). If they drift apart, the page and the
// worker run two different major versions of the SDK against the same
// messaging state: the token registers fine, so everything looks healthy,
// but background delivery silently doesn't work — which is exactly the
// bug this comment exists to stop happening again.
importScripts('https://www.gstatic.com/firebasejs/12.18.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.18.0/firebase-messaging-compat.js');

// Must match lib/firebase_options.dart — a plain JS service worker can't
// import the generated Dart file.
firebase.initializeApp({
  apiKey: 'AIzaSyDF5rzxPlvGBkkWoxVKQGA_nB_WivO4QsI',
  appId: '1:395370344807:web:c57cd510fa6f2de56c3fc2',
  messagingSenderId: '395370344807',
  projectId: 'modernhealth-82bf4',
});

// No onBackgroundMessage handler on purpose: the server sends a
// `notification` payload, which the SDK's own push handler displays
// automatically. Adding a handler here as well causes duplicate
// notifications on some browsers.
firebase.messaging();
