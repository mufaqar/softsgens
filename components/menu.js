import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Menu() {
  const [toggle, SetToggle] = useState(false);
  return (
    <>
      <div className="flex items-center h-24 border-b-2 border-gray-100">
        <nav className="container relative flex items-center justify-between px-5 mx-auto lg:px-0">
          <Link href="/" className="flex-1 ">
            <Image
              src="/images/logo.png"
              alt=""
              className="cursor-pointer "
              width="200"
              height="40"
            />
          </Link>

          <div className="hidden lg:block">
            <ul className="flex flex-col items-center text-lg font-normal tracking-wider text-gray-700 lg:bg-white lg:flex-row font-fira">
              <li>
                <Link href="/services">
                  <a className="ml-16 hover:text-blue-700">Services</a>
                </Link>
              </li>
              <li>
                <Link href="/work">
                  <a className="ml-16 hover:text-blue-700">Work</a>
                </Link>
              </li>
              <li>
                <Link href="/insights">
                  <a className="ml-16 hover:text-blue-700">Insights</a>
                </Link>
              </li>
              <li>
                <Link href="/company">
                  <a className="ml-16 hover:text-blue-700">Company</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="">
                  <a className="p-4 ml-16 text-white rounded-full pl-7 pr-7 hover:text-blue-700 bg-gradient-to-l from-blue-300 to-blue-500">
                    Contact Us
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
          {/* <MobileMenu /> */}
        </div>
      </div>
    </>
  );
}
