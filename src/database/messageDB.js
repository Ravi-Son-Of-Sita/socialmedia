import {collection,getDocs} from 'firebase/firestore'
import db from '../firebase'

cosnt CheckChatID = (ChatID)=>{
    const chatId1ref = collection(db,'chat/[CHAT_ID_U]')
    cosnt chatId2ref = collection(db,'chat/[CHAT_ID_CU')
}
