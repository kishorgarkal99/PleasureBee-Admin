import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "../config/firebase"

const signUp = async (email: string, password: string) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password)
    } catch (err) {
        console.error(err)
    }
};
const signIn = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            return userCredential.user;
            // ...
        })
        .catch((error) => {
            console.log(error.code, error.message)
        })
}

const logOut = async () => {

    try {
        await signOut(auth)
    } catch (err) {
        console.error(err)
    }
};

export {
    signUp,
    signIn,
    logOut
}