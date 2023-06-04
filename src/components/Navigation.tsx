import { useState, useEffect } from 'react';
import { Router, Link } from "react-router-dom";
import './css/Navigation.css';
import bartekLogo from './resources/BartekLogo.png';
import githubIcon from './resources/GithubIcon.png';
import linkedinIcon from './resources/LinkedinIcon.png';
import linksIcon from './resources/LinksIcon.png';
import backIcon from './resources/backIcon.png';
import cvIcon from './resources/CvIcon.png';
export const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [phone, setPhone] = useState(false);
    const [linksOn, setLinksOn] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    const toggleLinks = () => {
        setLinksOn(!linksOn);
    };

    const closeMenu = () => {
        setIsMenuOpen(false)
        
    }

    useEffect(() => {
        const checkWindowSize = () => {
            setPhone(window.innerWidth <= 768); 
        };

        window.addEventListener('resize', checkWindowSize);

        checkWindowSize();

        return () => {
            window.removeEventListener('resize', checkWindowSize);
        };
    }, []);

    return (
        <>
                {!phone && 
                <>
                    <div className="nav_container">
                        <Link className='nav_bartek' to="/" style={{ fontFamily: 'tesla', fontSize: 30, color: 'white', textDecoration: 'none' }}>
                            <img src={bartekLogo} alt="BARTEK" height={40} />
                        </Link>
                        <div className="nav_listWrapper">
                            <ul>
                                <li>
                                    <Link to="/About">About</Link>
                                </li>
                                <li>
                                    <Link to="/Contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {linksOn &&
                        <div className='nav_logosPhone'>
                            <a href="https://github.com/MrBartosz" target='_blank'> <img src={githubIcon} width="46" height="46" alt="GitHub" /><p style={{fontSize:'0.8rem', fontWeight:'bold', color:'white', marginBottom:'1rem'}}>GitHub</p></a>
                            <a href="https://www.linkedin.com/in/bartosz-maksimowski/" target='_blank'> <img src={linkedinIcon} width="46" height="46" alt="GitHub" /><p style={{fontSize:'0.8rem', fontWeight:'bold', color:'white', marginBottom:'1rem'}}>Linkedin</p></a>
                            <a href="https://drive.google.com/file/d/1zJWv8g5ZhpFjbFAnAZ6s3bx4d_kYKd14/view" target='_blank'><img src={cvIcon} width="46" height="46" alt="CV" /><p style={{fontSize:'1rem', fontWeight:'bold', color:'white'}}>CV</p></a>
                            <div onClick={toggleLinks} style={{padding:'1rem'}}>
                                <img src={backIcon} alt="go back" width='25'/>
                            </div>
                        </div>
                    }
                    {!linksOn &&
                        <div className='nav_logosPhone' onClick={toggleLinks}>
                            <a>
                                <img src={linksIcon} width="46" height="46" alt="LinksIcon" />
                                <p style={{fontSize:'1rem', fontWeight:'bold', color:'white'}}>Links</p>
                            </a>
                        </div>
                    }
                </>
                }
                {phone &&
                <>
                    <div className="nav_container">
                        <Link className='nav_bartek' to="/" style={{ fontFamily: 'tesla', fontSize: 30, color: 'white', textDecoration: 'none' }}>
                        <img src={bartekLogo} alt="BARTEK logo" height={40} />
                        </Link>
                        <div className={`nav_menuButton ${isMenuOpen ? 'change' : ''}`} onClick={toggleMenu}>
                                <div className="bar1"></div>
                                <div className="bar2"></div>
                                <div className="bar3"></div>
                        </div>
                    </div>

                    {isMenuOpen && 
                        <div className={`nav_menuDiv  ${isMenuOpen ? 'slideIn' : 'slideOut'}`}>
                        <div className='nav_menuWrapper'>
                                <ul>
                                    <li>
                                        <Link to='/*' onClick={closeMenu}>Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/About" onClick={closeMenu}>About</Link>
                                    </li>
                                    <li>
                                        <Link to="/Contact" onClick={closeMenu}>Contact</Link>
                                    </li>
                                </ul>
                        </div>
                        {linksOn &&
                         <div className='nav_logosPhone menu_on' onClick={toggleLinks}>
                            <a href="https://github.com/MrBartosz" target='_blank'> <img src={githubIcon} width="32" height="32" alt="GitHub" /><p style={{fontSize:'0.6rem', fontWeight:'bold', color:'white', marginBottom:'1rem'}}>GitHub</p></a>
                            <a href="https://www.linkedin.com/in/bartosz-maksimowski/" target='_blank'> <img src={linkedinIcon} width="32" height="32" alt="GitHub" /><p style={{fontSize:'0.6rem', fontWeight:'bold', color:'white', marginBottom:'1rem'}}>Linkedin</p></a>
                            <a href="https://drive.google.com/file/d/1zJWv8g5ZhpFjbFAnAZ6s3bx4d_kYKd14/view" target='_blank'><img src={cvIcon} width="32" height="32" alt="CV" /><p style={{fontSize:'0.8rem', fontWeight:'bold', color:'white'}}>CV</p></a>
                        </div>
                    }
                        {!linksOn &&
                            <div className='nav_logosPhone menu_on'>
                                <a onClick={toggleLinks}>
                                    <img src={linksIcon} width="46" height="46" alt="LinksIcon" />
                                    <p style={{fontSize:'1rem', fontWeight:'bold', color:'white'}}>Links</p>
                                </a>
                            </div>
                        }
                        <p style={{position:'fixed', bottom:'10px', width:'100%', textAlign:'center', color:'white'}}>Copyright © </p>
                    </div>
                    }
                </>
                }
        </>
    );
};