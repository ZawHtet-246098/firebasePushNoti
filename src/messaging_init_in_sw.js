import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCQoB-xBiLFNYmpkvnkU-ordkfL2ZXHbTM",
  authDomain: "pushnotittwo.firebaseapp.com",
  projectId: "pushnotittwo",
  storageBucket: "pushnotittwo.appspot.com",
  messagingSenderId: "242936411485",
  appId: "1:242936411485:web:032e5f2eaea3c7aa5c64b4",
  measurementId: "G-GP4P0SQBDT",
};

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      const app = initializeApp(firebaseConfig);

      const messaging = getMessaging(app);
      getToken(messaging, {
        vapidKey:
          "BE84jgxe03jtT7BHFS17aZ1PPo8zJRB72ZwGzTDPr5T5C-NavuS7ddHcLXsmzfQiG5o4cYofqw-2_QpRL0VAJ8Q",
      }).then((currentToken) => {
        if (currentToken) {
          console.log("currentToken: ", currentToken);
        } else {
          console.log("Can not get token");
        }
      });
    } else {
      console.log("Do not have permission!");
    }
  });
}

requestPermission();
