import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBr2ihkCRjsrBUvsdxCnQqrHjL3_jymEEk",
    authDomain: "clothing-store-db-79d3e.firebaseapp.com",
    databaseURL: "https://clothing-store-db-79d3e.firebaseio.com",
    projectId: "clothing-store-db-79d3e",
    storageBucket: "clothing-store-db-79d3e.appspot.com",
    messagingSenderId: "352387383236",
    appId: "1:352387383236:web:1231d67bfe26c1c8a46e91"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email }  = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName, 
                email, 
                createdAt, 
                ...additionalData
            })
        }
        catch(error){
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;

