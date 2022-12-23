import React from 'react'
import './reservation.css'
import conImg from '../../assets/contact-form.png'
import {ReservationForm} from '../../components/Index'

const Reservation = () => {
  return (
    <div className="reservation">
        <div className="con">
            <div className="head">
                <img src={conImg} alt=""/>
                <h1 className="title">reservation</h1>
                <h2>book your table</h2>
            </div>
            <ReservationForm/>
        </div>
    </div>
  )
}

export default Reservation