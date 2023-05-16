import './css/About.css';
import React, { useState } from 'react';
import ownerAvatar from './resources/avatar.jpg';
import skillsIcon from './resources/SkillsIcon.png';
export const About = () => {
    const [showStory, setShowStory] = useState<boolean>(false)

    const toggleStory = () => {
        setShowStory(!showStory)
    }

    return (
        <>
            <div>

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
                    <div>

                    </div>
                </div>

            </div>
        </>
       
    )
}