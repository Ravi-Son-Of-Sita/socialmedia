import { dbfS } from "../firebase";
import {collection,doc,setDoc} from 'firebase/firestore'
const ProfileCreate=async(uid,username,email)=>{
    console.log(uid,username,email)
const ProfileRef = collection(dbfS,'users');
try{
    await setDoc(doc(ProfileRef,'/[uid]'),{
        username:username,
        email:email
    })

}
catch(err){
    console.log(err)
}
}

export default ProfileCreate;