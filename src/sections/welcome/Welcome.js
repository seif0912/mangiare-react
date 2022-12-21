import React from 'react'
import chef from "../../assets/chef-logo.png"
import './welcome.css'
const Welcome = () => {
  return (
    <div className="welcome">
        <div className="head">
            <img src={chef} alt=""/>
            <h1 className="title">welcome</h1>
            <h2>mangiare restaurant</h2>
        </div>
        <p>
            Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec rutrum congue leo eget malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
        </p>
        <h2>SINCE FEBRUARY 17, 2016</h2>
        <a href="#">more about us</a>
    </div>
  )
}

export default Welcome