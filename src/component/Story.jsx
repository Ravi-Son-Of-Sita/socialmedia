import React from 'react'
import {BsFillPlusCircleFill} from 'react-icons/bs'
import './story.scss'
import ravipic from "../assest/raviprofile.jpg"
import ProfilePic from './extracompont/ProfilePic'

function Story() {


    const createStory = () => {console.log('CrateStory') }

    const viewStory = () => { console.log('viewStory') }

    const storylist=[1,2,3,4,5,6,7]

    const storyview=storylist.map((k)=>

    <div className='story-viwer' key={k.toString()} onClick={viewStory}>
        <div className='story'>
            <img className='img-story' src={ravipic} alt=''/>
            <div><ProfilePic/></div>
            <div className='usr-nam'><span>profile</span></div>
            </div>
        </div>

    );

  return (
    <div className='story-contanier'>
        <div className='create-story' onClick={createStory}>
            <div className='profile-pic'><img src={ravipic}/></div>
            <div className='create-story-container' >
                <div className='add-buton'><div>
                    <BsFillPlusCircleFill size={'2em'}/>
                </div></div>
                <div>Creat Story</div>
            </div>
        </div>
        {storyview}
        
    </div>
  )
}

export default Story