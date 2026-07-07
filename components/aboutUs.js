import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-hook-inview';
import { RiStarFill } from 'react-icons/ri';

const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  { ssr: false }
);

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
  }, [inView, animation]);

  return (
    <>
      <div className="container mx-auto mt-20 rounded-3xl li-gradient about-section">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="">
            <Player
              autoplay
              loop
              src="https://assets1.lottiefiles.com/packages/lf20_teushzjj.json"
              className="md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px]"
            ></Player>
          </div>
          <motion.div
            animate={animation}
            ref={ref}
            className="py-16 pl-4 pr-4 md:pr-10 lg:pr-48 lg:pl-20"
          >
            <h2 className="text-left main-title text-primary">About Us</h2>
            <h3 className="mt-4 mb-2 h3">Who We Are</h3>
            <p className="main-text">
              Softsgens is a team of passionate developers, designers, and digital strategists dedicated to building websites and applications that drive real business growth. We combine technical expertise with creative thinking to deliver solutions that stand out.
            </p>
            <h3 className="mt-4 mb-2 h3">What Our Clients Say</h3>
            <div className="flex items-center space-x-1">
              <RiStarFill color="#FB9247" />
              <RiStarFill color="#FB9247" />
              <RiStarFill color="#FB9247" />
              <RiStarFill color="#FB9247" />
              <RiStarFill color="#FB9247" />
            </div>
            <p className="mt-2 italic text-gray-600">
              &ldquo;Softsgens transformed our online presence. The team was professional, responsive, and delivered beyond our expectations. Our traffic and conversions have never been better.&rdquo;
            </p>
            <p className="mt-1 text-sm font-semibold text-primary">— Sarah Mitchell, CEO of Lumos Retail</p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="text-lg font-semibold text-primary"
              >
                Why Work With Us &rarr;
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
