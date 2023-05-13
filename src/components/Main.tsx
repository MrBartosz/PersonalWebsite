import Typewriter from "typewriter-effect";
import './css/Main.css';
import { Link } from "react-router-dom";

export const Main = () => {
		
    return (
        <>
        <img className="main_bg" src="https://i.ibb.co/Fqs0Yhn/bg.jpg" alt="bg"/>
        <div style={{display:"flex", flexWrap: 'wrap'}}>
			<div className='main_intro' >
				<p style={{ display: 'inline', marginRight: '10px', fontSize:20 }}>Hello, i'm</p>
				<h1 style={{ display: 'inline', color: 'white', fontWeight: 'inherit', fontSize: 36 }}>Bartosz</h1>
				<h2 style={{fontSize:24, color:'gray'}}>
					<Typewriter
				options={{
					deleteSpeed: 100,
					loop: true,
					delay: 80,
				}}
					onInit={(typewriter) => {
						typewriter
							.typeString("Welcome to my website!")
							.pauseFor(300)
							.deleteAll()
							.typeString("I'm glad you're here!")
							.pauseFor(300)
							.start();
					}}
				/>
				</h2>
				<p style={{fontSize:16, color:'gray'}}>Learn more about me and my background here.</p>
				<Link to="/About">
					<button className="main_button">About me</button>
				</Link>
			</div>
			<div style={{width:200, marginTop: "auto" ,marginLeft: 'auto', marginRight: 'auto' }}>
					
			</div>
		</div>
        </>
    )
}