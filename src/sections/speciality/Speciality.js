import React from 'react'
import './speciality.css'
import {Container, SectionHeader} from '../../components/Index'
import chefHatLogo from '../../assets/chef-hat-logo.png'
import img1 from '../../assets/deco-logo.png'
import img2 from '../../assets/chef-logo.png'
import img3 from '../../assets/bowl-logo.png'
import img4 from '../../assets/delivery-logo.png'

const Speciality = () => {
  return (
    <div className="speciality">
        <Container>
            <SectionHeader img={chefHatLogo} title="spciality" disc="our feature" flip={false}/>
            <div className="info">
                <div className="box">
                    <img src={img1} alt=""/>
                    <h3>well decorated</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit consectetur adipiscing elit.
                    </p>
                </div>
                <div className="box">
                    <img src={img2} alt=""/>
                    <h3>expert chef</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit consectetur adipiscing elit.
                    </p>
                </div>
                <div className="box">
                    <img src={img3} alt=""/>
                    <h3>delicious food</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit consectetur adipiscing elit.
                    </p>
                </div>
                <div className="box">
                    <img src={img4} alt=""/>
                    <h3>quick serve</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit consectetur adipiscing elit.
                    </p>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Speciality