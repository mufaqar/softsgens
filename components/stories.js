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
                src="/images/feedback/jay1.jpg"
                alt=""
                width="850"
                height="450"
              />
            </div>
            <div className="w-full p-8 border-2 border-gray-100 lg:w-2/5 ">
              <h1 className="text-2xl font-semibold font-fira">
                Jay Johnson (UK)
              </h1>
              <p className="text-gray-600 font-fira">
                Mufaqar is a pleasure to work with. He is committed to his work.
                He is also very patient and will tweak it until one gets the
                desired results. I will recommend him any day.
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
                src="/images/placeholder.jpg"
                alt=""
                width="850"
                height="450"
              />
            </div>
            <div className="w-full p-8 border-2 border-gray-100 lg:w-2/5">
              <h1 className="text-2xl font-semibold font-fira">
                Brandions GmbH ( Germany ){' '}
              </h1>
              <p className="text-gray-600 font-fira">
                It was the first time we have worked with Mufaqar. He did
                everything to our full satisfaction and was strong in
                communicating with us. We can highly recommend working with him
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
                src="/images/placeholder.jpg"
                alt=""
                width="850"
                height="450"
              />
            </div>
            <div className="w-full p-8 border-2 border-gray-100 lg:w-2/5">
              <h1 className="text-2xl font-semibold font-fira">Eva Fischer</h1>
              <p className="text-gray-600 font-fira">
                Thank you so much! Big help, great job, everything is working
                now! Mufaqar really knows what to do, could explain in clear
                marked screenshots where I can help myself in future, and he did
                more than I had expected! I am happy having found a wunderful
                support for all future questions and tasks.
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
                src="/images/placeholder.jpg"
                alt=""
                width="850"
                height="450"
              />
            </div>
            <div className="w-full p-8 border-2 border-gray-100 lg:w-2/5">
              <h1 className="text-2xl font-semibold font-fira">Dany</h1>
              <p className="text-gray-600 font-fira">
                Mufaqar finished the work, as he always does, successfully! He
                needs to improve his communication throughout the job. If there
                is confusion about something, he must ask questions to make sure
                both people are on the same page before starting the task.
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
                src="/images/placeholder.jpg"
                alt=""
                width="850"
                height="450"
              />
            </div>
            <div className="w-full p-8 border-2 border-gray-100 lg:w-2/5">
              <h1 className="text-2xl font-semibold font-fira">breekeenan</h1>
              <p className="text-gray-600 font-fira">
                I’ve used Mufaqar multiple times for different websites and they
                are all amazing. They are professional, high end, stylish
                websites every time.
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
                src="/images/placeholder.jpg"
                alt=""
                width="850"
                height="450"
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
                src="/images/feedback/jay.png"
                alt=""
                width="250"
                height="141"
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
                src="/images/feedback/client2.png"
                alt=""
                width="250"
                height="141"
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
                src="/images/feedback/client3.png"
                alt=""
                width="250"
                height="141"
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
                src="/images/feedback/client3.png"
                alt=""
                width="250"
                height="141"
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
                src="/images/feedback/client3.png"
                alt=""
                width="250"
                height="141"
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
                src="/images/feedback/client3.png"
                alt=""
                width="250"
                height="141"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
