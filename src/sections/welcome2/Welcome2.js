import React from 'react'
import { Container, SectionHeader } from '../../components/Index'
import './welcome2.css'
import Logo from "../../assets/chef-hat-logo.png"
import Img1 from "../../assets/food-4.jpg"
import Img2 from "../../assets/food-8.jpg"
import Img3 from "../../assets/food-11.jpg"
import Img4 from "../../assets/img-1.jpg"
import Img5 from "../../assets/food-1.jpg"
import Img6 from "../../assets/food-9.jpg"

const Welcome2 = () => {
    return (
        <div className="welcome-services-2">
        <SectionHeader img={Logo} title="welcome" disc="mangiare restaurant" flip={false}/>
        <Container>
            <div className="plates">
                <div className="boxes">
                    <div className="box">
                        <img src={Img1} alt=""/>
                        <div className="inner-box">
                            <h3>breakfast</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="box">
                        <img src={Img2} alt=""/>
                        <div className="inner-box">
                            <h3>italian food</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
                <div className="boxes">
                    <div className="box">
                        <img src={Img3} alt=""/>
                        <div className="inner-box">
                            <h3>lunch</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="box">
                        <img src={Img4} alt=""/>
                        <div className="inner-box">
                            <h3>chines food</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
                <div className="boxes">
                    <div className="box">
                        <img src={Img5} alt=""/>
                        <div className="inner-box">
                            <h3>dinner</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="box">
                        <img src={Img6} alt=""/>
                        <div className="inner-box">
                            <h3>fast food</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
    )
}

export default Welcome2