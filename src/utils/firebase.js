import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDozTpt_2B6o5_U5P3ZV3SNrLzvBMgkzSs",
  authDomain: "crown-db-573de.firebaseapp.com",
  databaseURL: "https://crown-db-573de.firebaseio.com",
  projectId: "crown-db-573de",
  storageBucket: "crown-db-573de.appspot.com",
  messagingSenderId: "249185527990",
  appId: "1:249185527990:web:0a3a0d67a014270a741e17",
  measurementId: "G-SSWCG055EM",
};

export const createUserProfileDocument = async (userAuth, addionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
