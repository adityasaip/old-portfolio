import './titlecard.css'
import ASP from '../assets/ASP_final.svg'
import ASP_ from '../assets/ASP.svg'
// import {bootstrap} from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import BG from '../assets/BG.jpg'
import { FaLinkedin } from 'react-icons/fa6'
import { BiLogoGmail } from 'react-icons/bi'


function TitleCard() {
    // const carousel = new bootstrap.Carousel('#myCarousel')
//     const myCarouselElement = document.querySelector('#carouselExampleIndicators')
//     const carousel = new bootstrap.Carousel(myCarouselElement, {
//     interval: 5000,
//     touch: false
// })
    return (
        <div className='title-card'>
            {/* <p className='name-card'> I AM </p>
            <p className='bio'> I AM A SOFTWARE DEVELOPER & I COULD BE A cReAtiVe & DEDICATED INDIVIDUAL FOR YOU</p>
            <p className='name-card'> ADITYA </p> */}

            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <div className='slide--1'>
                            <p className='name-card'> I AM </p>
                            <p className='bio'> I AM A SOFTWARE ENGINEER PASSIONATE ABOUT FRONTEND WEB DEVELOPMENT.</p>
                            <p className='name-card'> ADITYA </p>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <div className='slide--2'>
                            <img src={BG} alt="..." />
                            <div className='carousel--matter'>
                                <p>I am Aditya Sai P, and I enjoy working at frontend and backend. Currently I am working at Infosys as a Python developer, and VBA developer to automate manual tasks.</p>
                                <div className='contact--icons'>
                                    <p>Contact me at </p>
                                    <p><FaLinkedin color='blue' className='icon--sizes'/> </p>
                                    <p><BiLogoGmail className='icon--sizes'/></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}


export default TitleCard