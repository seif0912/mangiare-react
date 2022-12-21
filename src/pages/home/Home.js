import React from 'react'
import {Hero, About, SpecialDishes, Speciality, Discover, Rest, Chef, Event, Testimonials, Reservation} from '../../sections/Index'

const Home = () => {
  return (
    <>
        <Hero/>
        <About/>
        <SpecialDishes/>
        <Speciality/>
        <Discover/>
        <Rest/>
        <Chef/>
        <Event/>
        <Testimonials/>
        <Reservation/>
    </>
  )
}

export default Home