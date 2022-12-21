import React from 'react'
import './about.css'
import chefLogo from '../../assets/chef-logo.png'
import basket from '../../assets/home-about-us.jpg'
import { Container , Button, SectionHeader} from '../../components/Index'

const About = () => {
  return (
    <div className="about">
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
            <div className="image">
                <img src={basket} alt=""/>
            </div>
        </Container>
    </div>
  )
}

export default About