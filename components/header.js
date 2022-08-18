import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-hook-inview';

export default function Header({
  title,
  content,
  lottifyURL,
  lottifyWidth,
  lottifyheight,
}) {
  const [toggle, SetToggle] = useState(false);
  const router = useRouter();
  const [ref, inView] = useInView();
  const animation = useAnimation();
  const animationLotti = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 1,
        opacity: 1,
      });
      animationLotti.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    } else {
      animation.start({
        x: '-3vw',
        opacity: 0,
      });
      animationLotti.start({
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <>
      <header>
        <div className="flex items-center h-24">
          <nav className="container relative z-50 flex items-center justify-between px-5 mx-auto lg:px-0">
            <Link href="/" className="flex-1 ">
              <a>
                <Image
                  src="/images/logo.png"
                  alt=""
                  className="cursor-pointer "
                  width="200"
                  height="40"
                />
              </a>
            </Link>

            <div className="hidden lg:block">
              <ul className="flex flex-col items-center space-x-12 text-lg font-semibold tracking-wider text-gray-700 uppercase lg:flex-row">
                <li
                  className={
                    router.pathname == '/' ? 'text-blue-700 underline' : ''
                  }
                >
                  <Link href="/">
                    <a className="hover:text-blue-700 hover:underline ">Home</a>
                  </Link>
                </li>

                <li
                  className={
                    router.pathname == '/services'
                      ? 'text-blue-700 underline'
                      : ''
                  }
                >
                  <Link href="/services">
                    <a className=" hover:text-blue-700 hover:underline">
                      Services
                    </a>
                  </Link>
                </li>
                <li
                  className={
                    router.pathname == '/portfolio'
                      ? 'text-blue-700 underline'
                      : ''
                  }
                >
                  <Link href="/portfolio">
                    <a className=" hover:text-blue-700 hover:underline">
                      Portfolio
                    </a>
                  </Link>
                </li>

                <li
                  className={
                    router.pathname == '/about' ? 'text-blue-700 underline' : ''
                  }
                >
                  <Link href="/about">
                    <a className=" hover:text-blue-700 hover:underline">
                      About
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="">
                    <a className="p-4 text-white rounded-full pl-7 pr-7 hover:text-blue-700 hover:underline bg-gradient-to-l from-blue-300 to-blue-500">
                      Let&apos;s Talk
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div
              className={`${toggle ? 'fa-bar' : 'fa-times'} sm:block lg:hidden`}
              onClick={() => SetToggle(!toggle)}
            ></div>
          </nav>

          <div
            className={` ${
              toggle ? 'block' : 'hidden'
            } absolute z-10 block w-full top-24 lg:hidden`}
          >
            <div>
              <ul className="w-full pl-10 bg-blue-400 md:pl-0">
                <li className="pt-10">
                  <Link href="/services">
                    <a className="mt-6 text-2xl text-white hover:text-blue-700 hover:underline ">
                      Services
                    </a>
                  </Link>
                </li>
                <li className="pt-10">
                  <Link href="/portfolio">
                    <a className="mt-6 text-2xl text-white hover:text-blue-700 hover:underline ">
                      Portfolio
                    </a>
                  </Link>
                </li>

                <li className="pt-10">
                  <Link href="/about">
                    <a className="mt-6 text-2xl text-white hover:text-blue-700 hover:underline ">
                      about
                    </a>
                  </Link>
                </li>
                <li className="py-10">
                  <Link href="/contact" className="">
                    <a className="mt-6 text-2xl text-white hover:text-blue-700 hover:underline ">
                      Let&apos;s Talk
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <main className="main bg-gradient" ref={ref}>
          <div className="container flex flex-col items-center justify-between mx-auto md:flex-row inner ">
            <motion.div className="lg:w-1/2" animate={animation}>
              <div className="pl-2 mt-10 lg:mr-0">
                <h2 className="p-2 leading-[70px] main-heading">
                  {title}
                  <span className="text-blue-500">!</span>
                </h2>
                <p className="p-1 main-text">{content}</p>
                <motion.div
                  className="flex p-2 mt-6 lg:p-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <Link href="/contact">
                    <a className="btn-blue">Start A project</a>
                  </Link>
                  <Link href="/portfolio">
                    <a className="ml-2 border-btn">Portfolio</a>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div className="lg:w-1/2" animate={animationLotti}>
              <Player
                autoplay
                loop
                src={lottifyURL}
                style={{ height: { lottifyheight }, width: { lottifyWidth } }}
              ></Player>
            </motion.div>
          </div>
        </main>
      </header>
    </>
  );
}
