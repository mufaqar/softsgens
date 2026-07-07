import React from 'react'
import Header from "../components/header"
import Story from '../components/story'
import Testimonial from '../components/testimonial'
import Footer from "../components/footer"
import Head from 'next/head';

function About() {
  return (
    <>
      <Head>
        <title>About Us | SoftGens - Digital Agency for Web & Video</title>
        <meta name="description" content="Learn about SoftGens - a team of talented developers and creators specializing in web development, WordPress, React, Next.js, and UGC video ad production." />
      </Head>

      <Header 
        title="Offering Digital Solutions to Amazing People"
        content="We are a one-stop shop for businesses big and small. From building, to designing, to analyzing and improving, we are always ready to make your company website smarter."
        lottifyURL="https://assets3.lottiefiles.com/packages/lf20_w51pcehl.json"
        lottifyWidth="1000px"
        lottifyheight="500px"
        button={true}
      />

      <Story/>
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default About