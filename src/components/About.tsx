import './css/About.css';
import React, { useState } from 'react';
import ownerAvatar from './resources/avatar.jpg';
import skillsIcon from './resources/SkillsIcon.png';
import htmlLogo from './resources/html-5.png';
import cssLogo from './resources/css.png';
import jsLogo from './resources/js.png';
import tsLogo from './resources/typescript.png';
import reactLogo from './resources/react.png';
import gitLogo from './resources/git.png';
import githubLogo from './resources/github-mark-white.png';

export const About = () => {
    const [showStory, setShowStory] = useState<boolean>(false)

    const toggleStory = () => {
        setShowStory(!showStory)
    }

    return (
        <>
                <div className="owner-container">
                    <div className='owner-name-container'>
                        <p className="owner-name" style={{marginRight:'1rem'}}>Bartosz</p>
                        <p className="owner-name">Maksimowski</p>
                    </div>
                    <img src={ownerAvatar} alt="owner avatar" width={250} className="owner-avatar" />
                    <button className='owner-story-button' onClick={toggleStory}>{showStory ? 'Hide' : "My Story in a Nutshell"}</button>
                    {showStory &&
                    <p className="owner-description">
                        After completing my studies in Management and Production Engineering, I decided to pursue a career in the construction industry. Through two intense years of work and skill development, I came to realize that my growth prospects in this field were limited.
                        I refuse to accept the idea that reaching the pinnacle of my career would occur by the age of 30-35.
                        In 2021, I decided to start learning front-end development. The ability to create, enhance, and enjoy the final results is highly satisfying and keeps me motivated to constantly improve. I am a highly ambitious individual who takes pleasure in the opportunity for continuous growth.
                        <br/>From a young age, I competed on football fields, which taught me how to cope with stress.
                        Unfortunately, an injury disrupted my plans related to sports, but I channeled my addiction to healthy competition into other areas of my life.
                    </p>
                    }
                </div>
                <div className='owner-container'>
                    <div className='owner-name-container'>
                        <h1>My Skills</h1>
                        <img src={skillsIcon} alt="skills icon" width={40} style={{marginLeft:'1rem'}}/>
                    </div>
                    <div className='skills-container'>
                        <div className='skills-div'>
                            <img src={htmlLogo} alt="HTML logo" width={100}/>
                            <p>HTML</p>
                        </div>
                        <div className='skills-div'>
                            <img src={cssLogo} alt="CSS logo" width={100} />
                            <p>CSS</p>
                        </div>
                        <div className='skills-div'>
                            <img src={jsLogo} alt="JS logo" width={100} />
                            <p>JavaScript</p>
                        </div>
                        <div className='skills-div'>
                            <img src={tsLogo} alt="TypeScript logo" width={100} />
                            <p>TypeScript</p>
                        </div>
                        <div className='skills-div'>
                            <img src={reactLogo} alt="React logo" width={100} />
                            <p>React</p>
                        </div>
                        <div className='skills-div'>
                            <img src={gitLogo} alt="Git logo" width={100} />
                            <p>Git</p>
                        </div>
                        <div className='skills-div'>
                            <img src={githubLogo} alt="GitHub logo" width={100} />
                            <p>GitHub</p>
                        </div>
                       
                    </div>
                </div>
        </>
       
    )
}