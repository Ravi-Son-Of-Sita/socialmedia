import {onSnapshot,collection,doc, setDoc , serverTimestamp,query} from 'firebase/firestore'
import { dbfS } from '../firebase';
import { auth } from '../firebase';

const SendMessageDb=async(ChatId,message,attechment)=>{
    var uid=crypto.randomUUID()
    console.log(uid)
    const data={
        [uid]:{
         message:message,
         attechMent:attechment,
         sendBy:auth.currentUser.uid,
         time:serverTimestamp()}
         
     }

    const chat = collection(dbfS,'chats');
    try{
        await setDoc(doc(chat,ChatId),data,{merge:true})

    }
    catch(err){
        console.log(err)
    }
}
export const ReadMessageDb=(ChatId)=>{
    console.log('readmsg')
    const q=query(collection(dbfS,'chats'))
    const unsubscribe =  onSnapshot(doc(q,ChatId),(snapshot)=>{
       snapshot.data({serverTimestamps:'estimate'})
        console.log(snapshot.data({serverTimestamps:'estimate'}))
        return snapshot.data({serverTimestamps:'estimate'})
})
    return ()=> unsubscribe()
}

export default SendMessageDb;