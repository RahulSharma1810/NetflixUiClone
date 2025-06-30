
import { initializeApp } from "firebase/app";
import { 
    createUserWithEmailAndPassword,getAuth,
    signInWithEmailAndPassword,
    signOut
 } from "firebase/auth";
import { addDoc,
        collection, 
        getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
    apiKey: "AIzaSyCUpZ-q5AV61Emxz_croKRFsc77iSn-ZuI",
    authDomain: "netflix-clone-8bab4.firebaseapp.com",
    projectId: "netflix-clone-8bab4",
    storageBucket: "netflix-clone-8bab4.firebasestorage.app",
    messagingSenderId: "25476232175",
    appId: "1:25476232175:web:36d966c5a17d7add347c1a"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) =>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
          const user = res.user; 
   await addDoc(collection(db,"user"),{
    uid:user.uid,
    name,
    authProvider: "local",
    email,


   }) 
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(""));
    }
}

const login = async (email,password) => {
    try {
        await signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
        console.log(error);
       toast.error(error.code.split('/')[1].split('-').join(""));
    }
}

const logout = () =>{
    signOut(auth);
}

export {auth,db,login,signup,logout};