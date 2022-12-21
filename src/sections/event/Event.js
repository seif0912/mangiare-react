import React from 'react'
import './event.css'
import eventImg from '../../assets/event.jpg'
import {Button} from '../../components/Index'
const Event = () => {
  return (
    <div class="event">
        <div class="event-box">
            <div class="image">
                <img src={eventImg} alt=""/>
            </div>
            <div class="info">
                <h1>special evening with james</h1>
                <p>
                    Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                </p>
                <Button to='/#' class="primary sm">reserve your table</Button>
            </div>
        </div>
    </div>
  )
}

export default Event