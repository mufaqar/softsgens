import React, { useState } from 'react'
import Header from "../../components/header"
import Image from 'next/image';
import Head from 'next/head';
import Footer from "../../components/footer"
import WorkLayout from '../../components/workLayout';

export default function Portfolio() {

  const [overView, setOverView] = useState(false);
  const [id, setId] = useState();

  const handleOverview = (id) => {
    setOverView(true);
    setId(id)
  };




  return (
    <div className='relative'>
      <Head>
        <title>Portfolio | SoftGens </title>
        <meta name="description" content="Portfolio" />
      </Head>

      <Header
        title="Portfolio"
        content="We are a one-stop shop for businesses big and small. From building, to designing, to analyzing and improving, we are always ready to make your company website smarter."
        lottifyURL="https://assets3.lottiefiles.com/packages/lf20_eeuhulsy.json"
        lottifyWidth="1000px"
        lottifyheight="500px"
        button={true}
      />

      
      <section className='py-24 mt-20 px-5 container mx-auto'>
      <div className='grid md:grid-cols-2 gap-8'>
        {
          [1,2,3,4,5,6].map((item, idx)=>{
            return <WorkLayout item={item} index={idx}/>
          })
        }
        
      </div>
    </section>

      

      <Footer/>

    </div>
  )
}
