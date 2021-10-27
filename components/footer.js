import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <footer className="py-24 bg-gradient-to-l from-blue-300 to-blue-500">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="flex ">
              <ul className="flex flex-wrap justify-center font-sans font-normal lg:justify-left">
                <li className="mr-3 lg:mr-8 ">
                  <Link href="/">
                    <a className="text-lg text-white hover:text-black">HOME</a>
                  </Link>
                </li>
                <li className="mr-3 lg:mr-8">
                  <Link href="/services">
                    <a className="text-lg text-white hover:text-black">
                      SERVICES
                    </a>
                  </Link>
                </li>
                <li className="mr-3 lg:mr-8 ">
                  <Link href="/portfolio">
                    <a className="text-lg text-white hover:text-black">
                      PORTFOLIO
                    </a>
                  </Link>
                </li>
                <li className="mr-3 lg:mr-8">
                  <Link href="/company">
                    <a className="text-lg text-white hover:text-black">
                      ABOUT US
                    </a>
                  </Link>
                </li>
                <li className="mr-3 lg:mr-8">
                  <Link href="/contact">
                    <a className="text-lg text-white hover:text-black">
                      CONTACT US
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex mt-5 lg:mt-0">
              <span className="flex p-2 w-[36px] h-[36px]  mr-5 bg-white rounded-full hover:animate-bounce">
                <a href="https://www.youtube.com/" target="_new">
                  <Image
                    src="/images/linkedin.png"
                    alt=""
                    className="cursor-pointer "
                    width="20"
                    height="20"
                  />
                </a>
              </span>
              <span className="flex p-2 w-[36px] h-[36px]  mr-5 bg-white rounded-full hover:animate-bounce">
                <a href="https://www.youtube.com/" target="_new">
                  <Image
                    src="/images/facebook.png"
                    alt=""
                    className="cursor-pointer"
                    width="20"
                    height="20"
                  />
                </a>
              </span>
              <span className="flex p-2 w-[36px] h-[36px]  mr-5 bg-white rounded-full hover:animate-bounce">
                <a href="https://www.youtube.com/" target="_new">
                  <Image
                    src="/images/twitter.png"
                    alt=""
                    className="cursor-pointer "
                    width="20"
                    height="20"
                  />
                </a>
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-between mt-10 lg:flex-row">
            <div>
              <span className="">
                <h1 className="font-sans text-4xl font-bold tracking-wider text-center text-white lg:text-left ">
                  SOFTGENS
                </h1>
                <p className="hidden mt-4 text-xl font-light text-center text-white lg:text-left lg:block">
                  Copyright © 2012-2021 Softgens.
                  <br /> All rights reserved.
                </p>
              </span>
            </div>
            <div className="mt-8 lg:mt-0">
              <p className="text-xl font-normal text-center text-white lg:text-right">
                Have a project or a question?
                <br />
                We would love to hear from you.
              </p>
              <p className="mt-6 text-xl font-semibold text-center text-white lg:text-right">
                info@softgens.com
              </p>
              <p className="text-xl font-normal text-center text-white lg:text-right ">
                +92 302 6006280
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
