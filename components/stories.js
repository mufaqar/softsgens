import { useState } from 'react';
import Image from 'next/image';

export default function SucessStories() {
  const [click, setclick] = useState(1);
  return (
    <>
      <div className="flex items-center justify-center bg-blue-100">
        <div className="mt-16 mb-16">
          <h1 className="mt-8 text-4xl font-bold leading-normal text-center text-gray-800 lg:mt-0">
            Technologies
            <br /> Fueling Transformation
          </h1>
          <div className="flex flex-wrap items-center justify-center p-4 lg:pl-24 lg:pr-24">
            <div className="flex items-center justify-center p-3 pr-12 mt-10 mr-6 bg-white rounded-lg shadow-sm hover:shadow-lg">
              <span className="pt-2 pb-2 pl-2 pr-2 text-center bg-pink-100 rounded-xl">
                Icon
              </span>
              <p className="ml-2 text-lg font-semibold">Wordpress</p>
            </div>

            <div className="flex items-center justify-center p-3 pr-12 mt-10 mr-6 bg-white rounded-lg shadow-sm hover:shadow-lg">
              <span className="pt-2 pb-2 pl-2 pr-2 text-center bg-pink-100 rounded-xl">
                Icon
              </span>
              <p className="ml-2 text-lg font-semibold">WooCommerce</p>
            </div>

            <div className="flex items-center justify-center p-3 pr-12 mt-10 mr-6 bg-white rounded-lg shadow-sm hover:shadow-lg">
              <span className="pt-2 pb-2 pl-2 pr-2 text-center bg-pink-100 rounded-xl">
                Icon
              </span>
              <p className="ml-2 text-lg font-semibold">React Js</p>
            </div>

            <div className="flex items-center justify-center p-3 pr-12 mt-10 mr-6 bg-white rounded-lg shadow-sm hover:shadow-lg">
              <span className="pt-2 pb-2 pl-2 pr-2 text-center bg-pink-100 rounded-xl">
                Icon
              </span>
              <p className="ml-2 text-lg font-semibold">Next Js</p>
            </div>

            <div className="flex items-center justify-center p-3 pr-12 mt-10 mr-6 bg-white rounded-lg shadow-sm hover:shadow-lg">
              <span className="pt-2 pb-2 pl-2 pr-2 text-center bg-pink-100 rounded-xl">
                Icon
              </span>
              <p className="ml-2 text-lg font-semibold">HTML</p>
            </div>

            <div className="flex items-center justify-center p-3 pr-12 mt-10 mr-6 bg-white rounded-lg shadow-sm hover:shadow-lg">
              <span className="pt-2 pb-2 pl-2 pr-2 text-center bg-pink-100 rounded-xl">
                Icon
              </span>
              <p className="ml-2 text-lg font-semibold">Tailwind</p>
            </div>

            <div className="flex items-center justify-center p-3 pr-12 mt-10 mr-6 bg-white rounded-lg shadow-sm hover:shadow-lg">
              <span className="pt-2 pb-2 pl-2 pr-2 text-center bg-pink-100 rounded-xl">
                Icon
              </span>
              <p className="ml-2 text-lg font-semibold">SCSS</p>
            </div>

            <div className="flex items-center justify-center p-3 pr-12 mt-10 mr-6 bg-white rounded-lg shadow-sm hover:shadow-lg">
              <span className="pt-2 pb-2 pl-2 pr-2 text-center bg-pink-100 rounded-xl">
                Icon
              </span>
              <p className="ml-2 text-lg font-semibold">Jquery</p>
            </div>

            <div className="flex items-center justify-center p-3 pr-12 mt-10 mr-6 bg-white rounded-lg shadow-sm hover:shadow-lg">
              <span className="pt-2 pb-2 pl-2 pr-2 text-center bg-pink-100 rounded-xl">
                Icon
              </span>
              <p className="ml-2 text-lg font-semibold">Elementor</p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-20">
        <h1 className="mt-8 text-4xl font-bold leading-normal text-center text-gray-800 lg:mt-0">
          Client Success
        </h1>

        <div className="mx-3 mt-28 lg:mx-72 bg-gray-50">
          <div
            className={` ${
              click === 1 ? 'block' : 'hidden'
            } flex flex-col lg:flex-row`}
          >
            <div className="w-full lg:w-3/5">
              <Image
                src="/images/feeback.jpeg"
                alt=""
                width="250"
                height="150"
              />
            </div>
            <div className="w-full p-8 border-2 border-gray-100 lg:w-2/5 ">
              <h1 className="text-2xl font-semibold font-fira">Jhon Mack</h1>
              <p className="text-gray-600 font-fira">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                totam suscipit quod impedit unde nisi culpa quos voluptates, ad,
                repudiandae dolore! Mollitia doloribus.impedit unde
              </p>
            </div>
          </div>
          {/* 2nd */}
          <div
            className={` ${
              click === 2 ? 'block' : 'hidden'
            } flex flex-col lg:flex-row`}
          >
            <div className="w-full lg:w-3/5">
              <Image
                src="/images/feeback.jpeg"
                alt=""
                width="250"
                height="150"
              />
            </div>
            <div className="w-full p-8 border-2 border-gray-100 lg:w-2/5">
              <h1 className="text-2xl font-semibold font-fira">Mic B</h1>
              <p className="text-gray-600 font-fira">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                totam suscipit quod impedit unde nisi culpa quos voluptates, ad,
                repudiandae dolore! Mollitia doloribus.
              </p>
            </div>
          </div>
          {/* 3rd */}
          <div
            className={` ${
              click === 3 ? 'block' : 'hidden'
            } flex flex-col lg:flex-row`}
          >
            <div className="w-full lg:w-3/5">
              <Image
                src="/images/feeback.jpeg"
                alt=""
                width="250"
                height="150"
              />
            </div>
            <div className="w-full p-8 border-2 border-gray-100 lg:w-2/5">
              <h1 className="text-2xl font-semibold font-fira">Riya</h1>
              <p className="text-gray-600 font-fira">
                Lorem ipsum dolor impedit unde sit amet consectetur adipisicing
                elit. Ipsum totam suscipit quod impedit unde nisi culpa quos
                voluptates, ad, repudiandae impedit unde
              </p>
            </div>
          </div>
          {/* 4th */}
          <div
            className={` ${
              click === 4 ? 'block' : 'hidden'
            } flex flex-col lg:flex-row`}
          >
            <div className="w-full lg:w-3/5">
              <Image
                src="/images/feeback.jpeg"
                alt=""
                width="250"
                height="150"
              />
            </div>
            <div className="w-full p-8 border-2 border-gray-100 lg:w-2/5">
              <h1 className="text-2xl font-semibold font-fira">Dany</h1>
              <p className="text-gray-600 font-fira">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                totam suscipit culpa quos voluptates, ad, repudiandae dolore!
                Mollitia doloribus.
              </p>
            </div>
          </div>
          {/* 5th */}
          <div
            className={` ${
              click === 5 ? 'block' : 'hidden'
            } flex flex-col lg:flex-row`}
          >
            <div className="w-full lg:w-3/5">
              <Image
                src="/images/feeback.jpeg"
                alt=""
                width="250"
                height="150"
              />
            </div>
            <div className="w-full p-8 border-2 border-gray-100 lg:w-2/5">
              <h1 className="text-2xl font-semibold font-fira">Thomas</h1>
              <p className="text-gray-600 font-fira">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                totam suscipit quod impedit unde nisi culpa quos voluptates, ad,
                repudiandae dolore! Mollitia doloribus. impedit unde
              </p>
            </div>
          </div>
          {/* 6th */}
          <div
            className={` ${
              click === 6 ? 'block' : 'hidden'
            } flex flex-col lg:flex-row`}
          >
            <div className="w-full lg:w-3/5">
              <Image
                src="/images/feeback.jpeg"
                alt=""
                width="250"
                height="150"
              />
            </div>
            <div className="w-full p-8 border-2 border-gray-100 lg:w-2/5">
              <h1 className="text-2xl font-semibold font-fira">Showan</h1>
              <p className="text-gray-600 font-fira">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                totam suscipit quod impedit culpa quos voluptates, ad,
                repudiandae dolore! Mollitia doloribus.
              </p>
            </div>
          </div>

          <div className="flex">
            <div
              className={` ${
                click === 1
                  ? 'border-b-4 border-blue-600 border-l-0 border-r-0 border-t-0'
                  : ''
              }  w-1/6  cursor-pointer`}
              onClick={() => setclick(1)}
            >
              <Image
                src="images/feeback.jpeg"
                alt=""
                width="250"
                height="150"
              />
            </div>
            <div
              className={` ${
                click === 2
                  ? 'border-b-4 border-blue-600 border-l-0 border-r-0 border-t-0'
                  : ''
              } w-1/6  cursor-pointer `}
              onClick={() => setclick(2)}
            >
              <Image
                src="/images/feeback.jpeg"
                alt=""
                width="250"
                height="150"
              />
            </div>
            <div
              className={` ${
                click === 3
                  ? 'border-b-4 border-blue-600 border-l-0 border-r-0 border-t-0'
                  : ''
              } w-1/6  cursor-pointer `}
              onClick={() => setclick(3)}
            >
              <Image
                src="/images/feeback.jpeg"
                alt=""
                width="250"
                height="150"
              />
            </div>
            <div
              className={` ${
                click === 4
                  ? 'border-b-4 border-blue-600 border-l-0 border-r-0 border-t-0'
                  : ''
              } w-1/6  cursor-pointer `}
              onClick={() => setclick(4)}
            >
              <Image
                src="/images/feeback.jpeg"
                alt=""
                width="250"
                height="150"
              />
            </div>
            <div
              className={` ${
                click === 5
                  ? 'border-b-4 border-blue-600 border-l-0 border-r-0 border-t-0'
                  : ''
              } w-1/6  cursor-pointer `}
              onClick={() => setclick(5)}
            >
              <Image
                src="/images/feeback.jpeg"
                alt=""
                width="250"
                height="150"
              />
            </div>
            <div
              className={` ${
                click === 6
                  ? 'border-b-4 border-blue-600 border-l-0 border-r-0 border-t-0'
                  : ''
              } w-1/6  cursor-pointer `}
              onClick={() => setclick(6)}
            >
              <Image
                src="/images/feeback.jpeg"
                alt=""
                width="250"
                height="150"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
