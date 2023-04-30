import firebase from 'firebase/compat/app';
import "firebase/compat/auth";

// Rename the local firebase variable
const localFirebase = firebase;

// Use the renamed variable in the function implementations
export const signInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    const userCredential = await localFirebase.auth().signInWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createUserWithEmailAndPassword = async (email: string, password: string) => {
    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
      console.log("Created new user:", user);
    } catch (error) {
      console.error("Error creating user:", error);
    }
};

export const signOut = async () => {
  try {
    await localFirebase.auth().signOut();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getCurrentUser = () => {
  const user = localFirebase.auth().currentUser;
  return user;
};

export const onAuthStateChanged = (callback: (user: firebase.User | null) => void) => {
  const unsubscribe = localFirebase.auth().onAuthStateChanged(callback);
  return unsubscribe;
};
