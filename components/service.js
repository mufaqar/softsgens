import React from 'react';
import Image from 'next/image';
import ServicesImg from '../public/images/services.png';
import wp from '../public/images/brands/wordpress.png';
import react from '../public/images/brands/reactjs.png';
import javasript from '../public/images/brands/javascript.png';
import bootstrap from '../public/images/brands/bootstrap.png';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-hook-inview';

export default function Service() {
  const [ref, inView] = useInView();
  const animation = useAnimation();
  const animationicon = useAnimation();
  const animationImg = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        scale: 1,
        transition: {
          type: 'spring',
          duration: 2,
          bounce: 0.3,
        },
      });
      animationicon.start({
        opacity: 1,
        scale: 1,
        transition: {
          type: 'spring',
          duration: 2,
          bounce: 0.3,
        },
      });
      animationImg.start({
        opacity: 1,
        scale: 1,
      });
    } else {
      animation.start({
        opacity: 0,
        scale: 0.8,
      });
      animationicon.start({
        opacity: 0,
        scale: 0.8,
      });
      animationImg.start({
        opacity: 0,
        scale: 0.8,
      });
    }
  }, [inView]);

  return (
    <div className="container mx-auto mt-32" ref={ref}>
      <motion.h1
        className="text-center main-title text-secoundry"
        animate={animation}
      >
        Services
      </motion.h1>
      <motion.div animate={animation} className="flex justify-center">
        <p className="max-w-2xl mt-3 text-center sub-content">
          Whether you need a website designed and built, have an idea for a
          custom app or you want to tackle the mobile web, just reach out and
          we'll dive in..
        </p>
      </motion.div>
      <div className="grid mt-16 md:grid-cols-2">
        <motion.div
          className="flex justify-center ser-img"
          animate={animationImg}
        >
          <Image src={ServicesImg} alt="img"></Image>
        </motion.div>
        <div className="grid grid-cols-2">
          <motion.div
            animate={animationicon}
            className="flex flex-col items-center justify-center mt-8"
          >
            <figure className="p-2 pb-0 rounded-full shadow-md">
              <Image src={wp} width={40} height={40} alt=""></Image>
            </figure>
            <h3 className="mt-2 text-center h3 opacity-90">Wordpress</h3>
          </motion.div>

          <motion.div
            animate={animationicon}
            className="flex flex-col items-center justify-center mt-8"
          >
            <figure className="p-2 pb-0 rounded-full shadow-md">
              <Image src={react} width={40} height={40} alt=""></Image>
            </figure>
            <h3 className="mt-2 text-center h3 opacity-90">React js</h3>
          </motion.div>

          <motion.div
            animate={animationicon}
            className="flex flex-col items-center justify-center mt-8"
          >
            <figure className="p-2 pb-0 rounded-full shadow-md">
              <Image src={javasript} width={40} height={40} alt=""></Image>
            </figure>
            <h3 className="mt-2 text-center h3 opacity-90">Javascript</h3>
          </motion.div>

          <motion.div
            animate={animationicon}
            className="flex flex-col items-center justify-center mt-8"
          >
            <figure className="p-2 pb-0 rounded-full shadow-md">
              <Image src={bootstrap} width={40} height={40} alt=""></Image>
            </figure>
            <h3 className="mt-2 text-center h3 opacity-90">Bootstrap</h3>
          </motion.div>

          <div className="flex items-center justify-end mt-10 -mr-20 md:mt-0">
            <button className="shadow-sm gradient-btn bg-gradient">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
