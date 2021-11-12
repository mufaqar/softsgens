import React from 'react';

export default function ContactUs() {
  return (
    <>
      <section className="relative z-[-10] text-gray-600 h-[750px] body-font contact-img"></section>
      <div className="lg:w-[70%] flex flex-col lg:flex-row justify-center mx-auto mt-[-550px] z-10 mb-24">
        <div className="px-8 py-10 m-6 bg-white border-2 border-gray-100 rounded-md lg:m-0">
          <form action="" className="">
            <h1 className="mx-auto mb-6 text-3xl font-bold">
              Tell us about your project.
            </h1>
            <div className="flex flex-wrap w-[380px]">
              <span className="px-3 py-1 mt-3 mr-2 text-lg font-medium text-blue-700 bg-blue-100 rounded-full">
                Web Development
              </span>
              <span className="px-3 py-1 mt-3 mr-2 text-lg font-medium text-blue-700 bg-blue-100 rounded-full">
                Next js
              </span>
              <span className="px-3 py-1 mt-3 mr-2 text-lg font-medium text-blue-700 bg-blue-100 rounded-full">
                Wordpress
              </span>
              <span className="px-3 py-1 mt-3 mr-2 text-lg font-medium text-blue-700 bg-blue-100 rounded-full">
                Online Store
              </span>
              <span className="px-3 py-1 mt-3 mr-2 text-lg font-medium text-blue-700 bg-blue-100 rounded-full">
                Branding
              </span>
            </div>
            <div className="flex flex-col  mt-8">
              <input
                type="text"
                name="your-name"
                id=""
                placeholder="Your Name"
                className="outline-none rounded placeholder-gray-500 bg-transparent border-[1px] border-gray-300 px-[10px] py-[10px] "
              />
            </div>
            <div className="flex flex-col mt-[6px]">
              <input
                type="text"
                name="name"
                id=""
                placeholder="Email*"
                className="outline-none rounded bg-transparent placeholder-gray-500 border-[1px] border-gray-300 w-full px-[10px] py-[10px] mt-1"
              />
              <input
                type="text"
                name="phone"
                id=""
                placeholder="Phone Number"
                className="outline-none rounded bg-transparent placeholder-gray-500 border-[1px] border-gray-300 w-full px-[10px] py-[10px] mt-2"
              />
              <input
                type="text"
                name="name"
                id=""
                placeholder="Company Name"
                className="outline-none rounded bg-transparent placeholder-gray-500 border-[1px] border-gray-300 w-full px-[10px] py-[10px] mt-2"
              />

              <textarea
                name=""
                id=""
                cols="10"
                rows="4"
                placeholder="Tell us about your project (Scope, timeline, budget, etc.)"
                className="outline-none rounded bg-transparent placeholder-gray-500 border-[1px] border-gray-300 w-full px-[10px] py-[10px] mt-2"
              ></textarea>

              <div className="flex justify-end">
                <input
                  type="submit"
                  value="Submit"
                  className="w-24 p-3 mt-4 font-semibold text-white bg-blue-500 rounded hover:bg-blue-400"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center pt-6 text-center lg:py-16">
          <div className="bg-blue-500 w-[400px] p-8 py-20 text-white rounded-tl-none rounded-tr-md rounded-bl-none rounded-br-md">
            <h1 className="mb-8 text-2xl font-semibold text-left ">
              What Happened Next
            </h1>
            <div className="flex text-left">
              <div>
                <span className="items-center p-4 py-[10px] mr-3 font-semibold text-center bg-blue-400 rounded-full max-w-3">
                  1
                </span>
              </div>
              <p className="font-medium text-gray-100 tex-left ">
                Get in touch <br /> Call or email us and we’ll organise an
                initial chat to see if we’re a good fit.
              </p>
            </div>

            <div className="flex mt-5 text-left">
              <div>
                <span className="items-center p-4 py-[10px] font-semibold mr-3 text-center bg-blue-400 rounded-full max-w-3">
                  2
                </span>
              </div>
              <p className="font-medium text-gray-100 tex-left ">
                Goals & Aspirations <br />
                Why do you need a new website and what return do you expect from
                your investment?
              </p>
            </div>

            <div className="flex mt-5 text-left">
              <div>
                <span className="items-center font-semibold p-4 py-[10px] mr-3 text-center bg-blue-400 rounded-full max-w-3">
                  3
                </span>
              </div>
              <p className="font-medium text-gray-100 tex-left ">
                Agree a plan <br />
                We can write it together, or respond to your brief – we’ll work
                around your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
