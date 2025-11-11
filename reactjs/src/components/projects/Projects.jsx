import React from 'react'
import './Projects.css'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import openGL1stPerson from '../../assets/OpenGL1st.png'
import openGLSky from '../../assets/OpenGLSky.png'
import pygameMenu from '../../assets/PygameMenu.png'
import pygameBoard from '../../assets/PygameBoard.png'
import gamejamOverview from '../../assets/UnityGameJamOverview.png'
import gamejamJump from '../../assets/UnityGameJamLightJump.png'
import gamejamCombat from '../../assets/UnityGameJamCombat.png'
import goWeatherDefault from '../../assets/GoWeatherAPIGUI-1.png'
import goWeatherLoading from '../../assets/GoWeatherAPIGUI-2.png'
import goWeatherDone from '../../assets/GoWeatherAPIGUI-3.png'

const Projects = () => {
    return (
        <div className='projects'>
            <h1 className='projectsTitle'>
                Projects
            </h1>
            <br></br>
            <h3 className='projectsIntro'>
                This is a small curation of some of the different coding projects that I've worked on, mostly for college courses, and still have the codebases for.
                <br></br>
                Please feel free to ask about any projects that are and are not featured on this page, I'd be happy to explain further.
            </h3>
            <hr></hr>
            <div className='glossaryContainer'>
                <div>
                    <h2 className='projectsHeader' id='glossary'>
                        Glossary:
                    </h2>
                </div>
                <div>
                    <ul className='glossary'>
                        <li className='glossaryItem' onClick={() => document.getElementById('website').scrollIntoView({ block: 'start', behavior: 'smooth' })}>
                            <div className='hoverTransform'>
                                This Website
                            </div>
                        </li>
                        <li className = 'glossaryItem' onClick={() => document.getElementById('openGL').scrollIntoView({ block: 'start', behavior: 'smooth' })}>
                            <div className='hoverTransform'>
                                OpenGL & C 3D Open World Sandbox
                            </div>
                        </li>
                        <li className='glossaryItem' onClick={() => document.getElementById('pygame').scrollIntoView({ block: 'start', behavior: 'smooth' })}>
                            <div className='hoverTransform'>
                                Basic Pygame 2048 Recreation
                            </div>
                        </li>
                        <li className='glossaryItem' onClick={() => document.getElementById('gamejam').scrollIntoView({ block: 'start', behavior: 'smooth' })}>
                            <div className='hoverTransform'>
                                Small Gamejam Unity Title
                            </div>
                        </li>
                        <li className='glossaryItem' onClick={() => document.getElementById('goweather').scrollIntoView({ block: 'start', behavior: 'smooth' })}>
                            <div className='hoverTransform'>
                                Golang Weather App
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <hr></hr>
            <h2 id='website'>
                This Website
            </h2>
            <p className='projectText'>
                First things first this website was built largely from scratch utlizing the Visual Studio project template base.
                <br></br>
                While I learned HTML and CSS web development in college, this site utilizes React JS for a more modern experience.
            </p>
            <hr></hr>
            <h2 id = 'openGL'>
                OpenGL & C Open World Sandbox
            </h2>
            <div className='projectSection'>
                <Zoom>
                    <img className='projectImg' src={openGL1stPerson} alt='First Person View of the OpenGL Project' title='First Person View of the OpenGL Project'></img>
                </Zoom>    
                <p className = 'projectText'>
                    Utilizing C and OpenGL a 3D city block was created that can be explored using a player-controlled camera.
                    <br></br>
                    All objects were created in code with no pre-made models. Textures are all in the bmp format and were pulled from open-source libraries.
                    <br></br>
                    The code can be found on <div className='hoverTransform'> <a target="_blank" rel="noopener noreferrer" href='https://github.com/NicolasConlin1/OpenGL-With-C-3D-Open-World'>github</a> </div>.
                </p>
            </div>
            <div className='projectSection'>
                <p className='projectText'>
                    Objects move around the world although the inclusion of animations and camera collision were omitted due to being out of scope for the assignment.
                    <br></br>
                    There are multiple lighting modes including dynamic lighting with the origin being a large lit object that orbits the scene acting as a sun in a day-night cycle.
                    <br></br>
                    All work was done individually.
                </p>
                <Zoom>
                    <img className='projectImg' src={openGLSky} alt='Overhead View of the OpenGL Project' title='Overhead View of the OpenGL Project'></img>
                </Zoom>
                </div>

            <hr></hr>
            <h2 id='pygame'>
                2048 Pygame Recreation
            </h2>
            <div className='projectSection'>
                <Zoom>
                    <img className='projectImg' src={pygameMenu} alt='Main Menu of Pygame Project' title='Main Menu of Pygame Project'></img>
                </Zoom>
                <p className='projectText'>
                    A recreation of the classic mobile and web game '2048' using Python's pygame library.
                    <br></br>
                    How tiles are created, placed, moved and combined were made to perfectly replicate the original 2048.
                    <br></br>
                    Highscores are saved to an external file and can be manually reset.
                    <br></br>
                    The code can be found on <div className='hoverTransform'> <a target="_blank" rel="noopener noreferrer" href='https://github.com/NicolasConlin1/2048-Pygame-Recreation'>github</a></div>.
                </p>
            </div>
            <div className='projectSection'>
                <p className = 'projectText'>
                    All windows, UI, and graphics were generated using pygame's built in functions with no additional assets.
                    <br></br>
                    Multiple design patterns were used to effectively run the game, including a combination of singleton and logger.
                    <br></br>
                    Although simple in nature, it's an easy to run and effective demonstration of coding fundamentals in a group effort.
                </p>
                <Zoom>
                    <img className='projectImg' src={pygameBoard} alt='The Main Pygame 2048 Board' title='The Main Pygame 2048 Board'></img>
                </Zoom>
            </div>
            <hr></hr>
            <h2 id='gamejam'>
                Small Gamejam Unity Title
            </h2>
            <div className='projectSection'>
                <Zoom>
                    <img className='projectImg' src={gamejamOverview} alt='Unity Editor With the Gamejam Title' title='Unity Editor With the Gamejam Title'></img>
                </Zoom>
                <p className='projectText'>
                    A short one level web-based game made in Unity for a Gamejam.
                    <br></br>
                    This was my first foray into Unity and only has one week of solo work, so it's very limited.
                    <br></br>
                    The game was a 2D platformer / brawler in which the player characters abilities were enhanced based on the lighting.
                </p>
            </div>
            <div className='projectSection'>
                <p className='projectText'>
                    Platforming challenges based on using a mid-air dash with proper timing to both reach platforms while considering the extra length & speed from the lighting were utilized.
                </p>
                <Zoom>
                    <img className='projectImg' src={gamejamJump} alt='Gamejam Title Showing a Jump With a Pillar of Light' title='Gamejam Title Showing a Jump With a Pillar of Light'></img>
                </Zoom>
            </div>
            <div className='projectSection'>
                <Zoom>
                    <img className='projectImg' src={gamejamCombat} alt='Gamejam Title Showing a Boss Fight With Sections of Darkness and Light' title='Gamejam Title Showing a Boss Fight With Sections of Darkness and Light'></img>
                </Zoom>
                <p className='projectText'>
                    Combat was simplistic with enemy AI being one of the last elements implimented, but consideration of spacing with the light was still a factor.
                </p>
            </div>
            <hr></hr>
            <h2 id='goweather'>
                Golang Weather App
            </h2>
            <div className='projectSection'>
                <p className='projectText'>
                    As part of self-teaching myself Golang I created a simple weather app in order to utlize API calls and create a GUI only using Go.
                    <br></br>
                    The code can be found on <div className='hoverTransform'> <a target="_blank" rel="noopener noreferrer" href='https://github.com/NicolasConlin1/Go_Weather_App'>github</a></div>.
                </p>
                <Zoom>
                    <img className='projectImg' src={goWeatherDefault} alt='Default State of Go Weather App GUI' title='Default State of Go Weather App GUI'></img>
                </Zoom>
            </div>
            <div className='projectSection'>
                <Zoom>
                    <img className='projectImg' src={goWeatherDone} alt='Finished State of Go Weather App' title='Finished State of Go Weather App'></img>
                </Zoom>
                <p className='projectText'>
                    The GUI was created using the open source library Fyne which was also made entirely in Go.
                    <br></br>
                    The library allowed for window creation, loading bars, and updates based on user input.
                </p>
            </div>
            <div className='projectSection'>
                <p className='projectText'>
                    Weather.gov was used for free API calls with the intent of getting a forecast of a given U.S. state.
                    <br></br>
                    Due to their odd setup an open source JSON file of the general lat & long of each state for an initial call, which gave the information needed for another call to get the forecast.
                    <br></br>
                    Since multiple API calls can take a variable amount of time, multithreading was used to display a loading bar & keep the GUI active while conducting the API call.

                </p>
                <Zoom>
                    <img className='projectImg' src={goWeatherLoading} alt='Loading State of Go Weather App' title='Loading State of Go Weather App' ></img>
                </Zoom>
            </div>
        </div>
    )
}

export default Projects