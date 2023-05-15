import { useState, useEffect } from 'react';
import { Router, Link } from "react-router-dom";
import './css/Navigation.css';


export const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [phone, setPhone] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

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
                            BARTEK
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
                        <a href="https://github.com/MrBartosz" target='_blank'> <img src='https://i.ibb.co/yVpRtpw/icons8-github-64.png' width="52" height="52" alt="GitHub" /></a>
                        <a href="https://drive.google.com/file/d/1g0MiZVOCwV2La_YDldeCpB7rAWhcd_jg/view" target='_blank'><img src="https://i.ibb.co/cyZnWTm/icons8-cv-64-4.png" width="48" height="45" alt="CV" /></a>
                    </div>
                </>
                }
                {phone &&
                <>
                    <div className="nav_container">
                        <Link className='nav_bartek' to="/" style={{ fontFamily: 'tesla', fontSize: 30, color: 'white', textDecoration: 'none' }}>
                            BARTEK
                        </Link>
                        <div className={`nav_menuButton ${isMenuOpen ? 'change' : ''}`} onClick={toggleMenu}>
                                <div className="bar1"></div>
                                <div className="bar2"></div>
                                <div className="bar3"></div>
                        </div>
                    </div>

                    {isMenuOpen && 
                    <div className={`nav_menuDiv ${isMenuOpen ? 'slideIn' : ''}`}>
                        <div className='nav_menuWrapper'>
                                <ul>
                                    <li>
                                        <Link to="/About">About</Link>
                                    </li>
                                    <li>
                                        <Link to="/Contact">Contact</Link>
                                    </li>
                                </ul>
                        </div>
                        <div className='nav_logosPhone menu_on'>
                            <a href="https://github.com/MrBartosz" target='_blank'> <img src='https://i.ibb.co/yVpRtpw/icons8-github-64.png' width="52" height="52" alt="GitHub" /></a>
                            <a href="https://drive.google.com/file/d/1g0MiZVOCwV2La_YDldeCpB7rAWhcd_jg/view" target='_blank'><img src="https://i.ibb.co/cyZnWTm/icons8-cv-64-4.png" width="48" height="45" alt="CV" /></a>
                        </div>
                        <p style={{position:'fixed', bottom:'10px', width:'100%', textAlign:'center'}}>Copyright © </p>
                    </div>
                    }
                </>
                }
        </>
    );
};