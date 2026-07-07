import Link from 'next/link';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-hook-inview';

export default function Clients() {
  const [ref, inView] = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
      });
    }
    if (!inView) {
      animation.start({
        x: '-3vw',
        opacity: 0,
      });
    }
  }, [inView, animation]);

  return (
    <>
      <div
        ref={ref}
        className="container flex flex-col items-center mt-6 lg:mt-32 p-4 mx-auto lg:flex-row lg:p-0"
      >
        <motion.div className="w-full" animate={animation}>
          <h2 className="mt-8 sub-heading lg:mt-0">
            We work with all types of clients
            <br /> PHP &bull; WordPress &bull; React &bull; API
          </h2>
          <p className="mt-8 mb-6 text-lg max-w-2xl">
            From custom PHP backends and WordPress sites to modern React frontends and headless API integrations — I partner with businesses of every stack to build, scale, and optimize their digital products.
          </p>
          <Link href="/services" className="text-base font-semibold uppercase">
            See What We Do
          </Link>
        </motion.div>
      </div>
    </>
  );
}
