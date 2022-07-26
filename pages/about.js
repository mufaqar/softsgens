import React from 'react'
import Header from "../components/header"
import Story from '../components/story'
import Testimonial from '../components/testimonial'
import Footer from "../components/footer"
import Head from 'next/head';
import { Brands } from '../components/Brands'

function About() {
  return (
    <>
      <Head>
        <title>About Us | SoftGens </title>
        <meta name="description" content="About Us" />
      </Head>

      <Header 
        title="Offering Digital Solutions to Amazing People"
        content="We are a one-stop shop for businesses big and small. From building, to designing, to analyzing and improving, we are always ready to make your company website smarter."
        lottifyURL="https://assets3.lottiefiles.com/packages/lf20_w51pcehl.json"
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