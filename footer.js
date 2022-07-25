import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/logo.png'
import { SiMinutemailer } from 'react-icons/si';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';

export default function Footer() {
  return (
    <>
      <footer class="footer pt-20 bg-base-200 text-base-content li-gradient">
        <div class="container mx-auto">
          <div className='grid px-10 lg:space-x-20 md:grid-cols-2 lg:grid-cols-4'>
            <div className='flex flex-col'>
              <figure>
                <Image src={logo} width={200} height={40}></Image>
              </figure>
              <p className='mt-2 main-text'>Softsgens is a team of talented agile developers who provide bespoke software development services.</p>
              <div className='flex items-center justify-between mt-4'>
                  <input type='email' placeholder='Your mail address.!' className='w-full p-3 border-none rounded-md shadow outline-none'></input>
                  <button className='p-4 ml-3 bg-blue-500 rounded-md shadow hover:bg-white'>
                    <SiMinutemailer />
                  </button>
              </div>
              <h5 className='mt-4 mb-5 font-bold'>10/10 Overall rating</h5>
            </div>

            <div className=''>
              <h3 className='text-lg font-bold'>Useful Links</h3>
              <ul className='mb-4'>
                <li className='mt-5 font-medium cursor-pointer hover:underline'>Careers</li>
                <li className='mt-5 font-medium cursor-pointer hover:underline'>About Us</li>
                <li className='mt-5 font-medium cursor-pointer hover:underline'>Hire Us</li>
                <li className='mt-5 font-medium cursor-pointer hover:underline'>Faq's</li>
                <li className='mt-5 font-medium cursor-pointer hover:underline'>Contact Us</li>
              </ul>
            </div>

            <div>
              <h3 className='text-lg font-bold'>Technologies</h3>
              <ul className='mb-4'>
                <li className='mt-5 font-medium cursor-pointer hover:underline'>PHP</li>
                <li className='mt-5 font-medium cursor-pointer hover:underline'>React</li>
                <li className='mt-5 font-medium cursor-pointer hover:underline'>JavaScript</li>
                <li className='mt-5 font-medium cursor-pointer hover:underline'>Wordpress</li>
              </ul>
            </div>

            <div>
              <h3 className='text-lg font-bold'>Contact Us</h3>
              <div className='flex mt-4'>
                <div><HiOutlineOfficeBuilding size={'1.7rem'} /></div>
                <p className='ml-2'> Lorem Ipsum è un testo segnaposto utilizzato nel settore ...</p>
              </div>

              <div className='flex mt-5'>
                <div><MdOutlineAlternateEmail size={'1.7rem'} /></div>
                <p className='ml-2'> info@softsgens.com </p>
              </div>

              <div className='flex mt-5'>
                <div><FiPhone size={'1.7rem'} /></div>
                <p className='ml-2'> +92300 0000 000 </p>
              </div>

              <button className='px-8 py-3 mt-8 text-lg font-semibold text-white uppercase bg-blue-500 border-gray-200 rounded-md shadow cursor-pointer hover:bg-white hover:text-gray-800 hover:border-2'>Hire Now</button>

            </div>

          </div>
        </div>
        <div className='flex justify-center py-5 mt-20 copyright'>
            <p className='font-semibold text-gray-500'>© 2022 Rights Reserved. Designed By Softsgens</p>
        </div>
      </footer>
    </>
  );
}
