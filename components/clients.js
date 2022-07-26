import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-hook-inview'


export default function Clients() {

  const [ref, inView] = useInView();
  const animation = useAnimation();
  const animationLogo = useAnimation();

  useEffect(() => {
    if(inView){
      animation.start({
        x : 0
      })
      animationLogo.start({
        x : 0
      })
    }
    if(!inView){
      animation.start({
        x : "-100vw"
      })
      animationLogo.start({
        x: "100vw"
      })
    }
  }, [inView]);
  
  return (
    <>
      <div ref={ref} className="container flex flex-col items-center min-h-screen p-2 mx-auto lg:flex-row lg:p-0">
        <motion.div className="w-full lg:w-1/2" animate={animation}>
          <h2 className="mt-8 sub-heading lg:mt-0">
            A Family Run-Agency
            <br /> Your Trusted Digital Partner
          </h2>
          <p className="mt-8 mb-6 text-lg" >
            Whatever you need, from websites, to design, to business-boosting
            solutions, we are ready to roll up our sleeves and get to work.
          </p>
          <Link href="/" className="">
            <a className="text-base font-semibold uppercase">
              See What We do
            </a>
          </Link>
          <div className="grid justify-center grid-cols-2 mt-5 md:grid-cols-3 lg:justify-start">
            <div className="flex flex-col items-center justify-center mt-6 mr-8 lg:mr-20">
              <h3 className="text-3xl font-semibold text-main lg:text-5xl">
                250+
              </h3>
              <span className="items-center mt-3 text-xs font-medium text-gray-500 uppercase whitespace-nowrap">
                Client Satisfied
              </span>
            </div>
            <div className="flex flex-col items-center justify-center mt-6 mr-8 lg:mr-20">
              <h3 className="text-3xl font-semibold text-main lg:text-5xl">
                11
              </h3>
              <span className="items-center mt-3 text-xs font-medium text-gray-500 uppercase whitespace-nowrap">
                years of experiance
              </span>
            </div>
            <div className="flex flex-col items-center justify-center mt-6 mr-8 lg:mr-20">
              <h3 className="text-3xl font-semibold text-main lg:text-5xl">
                600+
              </h3>
              <span className="items-center mt-3 text-xs font-medium text-gray-500 uppercase whitespace-nowrap">
                Projects build
              </span>
            </div>
          </div>
        </motion.div>
        <motion.div animate={animationLogo} className="mt-8 lg:mt-0 grid items-center justify-end w-full grid-cols-4 gap-1.5 p-3 lg:p-10 gap-y-0 item-center grid-row-3 lg:w-1/2 ">
          <div>
            <Image
              src="/images/brands/wp.png"
              alt=""
              width="250"
              height="250"
            />
          </div>
          <div>
            <Image
              src="/images/brands/woo.png"
              alt=""
              width="250"
              height="250"
            />
          </div>
          <div>
            <Image
              src="/images/brands/php.png"
              alt=""
              width="250"
              height="250"
            />
          </div>

          <div></div>
          <div>
            <Image
              src="/images/brands/js.png"
              alt=""
              width="250"
              height="250"
            />
          </div>
          <div>
            <Image
              src="/images/brands/react.png"
              alt=""
              width="250"
              height="250"
            />
          </div>
          <div>
            <Image
              src="/images/brands/next.png"
              alt=""
              width="250"
              height="250"
            />
          </div>
          <div>
            <Image
              src="/images/brands/strapi.png"
              alt=""
              width="250"
              height="250"
            />
          </div>
          <div></div>
          <div>
            <Image
              src="/images/brands/tailwindcss.png"
              alt=""
              width="250"
              height="250"
            />
          </div>
          <div>
            <Image
              src="/images/brands/shopify.png"
              alt=""
              width="250"
              height="250"
            />
          </div>
          <div>
            <Image
              src="/images/brands/conentful.png"
              alt=""
              width="250"
              height="250"
            />
          </div>
        </motion.div>
      </div>
    </>
  );
}
