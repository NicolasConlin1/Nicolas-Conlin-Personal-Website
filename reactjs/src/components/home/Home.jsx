import React from 'react'
import './Home.css'
import GamecubeInterface from './GamecubeInterface'
import homeVid from '../../assets/PersonalWebsiteVideo.mp4'

function Home() {
    return (
        <div className='home'>
            <h1 className = 'siteTitle'>
                Nicolas Conlin's Website
            </h1>
            <hr></hr>
            <div className='tv'>
                <video width='800px' height='450px' controls>
                    <source src={homeVid} type='video/mp4'/>
                </video>
            </div>
            <br></br>
            <div style={{marginTop: 'auto'} }>
                <GamecubeInterface />
            </div>
        </div>
    )
}

export default Home
