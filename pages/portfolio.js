import React, { useState } from 'react'
import Header from "../components/header"
import Image from 'next/image';
import webDev from '../public/images/w-d.webp'
import StoryBgOne from '../public/images/StoryBgOne.svg'
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
      <Header
        title="Portfolio"
        content="We are a one-stop shop for businesses big and small. From building, to designing, to analyzing and improving, we are always ready to make your company website smarter."
        lottifyURL="https://assets10.lottiefiles.com/packages/lf20_bklapohq.json"
        lottifyWidth="1000px"
        lottifyheight="500px"
      />

      <div className='container grid p-4 mx-auto mb-20 lg:p-0 lg:grid-cols-3 gap-x-8 mt-36'>
        {
          data.map((portfolio, index) => (
            <div className="portfolio_card" key={index} >
              <Image className="h-64 w-full rounded-2xl object-cover object-top portfolio-image" src={portfolio.featureImg} alt=""/>
                <div className="relative px-4 -mt-16">
                  <div className="p-6 li-gradient rounded-xl shadow-xl">
                    <div className="flex items-baseline">
                      <span className="inline-block bg-blue-200 text-blue-800 text-xs px-2 rounded-full uppercase">{portfolio.framework}</span>
                      <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wider">
                        3 camas &bull; 2 banheiros
                      </div>
                    </div>
                    <h4 className="mt-1 font-semibold text-xl leading-tight truncate">{portfolio.siteName}</h4>
                    <a href={portfolio.link} target="__blank" className="font-semibold text-base text-blue-500 mt-2 underline">
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
