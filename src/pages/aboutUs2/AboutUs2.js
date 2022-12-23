import React from 'react'
import { Rest, Chef, Testimonials, About2, Para } from '../../sections/Index'
import {PageHeader} from '../../components/Index'

const AboutUs2 = () => {
  return (
    <>
        <PageHeader title="about us 2"/> 
        <About2/>
        <Para/>
        <Rest/>
        <Chef/>
        <Testimonials/>
    </>

  )
}

export default AboutUs2