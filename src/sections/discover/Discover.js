import React from 'react'
import {Container, SectionHeader, Ticket} from '../../components/Index'

import bowlLogo from "../../assets/bowl-logo.png"
import './discover.css'
import {Tickets} from '../../data/Tickets'

const Discover = () => {
    const tickets = Tickets.map(ticket=>{
        return <Ticket key={ticket.id} imgSrc={ticket.imgSrc} title={ticket.title} disc={ticket.disc} price={ticket.price}/>
    })
  return (
    <div className="discover">
        <Container>
            <SectionHeader img={bowlLogo} title="discover" disc="everyday dishes" flip={false}/>
            <div className="dishes">
                {tickets}
            </div>
        </Container>
    </div>
  )
}

export default Discover