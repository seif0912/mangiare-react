import React from 'react'
import './about3.css'
import {Container, SectionHeader, Button} from '../../components/Index'
import chefLogo from '../../assets/chef-logo.png'
import food1 from '../../assets/food-4.jpg'
import food2 from '../../assets/food-8.jpg'
import food3 from '../../assets/food-11.jpg'
import food4 from '../../assets/food-25.jpg'

const About3 = () => {
  return (
    <div className="about-us-3 gr">
        <Container>
            <div className="info">
                <SectionHeader img={chefLogo} title="about us" disc="mangiare restaurant" flip={true}/>
                <p>
                    Proin eget tortor risus. Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                </p>
                <p>
                    Proin eget tortor risus. Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Pellentesque in ipsum id orci porta dapibus.
                </p>
                <Button to='#' class="secondary">read more</Button>
            </div>
            <div className="plates">
                <div className="boxes">
                    <div className="box">
                        <img src={food1} alt=""/>
                        <div className="inner-box">
                            <h3>breakfast</h3>
                        </div>
                    </div>
                    <div className="box">
                        <img src={food2} alt=""/>
                        <div className="inner-box">
                            <h3>dinner</h3> 
                        </div>
                    </div>
                </div>
                <div className="boxes">
                    <div className="box">
                        <img src={food3} alt=""/>
                        <div className="inner-box">
                            <h3>lunch</h3>
                        </div>
                    </div>
                    <div className="box">
                        <img src={food4} alt=""/>
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

export default About3