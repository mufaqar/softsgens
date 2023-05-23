import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Link from 'next/link';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-hook-inview';

export default function AboutUs() {
  const [ref, inView] = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
      });
    } else {
      animation.start({
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <>
      <div className="container mx-auto mt-20 rounded-3xl li-gradient about-section">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="">
            <Player
              autoplay
              loop
              src="https://assets1.lottiefiles.com/packages/lf20_teushzjj.json"
              // style={{ height: '500px', width: '500px' }}
              className="md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px]"
            ></Player>
          </div>
          <motion.div
            animate={animation}
            ref={ref}
            className="py-16 pl-4 pr-4 md:pr-10 lg:pr-48 lg:pl-20"
          >
            <h2 className="text-left main-title text-secoundry">About Us</h2>
            <h3 className="mt-4 mb-2 h3">Why SoftGens</h3>
            <p className="main-text">
              Whatever you need, from websites, to design, to business-boosting
              solutions, we are ready to roll up our sleeves and get to work.
            </p>
            <h3 className="mt-4 mb-2 h3">Our Missions</h3>
            <p className="mb-6 main-text">
              First, we take the time to understand your business, your goals,
              and your challenges Then, we design a comprehensive set of
              solutions. Once we have your blessing, we make it all come
              together and present the finished product to you, wrapped in a bow
            </p>
            <Link
              href="/contact"
              className="text-lg font-semibold text-blue-600"
            >
              Why Work With Us
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}
