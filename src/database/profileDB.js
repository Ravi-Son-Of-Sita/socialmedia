import { dbfS } from "../firebase";
import {collection,doc,setDoc} from 'firebase/firestore'
const ProfileCreate=async(userid,username,email)=>{
    console.log(userid,username,email,dbfS.doc())
const ProfileRef = collection(dbfS,'users');
try{
    await setDoc(doc(ProfileRef,userid),{
        username:username,
        email:email
    })

}
catch(err){
    console.log(err)
}
}

export default ProfileCreate;