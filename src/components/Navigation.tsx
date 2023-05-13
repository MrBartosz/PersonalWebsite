import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
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
                        <a className='nav_bartek' href="/Main" style={{fontFamily:'tesla', fontSize:30, color:'white', textDecoration:'none'}}>
                            BARTEK
                        </a>
                        <div className="nav_listWrapper">
                            <ul>
                                <li><a href="/About">About</a></li>
                                <li><a href="/Contact">Contact</a></li>
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
                        <a className='nav_bartek' href="/Main" style={{fontFamily:'tesla', fontSize:30, color:'white', textDecoration:'none'}}>
                            BARTEK
                        </a>
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
                                    <li><a href="/About">About</a></li>
                                    <li><a href="/Contact">Contact</a></li>
                                </ul>
                        </div>
                        <div className='nav_logosPhone'>
                            <a href="https://github.com/MrBartosz" target='_blank'> <img src='https://i.ibb.co/yVpRtpw/icons8-github-64.png' width="52" height="52" alt="GitHub" /></a>
                            <a href="https://drive.google.com/file/d/1g0MiZVOCwV2La_YDldeCpB7rAWhcd_jg/view" target='_blank'><img src="https://i.ibb.co/cyZnWTm/icons8-cv-64-4.png" width="48" height="45" alt="CV" /></a>
                        </div>
                        <p className='nav_copyright'>Copyright © </p>
                    </div>
                    }
                </>
                }
        </>
    );
};