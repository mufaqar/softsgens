import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/logo.png';
import { SiMinutemailer } from 'react-icons/si';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-hook-inview';

const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  { ssr: false }
);

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
  }, [inView, animation]);

  return (
    <>
      <footer className="relative" ref={ref}>
        <div className="pt-20 footer text-white bg-primary mt-[6.3rem] pb-12">
          <div className="container mx-auto pt-11 footer-wrapper">
            <div className="grid md:px-10 px-4 lg:space-x-20 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col">
                <figure>
                  <Image src="/logo.png" width={225} height={59} alt="Logo"></Image>
                </figure>
                <p className="mt-2 text-gray-300">
                  Softsgens is a team of talented agile developers who provide
                  bespoke software development services.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <input
                    type="email"
                    placeholder="Your mail address.!"
                    className="w-full p-3 text-white placeholder-gray-400 bg-transparent border border-gray-600 rounded-md shadow outline-none"
                  ></input>
                  <button className="p-4 ml-3 text-primary bg-secondary rounded-md shadow hover:bg-gray-200">
                    <SiMinutemailer />
                  </button>
                </div>
                <h5 className="mt-4 mb-5 font-bold text-secondary">10/10 Overall rating</h5>
              </div>

              <div className="">
                <h3 className="text-lg font-bold text-secondary">Useful Links</h3>
                <ul className="mb-4">
                  <li className="mt-5 font-medium text-gray-300 cursor-pointer hover:text-secondary hover:underline">
                    <Link href="/about">About Us</Link>
                  </li>
                  <li className="mt-5 font-medium text-gray-300 cursor-pointer hover:text-secondary hover:underline">
                    <Link href="/contact">Hire Us </Link>
                  </li>

                  <li className="mt-5 font-medium text-gray-300 cursor-pointer hover:text-secondary hover:underline">
                    <Link href="/contact"> Contact Us </Link>
                  </li>
                  <li className="mt-5 font-medium text-gray-300 cursor-pointer hover:text-secondary hover:underline">
                    <a
                      href="https://www.linkedin.com/company/softs-generations"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-secondary">Technologies</h3>
                <ul className="mb-4">
                  <li className="mt-5 font-medium text-gray-300 cursor-pointer hover:text-secondary hover:underline">
                    PHP
                  </li>
                  <li className="mt-5 font-medium text-gray-300 cursor-pointer hover:text-secondary hover:underline">
                    ReactJs ( NextJs )
                  </li>
                  <li className="mt-5 font-medium text-gray-300 cursor-pointer hover:text-secondary hover:underline">
                    JavaScript
                  </li>
                  <li className="mt-5 font-medium text-gray-300 cursor-pointer hover:text-secondary hover:underline">
                    WordPress
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-secondary">Contact Us</h3>
                <div className="flex mt-4">
                  <div className="text-secondary">
                    <HiOutlineOfficeBuilding size={'1.7rem'} />
                  </div>
                  <p className="ml-2 text-gray-300">
                    Suit 134-B Multan Road Lahore, Pakistan
                  </p>
                </div>

                <div className="flex mt-5">
                  <div className="text-secondary">
                    <MdOutlineAlternateEmail size={'1.7rem'} />
                  </div>
                  <p className="ml-2 text-gray-300"> info@softsgens.com </p>
                </div>

                <div className="flex mt-5">
                  <div className="text-secondary">
                    <FiPhone size={'1.7rem'} />
                  </div>
                  <p className="ml-2 text-gray-300"> +92 302 6006 280 </p>
                </div>
                <div className="flex mt-5">
                  <Link
                    href="/contact"
                    className="px-8 py-3 mt-8 text-lg font-semibold text-primary uppercase bg-secondary border-gray-200 rounded-md shadow cursor-pointer hover:bg-gray-200"
                  >
                    Hire Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center py-5 px-4 mt-20 footer-wrapper">
            <p className="font-semibold text-center text-gray-400 border-t border-gray-700 pt-5 w-full">
              © 2026 Rights Reserved. Designed By <a href="https://www.softsgens.com" className="text-secondary hover:underline">
                SoftsGens
              </a>
            </p>
          </div>
        </div>

        <motion.div
          className="absolute left-20 max-w-[300px] footerlottify -z-10"
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
