
import React from 'react';
import ProfilePic from "./ProfilePic"
import './messageicoopt.scss'
import Chr from './Chr'


const MessageIcoOpt = ({handleMessageBox}) => {

    const messagelist=[1,2,3,4,5,6,7]

    const messages=messagelist.map((k)=>

    <div className='messages-list' key={k.toString()} style={{margin:'5px'}} onClick={handleMessageBox}>
            <div>
                <ProfilePic size={'25px'}/>
            </div>
            <div>user Name</div>
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