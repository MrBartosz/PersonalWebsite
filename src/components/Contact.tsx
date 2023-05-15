import './css/Contact.css';
import React, { useEffect, useRef, useState } from 'react';
import emailjs from "@emailjs/browser";

export const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [showMessage, setShowMessage] = useState<boolean>(false)
    const [showMessageContent, setShowMessageContent] = useState<string>('')

    const form = useRef<any>(null);

    
    const showEr = () => {
        alert('Wypełnij wszystkie pola!')
    }

    useEffect(() => {
        setTimeout(() => {
            if (showMessage) {
                setShowMessage(false)
                setShowMessageContent('')
            }
        }, 3000)
    }, [showMessage])
    
    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        emailjs
        .sendForm(
            "service_fpb35ll",
            "template_lqzvfkv",
            form.current,
            "7_0LBsHxva3w1MCHU"
            )
            .then(
              () => {
                  setShowMessageContent('Wiadomośc wysłana')
                  setShowMessage(true)
              },
              (error) => {
                  setShowMessageContent(`Błąd wysyłania - ${error.text}`)
                  setShowMessage(true)
                }
                );
            };


    return (
        <>
            <div className="contact-header">
                <p>get in touch</p>
                <p style={{fontSize:'5rem', fontWeight:'bold'}}>CONTACT</p>
            </div>
            <div className='contact_container'>
                <div style={{width:'100%', maxWidth:'500px', marginBottom:'4rem', paddingRight:'1rem'}}>
                    <div className="contact-info">
                        <div className="contact-item">
                            <img src="https://i.ibb.co/fNZMNM5/icons8-phone-64.png" alt="phone icon" width="50px" className="contact-icon" />
                            <a href="tel://519635097" className='contact_fadeIn'>+48 519 635 097</a>
                        </div>
                    </div>
                    <div className="contact-info">
                        <div className="contact-item">
                            <img src="https://i.ibb.co/khndJ90/icons8-email-64-1.png" alt="email icon" width="50px" className="contact-icon" />
                            <a href="mailto:maksimowski97@gmail.com" className='contact_fadeIn'>maksimowski97@gmail.com</a>
                        </div>
                    </div>
                    <div className="contact-info">
                        <div className="contact-item">
                            <img src="https://i.ibb.co/V9Gpkft/icons8-place-64.png" alt="place icon" width="50px" className="contact-icon" />
                            <a href='https://www.google.com/maps/place/Bia%C5%82ystok/' target='_blank' className='contact_fadeIn'>Białystok, Poland</a>
                        </div>
                    </div>
                </div>
                <div>
                    <form ref={form} onSubmit={name && email && text ? sendEmail : showEr} className='contact_formContainer'>
                        <div className='contact_form'>
                            <label htmlFor="name">
                                <span className='contact_fadeIn'>Your Name</span>
                                <input 
                                type="text"
                                name="user_name"
                                onChange={(e) => setName(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className='contact_form'>
                            <label htmlFor="email">
                                <span className='contact_fadeIn'>Your Email</span>
                                <input 
                                type="email"
                                name="user_email"
                                onChange={(e) => setEmail(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className='contact_form'>
                            <label htmlFor="message">
                                <span className='contact_fadeIn'>Your Message</span> 
                                <textarea 
                                name="message"
                                onChange={(e) => setText(e.target.value)}
                                />
                            </label>
                            <button type="submit" value="Send">Send</button>
                            {showMessage &&
                                <span style={{marginLeft:'1rem'}}>{showMessageContent}</span>
                            }
                           
                        </div>
                    </form>
                </div>
            </div>
           
        </>
    );
};