import React from 'react'
import './event.css'
import eventImg from '../../assets/event.jpg'
import {Button} from '../../components/Index'
const Event = () => {
  return (
    <div className="event">
        <div className="event-box">
            <div className="image">
                <img src={eventImg} alt=""/>
            </div>
            <div className="info">
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