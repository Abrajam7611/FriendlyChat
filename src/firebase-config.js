/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
 const config = {
  apiKey: "AIzaSyC4Ysf4aAQa20CQtIgU6aiFiRXa5_sR-RQ",
  authDomain: "fir-b0105.firebaseapp.com",
  projectId: "fir-b0105",
  storageBucket: "fir-b0105.appspot.com",
  messagingSenderId: "638680628474",
  appId: "1:638680628474:web:9f2af54da82c33c5791d43"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}