import React from 'react'
import './About.css'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import pw1 from '../../assets/Pro-Wrestling1.jpg'
import pw2 from '../../assets/Pro-Wrestling2.jpg'
import consoles from '../../assets/Consoles.jpg'
import stickArt from '../../assets/Stick-Art.jpg'
import washingRepair from '../../assets/Washing-Machine-Repair.jpg'
import rp2040Board from '../../assets/RP2040-Zero-GC-Adapter.jpg'
import wiiBoard from '../../assets/Wii-Motherboard.jpg'

function About() {
  return (
      <div className='about'>
          <h1 className='aboutTitle'>
              About Me
          </h1>
          <br></br>
          <h3 className='aboutIntro'>
              This is a showcase of some of my interests and hobbies
          </h3>
          <hr></hr>
          <h2>
              Professional Wrestling
          </h2>
          <br></br>
          <div className='aboutSection'>
              <Zoom style={{marginRight: '2rem'}}>
                <img className='aboutImg' src={pw1} alt='A group picture of my Pro Wrestling class' title='A group picture of my Pro Wrestling class'></img>
            </Zoom>
            <Zoom>
                <img className='aboutImg' src={pw2} alt='Me getting lectured in my Pro Wrestling class' title='Me getting lectured in my Pro Wrestling class'></img>
            </Zoom>
          </div>
          <br></br>
            <p className='aboutText'>
                While I haven't done much to keep up with the world of Pro Wrestling as of late, it used to be a big part of my life.
                <br></br>
                In my late teens I joined a Pro Wrestling school and trained for several years before taking an indefinite hiatus to recover.
                <br></br>
                It was the most crushing experience of my life, both mentally and physically, but I wouldn't trade the experience for anything.
            </p>
          <hr></hr>
          <h2>
              Weight Lifting
          </h2>
          <br></br>
            <p className='aboutText'>
                Despite leaving Pro Wrestling I still take the time to exercise with a focus on gaining muscle.
                <br></br>
                For the last few years I've also been training my dear mother who sacrificed many years to take care of my brother and I.
                <br></br>
                Exercise is a great way not only to grow physically stronger, but also to gain better muscle control and learn widely aplicable life lessons, so it's been a pleasure to share what I know.
            </p>
          <hr></hr>
          <h2>
              Gaming
          </h2>
          <br></br>
          <div className='aboutSection'>
            <Zoom>
                  <img className='aboutImg' src={consoles} alt='My collection of game consoles' title='My collection of game consoles'></img>
            </Zoom>
              <Zoom>
                  <img className='aboutImg' src={stickArt} alt='My custom fightstick art' title='My custom fightstick art'></img>
              </Zoom>
          </div>
          <br></br>
            <p className='aboutText'>
                And award for least suprising hobby for a programmer to have goes to...
                <br></br>
                In all seriousness, I've been playing video games literally my entire life thanks to my older brother, and my passion for it has only grown.
                <br></br>
                From the NES to the dearly beloved PS2 and now all the way to VR, it's always a pleasure to kick back and relax with the pinacle of artistic expression in media.
          </p>
          <hr></hr>
          <h2>
              Electronic Repair / Tinkering
          </h2>
          <br></br>
          <div className='aboutSection'>
              <Zoom>
                  <img className='aboutImg' src={washingRepair} alt='A half taken apart washing machine' title='A half taken apart washing machine'></img>
              </Zoom>
              <Zoom>
                  <img className='aboutImg' src={rp2040Board} alt='A custom soldered RP2040-Zero board' title='A custom soldered RP2040-Zero board'></img>
              </Zoom>
              <Zoom>
                  <img className='aboutImg' src={wiiBoard} alt='A Wii Motherboard' title='A Wii Motherboard'></img>
              </Zoom>
          </div>
          <br></br>
          <p className='aboutText'>
              I'm do electronic repair as a hobby, ranging from large appliances to small boards.
              <br></br>
              I have no formal training, but I do have a decent amount of experience with the solder burns to prove it, and I find it very enjoyable.
              <br></br>
              Making custom electronic projects is something I'm much more new to, but I've delving into that world has also been a lot of fun.
          </p>
          <br></br>
      </div>
  );
}

export default About;