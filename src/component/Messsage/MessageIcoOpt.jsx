
import React from 'react';
import ProfilePic from "../extracompont/ProfilePic"
import './messageicoopt.scss'
import Chr from '../extracompont/Chr'


const MessageIcoOpt = ({handleMessageBox},props) => {

    var img=props.img || '../assets/profilepic.png',user=props.user || 'user',last_msg=props.last_msg ||'hi how are you',time_stamp=props.time_stamp ||'6:30 PM',unread_num=props.unread_num||'2'
    const messagelist=[1,2,3,4,5,6,7]

    const messages=messagelist.map((k)=>

    <div className='messages-list' key={k.toString()} style={{margin:'5px'}} onClick={handleMessageBox}>
            <div>
                <ProfilePic size={'50px'}/>
            </div>
            <div style={{width:'60%',display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
            <span style={{fontWeight:'bold',fontSize:18}}>{user}</span>
            <span style={{fontSize:15}}>{last_msg}</span>
            </div>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
                <span style={{fontSize:12,fontWeight:'bold'}}>{time_stamp}</span>
                <div style={{borderRadius:'25%',color:'red'}}>
                    <span style={{alignSelf:'center',fontSize:11}}>{unread_num}</span>
                </div>
            </div>
        </div>

    );

    return (
        <div className='messagelist-cont'>
            <div className="upper-part">
            {messages}
            </div>
            <Chr height={'5px'}/>
            <div className="lower-part">
                <span>
                    See All {'>>>'}
                </span>
            </div>
        </div>
    );
};

export default MessageIcoOpt;