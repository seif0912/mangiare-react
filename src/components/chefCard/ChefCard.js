import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import './chefCard.css'

const ChefCard = (props) => {
  return (
    <div className="chef-box">
        <img src={props.imgSrc} alt=""/>
        <div className="details">
            <h3>{props.name}</h3>
            <p>{props.title}</p>
        </div>
        <ul className="social">
            <li><a target="_blank" href="/#"><FaFacebook/></a></li>
            <li><a target="_blank" href="/#"><FaTwitter/></a></li>
            <li><a target="_blank" href="/#"><FaLinkedin/></a></li>
            <li><a target="_blank" href="/#"><FaYoutube/></a></li>
        </ul>
    </div>
  )
}

export default ChefCard