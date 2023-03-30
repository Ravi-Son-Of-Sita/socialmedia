import React,{useState} from 'react'
import CommonProfile from './CommonProfile';
import SelectFriend from '../extracompont/SelectFriend';

function Friends() {
  const [user,setUser]=useState({
    photoURL:'https://scontent.fixr3-1.fna.fbcdn.net/v/t39.30808-1/315547520_5647293015319805_3190613460174702704_n.jpg?stp=dst-jpg_s200x200&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=RfnLZvhi_9kAX9slK67&_nc_ht=scontent.fixr3-1.fna&oh=00_AfATpYeeri1GwFLrTxXw-ZoID1WmK8MKp_Wl7HfKVIjJMw&oe=642ACB78',
    displayName:'Shyam ansari'
  })
  return (
    
    <div style={{display:'flex',flexDirection:"row",justifyContent:"space-between"}}>
    <div style={{width:'30%'}}>friend list</div>
    {user?<CommonProfile user={user}/>:<SelectFriend/>}
    </div>
  )
}

export default Friends;

