import React from 'react'
import "./about2.css"
import { Container , Button, SectionHeader} from '../../components/Index'
import chefImg from "../../assets/about-chef.jpg"
import chefLogo from "../../assets/chef-logo.png"

const About2 = () => {
  return (
    <div className="about-us-2">
        <Container>
            <div className="info">
                <SectionHeader img={chefLogo} title="about us" disc="mangiare restaurant" flip={true}/>
                <p>
                    Proin eget tortor risus. Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                </p>
                <div className="lists">
                    <ul>
                        <li>Proin eget tortor risus</li>
                        <li>Proin eget tortor</li>
                        <li>Proin eget tortor risus</li>
                    </ul>
                    <ul>
                        <li>Proin eget tortor risus</li>
                        <li>Proin eget tortor</li>
                        <li>Proin eget tortor risus</li>
                    </ul>
                </div>
                <Button to='#' class="secondary">read more</Button>
            </div>
            <div className="image">
                <img src={chefImg} alt=""/>
            </div>
        </Container>
    </div>
  )
}

export default About2