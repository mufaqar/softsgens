import React from 'react'
import Image from 'next/image'
import brand1 from '../public/images/brands/brands (1).png'
import brand2 from '../public/images/brands/brands (2).png'
import brand3 from '../public/images/brands/brands (3).png'
import brand6 from '../public/images/brands/brands (6).png'
import brand5 from '../public/images/brands/brands (5).png'

export const Brands = () => {
  return (
    <div>
        <h2 className="mt-2 text-center text-gray-700 main-title">
            Brands
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-lg leading-7 tracking-wide text-center text-gray-400">
            Uniquely promote adaptive quality vectors rather than stand-alone
            e-markets. pontificate alternative architectures whereas iterate.
        </p>
        <div className='flex justify-around gap-4 lg:px-8 _brand'>
          <figure className='w-52 h-52 grayscale hover:grayscale-0'><Image src={brand1} alt="Brands Picture"></Image></figure>
          <figure className='w-52 h-52 grayscale hover:grayscale-0'><Image src={brand2} alt="Brands Picture"></Image></figure>
          <figure className='w-52 h-52 grayscale hover:grayscale-0'><Image src={brand3} alt="Brands Picture"></Image></figure>
          <figure className='w-52 h-52 grayscale hover:grayscale-0'><Image src={brand5} alt="Brands Picture"></Image></figure>
          <figure className='w-52 h-52 grayscale hover:grayscale-0'><Image src={brand6} alt="Brands Picture"></Image></figure>
        </div>
    </div>
  )
}
