import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import { CardSwiper } from "./Swiper";
import './css/Main.css';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export const Main = () => {

    return (
        <>
        <img className="main_bg" src="https://i.ibb.co/Fqs0Yhn/bg.jpg" alt="bg"/>
        <div style={{display:'flex', flexWrap:'wrap'}}>
			<div className='main_intro' >
				<p style={{ display: 'inline', marginRight: '10px', fontSize:20 }}>Hello, i'm</p>
				<h1 style={{ display: 'inline', color: 'white', fontWeight: 'inherit', fontSize: 36 }}>Bartosz</h1>
				<h2 style={{fontSize:24, color:'gray'}}>
					<Typewriter
				options={{
					deleteSpeed: 60,
					loop: true,
					delay: 60,
				}}
					onInit={(typewriter) => {
						typewriter
							.typeString("Welcome to my website!")
							.pauseFor(400)
							.deleteAll()
							.typeString("I'm glad you're here!")
							.pauseFor(400)
							.start();
					}}
				/>
				</h2>
				<p style={{fontSize:16, color:'gray'}}>Learn more about me and my background here.</p>
				<Link to="/About">
					<button className="main_button">About me</button>
				</Link>
			</div>
			<div style={{ margin: '50px auto 0 auto', padding:'0 2.5rem'}}>
				<div>
					<div className="quote">
						<img src="https://i.ibb.co/ysdMrMG/icons8-quote-left-50.png" alt="quote1" width={20}/> I want to put a ding in the universe. <img src="https://i.ibb.co/SQcX6tP/icons8-quote-50-2.png" alt="quote2" width={20} />  <h4 style={{marginTop:'10px'}}>-Steve Jobs</h4> 
					</div>
						<img style={{width:'200px', margin:'-30px 0 0 25px'}} src="https://i.ibb.co/FnpKbCx/Figure-of-the-smiling-standing-Steve-Jobs-with-the-glasses-at-white-background-clipart.png" alt="avatar" />
				</div>
			</div>
		</div>
		<p className="selected-project" style={{textAlign:'center', fontSize:'20px', color: "white", fontWeight:'bold'}}>Selected projects</p>
			<div style={{paddingTop:'2rem'}}>
				<Swiper
					freeMode={true}
					grabCursor={true}
					pagination={{clickable: true}}
					modules={[FreeMode, Pagination]}
					className="mySwiper"

					breakpoints={{
						0: {
							slidesPerView: 1,
							spaceBetween: 5,
						},
						650: {
							slidesPerView: 2,
							spaceBetween: 15,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 15,
						},
						1050: {
							slidesPerView: 2,
							spaceBetween: 30,
						},
						1440: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
					}}>
					<SwiperSlide>
						<CardSwiper
							name={"Board Game"}
							image={'https://i.ibb.co/Cvrf0Cs/smartmockups-lhmm4089.jpg'}
							alt={"BoardGame"}
							hrefDemo={"https://mrbartosz.github.io/ReactTS-BoardGame/"}
							hrefCode={"https://github.com/MrBartosz/ReactTS-BoardGame"}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<CardSwiper
							name={"Portfolio Website"}
							image={'https://i.ibb.co/YQ9SgSD/smartmockups-lhmjq1am.jpg'}
							alt={"Portfolio Website"}
							hrefDemo={"https://mrbartosz.github.io/PersonalWebsite/"}
							hrefCode={"https://github.com/MrBartosz/PersonalWebsite"}
					/>
					</SwiperSlide>
					<SwiperSlide>
						<CardSwiper
						name={"ReactTS App"}
						image={'https://i.ibb.co/XCJW1yz/smartmockups-lhmjc1w9.jpg'}
						alt={"ReactTypeScript"}
						hrefDemo="https://mrbartosz.github.io/typescript-react/"
						hrefCode={"https://github.com/MrBartosz/typescript-react"}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<CardSwiper
						name={"Ceaser Cipher"}
						image={'https://i.ibb.co/6vWnV0c/smartmockups-lhmjmf23.jpg'}
						alt={"Ceaser Cipher"}
						hrefDemo={"https://mrbartosz.github.io/Caesar-Cipher/"}
						hrefCode={"https://github.com/MrBartosz/Caesar-Cipher"}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<CardSwiper
							name={"Card Verification"}
							image={'https://i.ibb.co/0MWgVXm/smartmockups-lhmjkdjw.jpg'}
							alt={"Card Verification"}
							hrefDemo={"https://mrbartosz.github.io/Card-Verification/"}
							hrefCode={"https://github.com/MrBartosz/Card-Verification"}
						/>
					</SwiperSlide>
				</Swiper>
			</div>
        </>
    )
}