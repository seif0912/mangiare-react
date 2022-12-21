import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import "./header.css"
import Container from '../../components/container/Container'
import Burger from '../../components/burger/Burger'
import logo from '../../assets/logoW.png'

const Header = () => {
    const [burger, setBurger] = useState('')
    const [menu, setMenu] = useState('')
  return (
    <header>
        <Container>
            <Link to="/" id="logo">
                <img src={logo} alt="j"/>
                <h1>mangiare</h1>
            </Link>
            <ul className={`menu ${menu}`}>
                <li>
                    <Link to="/" className="main-link active">home</Link>
                    <ul className="sub-menu">
                        <li><a href="#">home revolution</a></li>
                        <li><a href="#">homepage parallax</a></li>
                        <li><a href="#">homepage-2</a></li>
                        <li><a href="#">homepage-3</a></li>
                        <li><a href="#">home coffee shop</a></li>
                        <li><a href="#">home pastry shop</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#" className="main-link">pages</a>
                    <ul className="sub-menu">
                        <li><Link to="/about-us-1">about us 1</Link></li>
                        <li><Link to="/about-us-2">about us 2</Link></li>
                        <li><Link to="/about-us-3">about us 3</Link></li>
                        <li><Link to="/chef">chef</Link></li>
                        <li><a href="/services-style-1">services style 1</a></li>
                        <li><a href="/services-style-2">services style 2</a></li>
                        <li><a href="/services-style-3">services style 3</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#" className="main-link">reservation</a>
                    <ul className="sub-menu">
                        <li><a href="#">reservation style 1</a></li>
                        <li><a href="#">reservation style 2</a></li>
                        <li><a href="#">reservation style 3</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#" className="main-link">food menu</a>
                    <ul className="sub-menu">
                        <li><a href="#">food menu style 1</a></li>
                        <li><a href="#">food menu style 2</a></li>
                    </ul>
                </li>
                <li className="sp">
                    <a href="#" className="main-link">feature</a>
                    <div className="feature">
                        <ul className="box">
                            <li><a href="#">tab</a></li>
                            <li><a href="#">accordion</a></li>
                            <li><a href="#">alert</a></li>
                            <li><a href="#">pricing table</a></li>
                            <li><a href="#">divider</a></li>
                        </ul>
                        <ul className="box">
                            <li><a href="#">F.A.Q</a></li>
                            <li><a href="#">typography</a></li>
                            <li><a href="#">404 page</a></li>
                            <li><a href="#">offline page</a></li>
                            <li><a href="#">dropcap</a></li>
                        </ul>
                        <div className="schedule">
                            <h3>Mangiare opening hours</h3>
                            <div className="days">
                                <div className="daysG">
                                    <div className="day">
                                        <h4>sunday</h4>
                                        <span>10:00am - 11:00pm</span>
                                    </div>
                                    <div className="day">
                                        <h4>Monday</h4>
                                        <span>10:00am - 11:00pm</span>
                                    </div>
                                    <div className="day">
                                        <h4>tuesday</h4>
                                        <span>10:00am - 11:00pm</span>
                                    </div>
                                </div>
                                <div className="daysG">
                                    <div className="day">
                                        <h4>wednesday</h4>
                                        <span>10:00am - 11:00pm</span>
                                    </div>
                                    <div className="day">
                                        <h4>thursday</h4>
                                        <span>10:00am - 11:00pm</span>
                                    </div>
                                    <div className="day">
                                        <h4>friday</h4>
                                        <span>10:00am - 11:00pm</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="#" className="main-link">blog</a>
                    <ul className="sub-menu right">
                        <li><a href="#">food menu style 1</a></li>
                        <li><a href="#">food menu style 2</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#" className="main-link">contact</a>
                    <ul className="sub-menu right">
                        <li><a href="#">food menu style 1</a></li>
                        <li><a href="#">food menu style 2</a></li>
                    </ul>
                </li>
            </ul>
            <Burger setBurger={setBurger} burger={burger} setMenu={setMenu} menu={menu}/>
        </Container>
        
    </header>
  )
}

export default Header