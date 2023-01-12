import React, { useState } from 'react'
import Header from "../components/header"
import Image from 'next/image';
import Head from 'next/head';
import { data } from '../data_files/portfolioData'
import Footer from "../components/footer"

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
      />

      <div className='container grid p-4 mx-auto mb-20 lg:p-0 lg:grid-cols-3 gap-8 mt-36'>
        {
          data.map((portfolio, index) => (
            <div className="portfolio_card" key={index} >
              <Image className="object-cover object-top w-full h-64 rounded-2xl portfolio-image" src={portfolio.featureImg} alt=""/>
                <div className="relative px-4 -mt-16">
                  <div className="p-6 shadow-xl li-gradient rounded-xl">
                    <div className="flex items-baseline">
                      <span className="inline-block px-2 text-xs text-blue-800 uppercase bg-blue-200 rounded-full">{portfolio.framework}</span>
                      <div className="ml-2 text-xs font-semibold tracking-wider text-gray-600 uppercase">
                        3 camas &bull; 2 banheiros
                      </div>
                    </div>
                    <h4 className="mt-1 text-xl font-semibold leading-tight truncate">{portfolio.siteName}</h4>
                    <a href={portfolio.link} target="__blank" className="mt-2 text-base font-semibold text-blue-500 underline">
                      Visit Site
                    </a>
                  </div>
                  
                </div>
            </div>
          ))
        }

      </div>

      <Footer/>

    </div>
  )
}
