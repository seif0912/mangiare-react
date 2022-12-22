import React from 'react'
import { Welcome, Speciality, Rest, Chef, Testimonials } from '../../sections/Index'
import {PageHeader} from '../../components/Index'

const AboutUs1 = () => {
  return (
    <>
        <PageHeader title="about us 1"/> 
        <Welcome/>
        <Speciality class="grey-bg"/>
        <Rest/>
        <Chef/>
        <Testimonials/>
    </>

  )
}

export default AboutUs1