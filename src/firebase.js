import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth,GoogleAuthProvider ,signInWithPopup} from 'firebase/auth' 

const firebaseConfig = {
    apiKey: "AIzaSyBl8WiJUAktjnE54I1QyzWk1N_wXR2e6ss",
    authDomain: "discord-clone-3999f.firebaseapp.com",
    projectId: "discord-clone-3999f",
    storageBucket: "discord-clone-3999f.appspot.com",
    messagingSenderId: "640154756808",
    appId: "1:640154756808:web:caa8c2f88fdb63f3e0a7fd",
    measurementId: "G-1HZWFTNSFH"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app) 
export const provider = new GoogleAuthProvider()

export const signIn = ()=>{
    signInWithPopup(auth,provider).then((res)=>{
        const name = res.user.displayName
        const email = res.user.email
        const profilePic = res.user.photoURL
        localStorage.setItem("name",name)
        localStorage.setItem("email",email)
        localStorage.setItem("img",profilePic)
        console.log(res)
    }).catch((err)=>console.log(err))
  }