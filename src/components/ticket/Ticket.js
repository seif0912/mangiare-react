import React from 'react'
import './ticket.css'

const Ticket = (props) => {
  return (
    <div className="ticket" >
        <img src={props.imgSrc} alt=""/>
        <div className="info">
            <h3>{props.title}</h3>
            <p>{props.disc}</p>
        </div>
        <span>{props.price}</span>
    </div>
  )
}

export default Ticket