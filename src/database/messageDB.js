import {collection,getDocs} from 'firebase/firestore'
import db from '../firebase'

const ChatMssage = (ChatID,message,type)=>{
    const chatId1ref = collection(db,'chat/[CHAT_ID_U]')
    const chatId2ref = collection(db,'chat/[CHAT_ID_CU')
}
