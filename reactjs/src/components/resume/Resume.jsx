import React from 'react'
import './Resume.css'
import gmailLogo from '../../assets/Gmail.png'
import linkedinLogo from '../../assets/LinkedIn.png'
import phoneLogo from '../../assets/Phone.png'
import {Link} from 'react-router-dom'

const Resume = () => {

    return (
        <div className='resume'>
            <div className='resumeTop'>
            <div className='nameAndTitle'>
                <h1 className = 'name'>
                    Nicolas Conlin
                </h1>
                <h2 className='title'>
                    Computer Scientist
                </h2>
            </div>
            <div className='contact'>
                <ul className='contactList'>
                    <li>
                        <img className='contactImg' src={phoneLogo} alt='Phone Image' title= 'Phone Image'></img> <p className = "contactText"> [Mobile] +1 (720) 775-7106</p>
                    </li>
                    <li>
                        <div className = 'hoverTransform'>
                            <a target="_blank" rel="noopener noreferrer" href="mailto:nicoconlin@gmail.com">
                                <img src={gmailLogo} className='contactImg' alt='Gmail Logo' title='Gmail Logo'></img> <p className="contactText"> nicoconlin@gmail.com</p>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className = 'hoverTransform'>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nicolas-conlin-csci">
                                <img src={linkedinLogo} className='contactImg' alt='LinkedIn Logo' title='LinkedIn Logo'></img> <p className="contactText"> www.linkedin.com/in/nicolas-conlin-csci</p>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
            </div>
            <hr></hr>
            <h2 className='sectionTitle'>
                Summary
            </h2>
            <p className = "resumeText">
                Young and eager college graduate ready to enter the tech industry. Proficient in multiple coding languages, principles, and techniques. Willing to learn and adapt to any workplace environment.
            </p>
            <hr></hr>
            <h2 className='sectionTitle'>
                Hobbies & Interests
            </h2>
            <ul className = "resumeList">
                <li>
                    Playing/watching different media and critiquing it to better understand what affects the quality of an experience in different ways.
                </li>
                <li>
                    Going to the gym.
                </li>
                <li>
                    Listening to music and creating custom playlists.
                </li>
            </ul>
            <hr></hr>
            <h2 className='sectionTitle'>
                Education
            </h2>
            <h3 className="subSectionTitle">
                <div className='hoverTransform'>
                    <a href="https://www.colorado.edu/">
                        Bachelor's Degree from the University of Colorado Boulder
                    </a>
                </div>
            </h3>
            <ul className="resumeList" style={{ "list-style-type": "none" }}>
                <li>
                    Aug 2019 - Dec 2022
                    <ul className="resumeNestedList">
                        <li>
                            Major in Computer Science, Minor in Philosophy.
                        </li>
                    </ul>
                </li>
                <li>
                    Diploma link: <div className='hoverTransform'><a href="https://reg.colorado.edu/cediploma/">https://reg.colorado.edu/cediploma/</a></div>
                    <ul className="resumeNestedList">
                        <li>
                            CeDiD: 23Z1-Q33E-NSNJ and Name: NI.
                        </li>
                    </ul>
                </li>
            </ul>
            <br></br>
            <h3 className="subSectionTitle">
                Major Academic Projects
            </h3>
            <ul className="resumeList">
                <div className='hoverTransform'>
                    <li>
                        <Link to="/Projects#openGL"> Fully designed an interactive 3D landscape with dynamic lighting using C in conjunction with OpenGL.</Link>
                    </li>
                </div>
                <div className='hoverTransform'>
                <li>          
                        <Link to="/Projects#pygame"> Worked with a team to create an interactive experience and UI with locally stored data in Python.</Link>

                    </li>
                </div>
                <li>
                    Worked as team lead on an IOS app through Apple's Swift which incorporated a remote SQL database utilizing Amazon AWS.
                </li>
            </ul>
            <hr></hr>
            <h2 className='sectionTitle'>
                Work Experience
            </h2>
            <h3 className="subSectionTitle">
                <div className='hoverTransform'>
                    <a href="https://www.dataannotation.tech/"> Programming A.I. Trainer - DataAnnotation </a>
                </div>
            </h3>
            <ul className="resumeList" style={{"list-style-type": "none"} }>
                <li>
                    June 2024 - Present
                    <ul className="resumeNestedList">
                        <li>
                            Worked with numerous advanced artificial intelligence coding language models for a variety of companies through DataAnnotation.
                        </li>
                        <li>
                            Analyzed, critiqued, and edited code generated by A.I. for accuracy and efficiency.
                        </li>
                        <li>
                            Utilized multiple coding languages including Python, C++, Java, HTML, SQL, and more on topics ranging from early college level to advanced large form projects.
                        </li>
                    </ul>
                </li>
            </ul>
            <hr></hr>
            <h2 className='sectionTitle'>
                Skills
            </h2>
            <h3 className="subSectionTitle">
                Soft Skills
            </h3>
            <ul className="resumeList">
                <li>
                    Works well solo or in a team.
                </li>
                <li>
                    Quick to learn and improve.
                </li>
                <li>
                    Adaptable to a fast paced work environment.
                </li>
                <li>
                    Honest and accountable for actions.
                </li>
            </ul>
            <br></br>
            <h3 className="subSectionTitle">
                Hard Skills
            </h3>
            <ul className="resumeList">
                <li>
                    Proficiency in multiple coding languages, including OOP.
                    <ul className="resumeNestedList">
                        <li>
                            C Family
                        </li>
                        <li>
                            Python
                        </li>
                        <li>
                            Java & JS
                        </li>
                        <li>
                            HTML & CSS
                        </li>
                    </ul>
                </li>
                <li>
                    Experience in AGILE and WATERFALL development methodologies.
                </li>
                <li>
                    Experience using SQL and NoSQL databases.
                </li>
                <li>
                    Use of Git for repository management.
                </li>
                <li>
                    Familiarity with Windows, MacOS, and Linux operating systems.
                </li>
            </ul>
            <br></br>
        </div>
    )
}

export default Resume