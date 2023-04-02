import React from "react";
import ProfilePic from "../extracompont/ProfilePic";



const Comment =()=>{
	return(
        <div className="dspy-flx-row" style={{padding:'10px',marginBottom:'10px'}}>
            <div >
                <ProfilePic/>
            </div>
            <div className="dspy-flx-cl" style={{paddingLeft:'10px',fontSize:'14.5px',minWidth:'100px'}}>
                <div className="dspy-flx-cl" style={{backgroundColor:'rgb(233, 233, 233)',padding:'10px',borderRadius:"10px"}}>
                    <span style={{fontWeight:'bold',lineHeight:'16px',cursor:'pointer'}}>
                        commenter
                    </span>
                    <p style={{fontSize:'13.5px',lineHeight:'20px'}}>
                        good pic man
                    </p>
                </div>
                <div >
                    <span className="l-s-span" style={{fontSize:'13px'}}>Like</span>
                    <span className="l-s-span" style={{fontSize:'13px'}}>Replay</span>
                    <span className="l-s-span" style={{fontSize:'13px',fontWeight:'normal'}}> 1 d</span>
                </div>
            </div>
        </div>
	)
}
export default Comment;
