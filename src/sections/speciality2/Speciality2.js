import React from 'react'
import './speciality2.css'
import { Container } from '../../components/Index'
import Logo1 from '../../assets/deco-logo.png'
import Logo2 from '../../assets/chef-logo.png'
import Logo3 from '../../assets/bowl-logo.png'
import Logo4 from '../../assets/delivery-logo.png'
import Img1 from '../../assets/food-4.jpg'
import Img2 from '../../assets/food-8.jpg'
import Img3 from '../../assets/food-11.jpg'
import Img4 from '../../assets/food-25.jpg'

const Speciality2 = () => {
    return (
        <div className="speciality-services-style-2">
        <Container>
            <div className="info">
                <div className="boxes">
                    <div className="box">
                        <img src={Logo1} alt=""/>
                        <h3>well decorated</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit consectetur adipiscing elit.
                        </p>
                    </div>
                    <div className="box">
                        <img src={Logo2} alt=""/>
                        <h3>expert chef</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit consectetur adipiscing elit.
                        </p>
                    </div>
                </div>
                <div className="boxes">
                    <div className="box">
                    <img src={Logo3} alt=""/>
                    <h3>delicious food</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit consectetur adipiscing elit.
                    </p>
                </div>
                <div className="box">
                    <img src={Logo4} alt=""/>
                    <h3>quick serve</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit consectetur adipiscing elit.
                    </p>
                </div>
                </div>
            </div>
            <div className="plates">
                <div className="boxes">
                    <div className="box">
                        <img src={Img1} alt=""/>
                        <div className="inner-box">
                            <h3>breakfast</h3>
                        </div>
                    </div>
                    <div className="box">
                        <img src={Img2} alt=""/>
                        <div className="inner-box">
                            <h3>dinner</h3> 
                        </div>
                    </div>
                </div>
                <div className="boxes">
                    <div className="box">
                        <img src={Img3} alt=""/>
                        <div className="inner-box">
                            <h3>lunch</h3>
                        </div>
                    </div>
                    <div className="box">
                        <img src={Img4} alt=""/>
                        <div className="inner-box">
                            <h3>desert</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
    )
}

export default Speciality2