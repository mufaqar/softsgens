import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <>
        <div className='container mx-auto mt-20 rounded-3xl li-gradient about-section'>
            <div className='flex flex-col items-center justify-between md:flex-row'>
                <div className=''>
                    <Player
                        autoplay
                        loop
                        src="https://assets1.lottiefiles.com/packages/lf20_teushzjj.json"
                        // style={{ height: '500px', width: '500px' }}
                        className="md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px]"
                    >
                    </Player>
                </div>
                <div className='py-16 pl-10 md:pr-10 lg:pr-48 lg:pl-20'>
                    <h2 className='text-left main-title text-secoundry'>About Us</h2>
                    <h3 className='mt-4 mb-2 h3'>Why SoftGens</h3>
                    <p className='main-text'>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown</p>
                    <h3 className='mt-4 mb-2 h3'>Our Missions</h3>
                    <p className='mb-6 main-text'>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown</p>
                    <Link href='#'>
                        <a className='text-lg font-semibold text-blue-600'>Why Work With Us</a>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}
