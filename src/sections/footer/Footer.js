import React from 'react'
import './footer.css'
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="box">
                <a href="/#" id="logo">
                    {/* <img src="images/logoW.png" alt=""> */}
                    <h1>mangiare</h1>
                </a>
                <p>
                    Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus.
                </p>
                <p>
                    Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat.
                </p>
                <ul className="social">
                    <li><a target="_blank" href="/#"><FaFacebook/></a></li>
                    <li><a target="_blank" href="/#"><FaTwitter/></a></li>
                    <li><a target="_blank" href="/#"><FaLinkedin/></a></li>
                    <li><a target="_blank" href="/#"><FaYoutube/></a></li>
                </ul>
            </div>
            <div className="box">
                <h2>opening hours</h2>
                <div className="days">
                    <div className="daysG">
                        <div className="day">
                            <h4>sunday</h4>
                            <span>10:00am - 11:00pm</span>
                        </div>
                        <div className="day">
                            <h4>Monday</h4>
                            <span>10:00am - 11:00pm</span>
                        </div>
                        <div className="day">
                            <h4>tuesday</h4>
                            <span>10:00am - 11:00pm</span>
                        </div>
                    </div>
                    <div className="daysG">
                        <div className="day">
                            <h4>wednesday</h4>
                            <span>10:00am - 11:00pm</span>
                        </div>
                        <div className="day">
                            <h4>thursday</h4>
                            <span>10:00am - 11:00pm</span>
                        </div>
                        <div className="day">
                            <h4>friday</h4>
                            <span>10:00am - 11:00pm</span>
                        </div>
                    </div>
                </div>
                <p>**Saturday is weekly closed</p>
            </div>
        </div>
        <div className="copy">
            Copyright 2022. All Rights Reserved. Developed by <a target='_blank' rel="noopener noreferrer" href="https://seifbadreddine.netlify.app/">seif badreddine</a>
        </div>
    </footer>
  )
}

export default Footer