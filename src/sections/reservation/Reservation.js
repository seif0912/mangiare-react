import React from 'react'
import './reservation.css'
import conImg from '../../assets/contact-form.png'

const Reservation = () => {
  return (
    <div className="reservation">
        <div className="con">
            <div className="head">
                <img src={conImg} alt=""/>
                <h1 className="title">reservation</h1>
                <h2>book your table</h2>
            </div>
            <form>
                <div className="row">
                    <input type="text" name="" placeholder="YOUR NAME"/>
                    <input type="email" name="" placeholder="YOUR EMAIL"/>
                </div>
                <div className="row">
                    <input type="text" name="" placeholder="RESERVATION"/>
                    <input type="text" name="" placeholder="YOUR NAME"/>
                </div>
                <div className="row">
                    <select name="reservation_time" className="form-control" id="reservation-time" required="required">
                        <option defaultValue >Time</option>
                        <option value="1">9:00 am</option>
                        <option value="2">10:00 am</option>
                        <option value="2">11:00 am</option>
                        <option value="2">12:00 pm</option>
                        <option value="2">01:00 pm</option>
                        <option value="2">02:00 pm</option>
                        <option value="2">03:00 pm</option>
                        <option value="2">04:00 pm</option>
                        <option value="2">05:00 pm</option>
                        <option value="2">06:00 pm</option>
                        <option value="2">07:00 pm</option>
                        <option value="2">08:00 pm</option>
                        <option value="2">09:00 pm</option>
                        <option value="2">10:00 pm</option>
                    </select>
                    <select name="people_number" className="form-control" id="people_number" required="required">
                        <option defaultValue >Member</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10+">10+</option>
                    </select>
                </div>
                <input type="submit" value="reserve"/>
            </form>
        </div>
    </div>
  )
}

export default Reservation