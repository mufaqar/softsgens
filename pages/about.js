import React from 'react'
import Header from "../components/header"
import Story from '../components/story'
import Testimonial from '../components/testimonial'
import Footer from "../components/footer"
import { Brands } from '../components/Brands'

function About() {
  return (
    <>
      <Header 
        title="Offering Digital Solutions to Amazing People"
        content="We are a one-stop shop for businesses big and small. From building, to designing, to analyzing and improving, we are always ready to make your company website smarter."
        lottifyURL="https://assets10.lottiefiles.com/packages/lf20_bklapohq.json"
        lottifyWidth="1000px"
        lottifyheight="500px"
      />

      <Story/>
      <Testimonial/>
      <Brands/>
      <Footer/>
    </>
  )
}

export default About