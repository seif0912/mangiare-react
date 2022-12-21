import React from 'react'
import './specialDishes.css'
import {Container, SectionHeader} from '../../components/Index'

import dishe1 from "../../assets/special-dishes-1.jpg"
import dishe2 from "../../assets/special-dishes-2.jpg"
import dishe3 from "../../assets/special-dishes-3.jpg"
import dishesLogo from "../../assets/dishes-logo.png"



const SpecialDishes = () => {
  return (
    <div className="special-dishes">
        <Container>
            <div className="images">
                <div className="box">
                    <img src={dishe1} alt=""/>
                </div>
                <div className="box">
                    <img src={dishe2} alt=""/>
                    <img src={dishe3} alt=""/>
                </div>
            </div>
            <div className="info">
                <SectionHeader img={dishesLogo} title="special dishes" disc="hot steak with sauce" flip={false}/>
                <p>
                    Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Cras ultricies ligula sed magna dictum porta.
                </p>
                <span>$20</span>
            </div>
        </Container>
    </div>
  )
}

export default SpecialDishes