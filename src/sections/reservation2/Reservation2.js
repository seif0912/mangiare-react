import React from 'react'
import './reservation2.css'
import {ReservationForm, SectionHeader, Container} from '../../components/Index'
import drink from "../../assets/drinks.jpg"
import decoLogo from "../../assets/deco-logo.png"


const Reservation2 = () => {
    return (
        <div className="reservation-about-3">
            <Container>
                <div className="form">
                    <SectionHeader img={decoLogo} title="reservation" disc="book your table" flip={false}/>
                    <ReservationForm/>
                </div>
                <div className="image">
                    <img src={drink} alt=""/>
                </div>
            </Container>
        </div>
    )
}

export default Reservation2