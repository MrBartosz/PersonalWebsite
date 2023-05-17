import { useState, useEffect } from 'react';
import { Router, Link } from "react-router-dom";
import './css/Navigation.css';
import bartekLogo from './resources/BartekLogo.png';
import githubIcon from './resources/GithubIcon.png';
import cvIcon from './resources/CvIcon.png';
export const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [phone, setPhone] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
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
                    <div className='nav_logosPhone'>
                        <a href="https://github.com/MrBartosz" target='_blank'> <img src={githubIcon} width="52" height="52" alt="GitHub" /></a>
                        <a href="https://drive.google.com/file/d/1dfhZj1-vI00VgeK8V7HTf7QGxhbTd2Yx/view" target='_blank'><img src={cvIcon} width="48" height="45" alt="CV" /></a>
                    </div>
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
                        <div className='nav_logosPhone menu_on'>
                            <a href="https://github.com/MrBartosz" target='_blank'> <img src={githubIcon} width="52" height="52" alt="GitHub" /></a>
                            <a href="https://drive.google.com/file/d/1dfhZj1-vI00VgeK8V7HTf7QGxhbTd2Yx/view" target='_blank'><img src={cvIcon} width="48" height="45" alt="CV" /></a>
                        </div>
                        <p style={{position:'fixed', bottom:'10px', width:'100%', textAlign:'center', color:'white'}}>Copyright © </p>
                    </div>
                    }
                </>
                }
        </>
    );
};