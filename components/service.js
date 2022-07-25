import React from 'react'
import Image from 'next/image'
import ServicesImg from '../public/images/services.png'
import { BiCodeAlt } from 'react-icons/bi';
import wp from "../public/images/brands/wordpress.png"
import react from "../public/images/brands/reactjs.png"
import javasript from "../public/images/brands/javascript.png"
import bootstrap from "../public/images/brands/bootstrap.png"

export default function Service() {
  return (
    <div className='container mx-auto mt-32'>
        <h1 className='text-center main-title text-secoundry'>Services</h1>
        <div className='flex justify-center'>
            <p className='max-w-2xl mt-3 text-center sub-content'>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
        </div>
        <div className='grid mt-16 md:grid-cols-2'>
            <div className='flex justify-center ser-img'>
                <Image src={ServicesImg}></Image>
            </div>
            <div className='grid grid-cols-2'>
                <div className='flex flex-col items-center justify-center mt-8'>
                    <figure className='p-2 pb-0 rounded-full shadow-md'><Image src={wp} width={40} height={40} alt=""></Image></figure>
                    <h3 className='mt-2 text-center h3 opacity-90'>Wordpress</h3>
                </div>
                
                <div className='flex flex-col items-center justify-center mt-8'>
                    <figure className='p-2 pb-0 rounded-full shadow-md'><Image src={react} width={40} height={40}  alt=""></Image></figure>
                    <h3 className='mt-2 text-center h3 opacity-90'>React js</h3>
                </div>

                <div className='flex flex-col items-center justify-center mt-8'>
                    <figure className='p-2 pb-0 rounded-full shadow-md'><Image src={javasript} width={40} height={40}  alt=""></Image></figure>
                    <h3 className='mt-2 text-center h3 opacity-90'>Javascript</h3>
                </div>

                <div className='flex flex-col items-center justify-center mt-8'>
                    <figure className='p-2 pb-0 rounded-full shadow-md'><Image src={bootstrap} width={40} height={40}  alt=""></Image></figure>
                    <h3 className='mt-2 text-center h3 opacity-90'>Bootstrap</h3>
                </div>
                
                <div className='flex items-center justify-end mt-10 -mr-20 md:mt-0'>
                    <button className='shadow-sm gradient-btn bg-gradient'>Learn More</button>
                </div>
            </div>

        </div>
    </div>
  )
}
