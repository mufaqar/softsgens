import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/logo.png';
import { SiMinutemailer } from 'react-icons/si';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-hook-inview';

export default function Footer() {
  const [ref, inView] = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        top: '192px',
        transition: {
          delay: 0.5,
          duration: 0.3,
        },
      });
    } else {
      animation.start({
        top: '-100%',
      });
    }
  }, [inView]);

  return (
    <>
      <footer className="relative" ref={ref}>
        <div className="pt-20 footer text-base-content li-gradient mt-[6.3rem] pb-12">
          <div className="container mx-auto pt-11 footer-wrapper">
            <div className="grid px-10 lg:space-x-20 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col">
                <figure>
                  <Image src={logo} width={200} height={40} alt="img"></Image>
                </figure>
                <p className="mt-2 main-text">
                  Softsgens is a team of talented agile developers who provide
                  bespoke software development services.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <input
                    type="email"
                    placeholder="Your mail address.!"
                    className="w-full p-3 border-none rounded-md shadow outline-none"
                  ></input>
                  <button className="p-4 ml-3 bg-blue-500 rounded-md shadow hover:bg-white">
                    <SiMinutemailer />
                  </button>
                </div>
                <h5 className="mt-4 mb-5 font-bold">10/10 Overall rating</h5>
              </div>

              <div className="">
                <h3 className="text-lg font-bold">Useful Links</h3>
                <ul className="mb-4">
                  <li className="mt-5 font-medium cursor-pointer hover:underline">
                    Careers
                  </li>
                  <li className="mt-5 font-medium cursor-pointer hover:underline">
                    About Us
                  </li>
                  <li className="mt-5 font-medium cursor-pointer hover:underline">
                    Hire Us
                  </li>
                  <li className="mt-5 font-medium cursor-pointer hover:underline">
                    Faqs
                  </li>
                  <li className="mt-5 font-medium cursor-pointer hover:underline">
                    Contact Us
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold">Technologies</h3>
                <ul className="mb-4">
                  <li className="mt-5 font-medium cursor-pointer hover:underline">
                    PHP
                  </li>
                  <li className="mt-5 font-medium cursor-pointer hover:underline">
                    React
                  </li>
                  <li className="mt-5 font-medium cursor-pointer hover:underline">
                    JavaScript
                  </li>
                  <li className="mt-5 font-medium cursor-pointer hover:underline">
                    Wordpress
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold">Contact Us</h3>
                <div className="flex mt-4">
                  <div>
                    <HiOutlineOfficeBuilding size={'1.7rem'} />
                  </div>
                  <p className="ml-2">
                    Suit 134-B Multan Road Lahore , Pakistan
                  </p>
                </div>

                <div className="flex mt-5">
                  <div>
                    <MdOutlineAlternateEmail size={'1.7rem'} />
                  </div>
                  <p className="ml-2"> hello@softsgens.com </p>
                </div>

                <div className="flex mt-5">
                  <div>
                    <FiPhone size={'1.7rem'} />
                  </div>
                  <p className="ml-2"> +92 302 6006 280 </p>
                </div>

                <button className="px-8 py-3 mt-8 text-lg font-semibold text-white uppercase bg-blue-500 border-gray-200 rounded-md shadow cursor-pointer hover:bg-white hover:text-gray-800 hover:border-2">
                  Hire Now
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center py-5 mt-20 footer-wrapper copyright">
            <p className="font-semibold text-center text-gray-500">
              © 2022 Rights Reserved. Designed By Softsgens
            </p>
          </div>
        </div>

        <motion.div
          className="absolute left-20 w-[300px] footerlottify -z-10"
          animate={animation}
        >
          <Player
            autoplay
            loop
            src="https://assets1.lottiefiles.com/packages/lf20_FYx0Ph.json"
            style={{ maxHeight: '200', width: '200' }}
          ></Player>
        </motion.div>
      </footer>
    </>
  );
}
