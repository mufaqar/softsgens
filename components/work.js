import Image from 'next/image';
function Work() {
  return (
    <>
      <div className="bg-blue-500">
        <div className="relative flex items-center max-w-screen-xl min-h-screen p-4 px-4 mx-auto dark:bg-gray-800 sm:px-6 lg:px-8 lg:pt-12">
          <div className="relative">
            <div className="flex flex-col lg:flex-row">
              <div className="pt-10 ml-auto lg:pt-48 lg:col-start-2 lg:max-w-2xl lg:pl-10 lg:pr-32">
                <p className="text-base font-semibold leading-6 text-gray-200 uppercase">
                  Success Stories
                </p>
                <h4 className="mt-2 text-2xl font-extrabold leading-8 text-white font-fira dark:text-white sm:text-3xl sm:leading-9">
                  Our Work
                </h4>
                <p className="mt-4 text-lg leading-6 text-white dark:text-gray-300 font-fira">
                  Build a simply and powered collaborative space for all your
                  team. Track, share, measure, you have a fully control,
                  it&#x27;s never be simply and efficient.
                </p>
                <ul className="gap-6 mt-8 md:grid md:grid-cols-2">
                  <li className="mt-6 lg:mt-0">
                    <div className="flex">
                      <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <span className="ml-4 text-base font-medium leading-6 text-black dark:text-gray-200">
                        Live modifications
                      </span>
                    </div>
                  </li>
                  <li className="mt-6 lg:mt-0">
                    <div className="flex">
                      <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <span className="ml-4 text-base font-medium leading-6 text-black dark:text-gray-200">
                        Data tracker
                      </span>
                    </div>
                  </li>
                  <li className="mt-6 lg:mt-0">
                    <div className="flex">
                      <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <span className="ml-4 text-base font-medium leading-6 text-black dark:text-gray-200">
                        24/24 support
                      </span>
                    </div>
                  </li>
                  <li className="mt-6 lg:mt-0">
                    <div className="flex">
                      <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <span className="ml-4 text-base font-medium leading-6 text-black dark:text-gray-200 whitespace-nowrap">
                        Free tips to improve work time
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
                <div className="relative space-y-4">
                  <div className="flex flex-col items-center justify-start lg:flex-row lg:justify-start lg:space-x-4 ">
                    {/* 1 */}

                    <div className="pt-0 mb-3 lg:pt-20 ">
                      <div className="relative w-full m-auto rounded-lg shadow-lg cursor-pointer h-90 lg:w-72 md:w-80">
                        <a href="#" className="block w-full h-full">
                          <Image
                            alt="blog photo"
                            src="/images/testimonail.jpeg"
                            className="object-cover w-full rounded-t-lg max-h-40"
                            width="400"
                            height="300"
                          />
                          <div className="w-full p-4 bg-white dark:bg-gray-800">
                            <p className="font-medium text-indigo-500 text-md">
                              Article
                            </p>
                            <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                              Supercharged !
                            </p>
                            <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                              The new supercar is here, 543 cv and 140 000$.
                              This is best racing GT about 7 years on...
                            </p>
                            <div className="flex items-center mt-4">
                              <a
                                href="#"
                                className="absolute block top-[-40px] right-[20px] z-20"
                              >
                                <Image
                                  alt="profil"
                                  src="/images/testimonail.jpeg"
                                  className="object-cover w-10 h-10 mx-auto rounded-full"
                                  width="75"
                                  height="75"
                                />
                              </a>
                              <div className="flex flex-col justify-between ml-4 text-sm">
                                <p className="text-gray-800 dark:text-white">
                                  Jean Jacques
                                </p>
                                <p className="text-gray-400 dark:text-gray-300">
                                  20 mars 2029 - 6 min read
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    {/* 2 */}
                    <div className="relative w-full pl-0 m-auto mt-10 ml-0 shadow-lg cursor-pointer lg:mt-0 h-90 lg:w-72 md:w-80 sm:mt-3">
                      <a href="#" className="block w-full h-full top:20">
                        <Image
                          alt="blog photo"
                          src="/images/testimonail.jpeg"
                          className="object-cover w-full rounded-t-lg max-h-40"
                          width="400"
                          height="300"
                        />
                        <div className="w-full p-4 bg-white dark:bg-gray-800">
                          <p className="font-medium text-indigo-500 text-md">
                            Article
                          </p>
                          <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                            Supercharged !
                          </p>
                          <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                            The new supercar is here, 543 cv and 140 000$. This
                            is best racing GT about 7 years on...
                          </p>
                          <div className="flex items-center mt-4">
                            <a
                              href="#"
                              className="absolute block top-[-30px] right-[55px] z-20"
                            >
                              <Image
                                alt="profil"
                                src="/images/testimonail.jpeg"
                                className="object-cover w-10 h-10 mx-auto rounded-full "
                                width="75"
                                height="75"
                              />
                            </a>
                            <div className="flex flex-col justify-between ml-4 text-sm">
                              <p className="text-gray-800 dark:text-white">
                                Jean Jacques
                              </p>
                              <p className="text-gray-400 dark:text-gray-300">
                                20 mars 2029 - 6 min read
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-center space-x-4 lg:flex-row lg:justify-start">
                    {/* 3 */}
                    <div className="relative w-full m-auto mt-10 rounded-lg shadow-lg cursor-pointer h-90 lg:w-72 md:w-80">
                      <a href="#" className="block w-full h-full">
                        <Image
                          alt="blog photo"
                          src="/images/testimonail.jpeg"
                          className="object-cover w-full rounded-t-lg max-h-40"
                          width="400"
                          height="300"
                        />
                        <div className="w-full p-4 bg-white dark:bg-gray-800">
                          <p className="font-medium text-indigo-500 text-md">
                            Article
                          </p>
                          <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                            Supercharged !
                          </p>
                          <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                            The new supercar is here, 543 cv and 140 000$. This
                            is best racing GT about 7 years on...
                          </p>
                          <div className="flex items-center mt-4">
                            <a
                              href="#"
                              className="absolute block top-[-40px] right-[20px] z-20"
                            >
                              <Image
                                alt="profil"
                                src="/images/testimonail.jpeg"
                                className="object-cover w-10 h-10 mx-auto rounded-full"
                                width="75"
                                height="75"
                              />
                            </a>
                            <div className="flex flex-col justify-between ml-4 text-sm">
                              <p className="text-gray-800 dark:text-white">
                                Jean Jacques
                              </p>
                              <p className="text-gray-400 dark:text-gray-300">
                                20 mars 2029 - 6 min read
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>

                    {/* 4th */}
                    <div className="relative lg:mt-[-35px] mt-16 w-full m-auto rounded-lg shadow-lg cursor-pointer h-90 lg:w-72 md:w-80">
                      <a href="#" className="block w-full h-full">
                        <Image
                          alt="blog photo"
                          src="/images/testimonail.jpeg"
                          className="object-cover w-full rounded-t-lg max-h-40"
                          width="400"
                          height="300"
                        />
                        <div className="w-full p-4 bg-white dark:bg-gray-800">
                          <p className="font-medium text-indigo-500 text-md">
                            Article
                          </p>
                          <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                            Supercharged !
                          </p>
                          <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                            The new supercar is here, 543 cv and 140 000$. This
                            is best racing GT about 7 years on...
                          </p>
                          <div className="flex items-center mt-4">
                            <a
                              href="#"
                              className="absolute block top-[-40px] right-[20px] z-20"
                            >
                              <Image
                                alt="profil"
                                src="/images/testimonail.jpeg"
                                className="object-cover w-10 h-10 mx-auto rounded-full"
                                width="75"
                                height="75"
                              />
                            </a>
                            <div className="flex flex-col justify-between ml-4 text-sm">
                              <p className="text-gray-800 dark:text-white">
                                Jean Jacques
                              </p>
                              <p className="text-gray-400 dark:text-gray-300">
                                20 mars 2029 - 6 min read
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    {/* 5th */}
                    <div className="relative mt-16 lg:absolute lg:left-[-320px] lg:mb-[60px] lg:mt-0 w-full m-auto rounded-lg shadow-lg cursor-pointer h-90 lg:w-72 md:w-80">
                      <a href="#" className="block w-full h-full">
                        <Image
                          alt="blog photo"
                          src="/images/testimonail.jpeg"
                          className="object-cover w-full rounded-t-lg max-h-40"
                          width="400"
                          height="300"
                        />
                        <div className="w-full p-4 bg-white dark:bg-gray-800">
                          <p className="font-medium text-indigo-500 text-md">
                            Article
                          </p>
                          <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                            Supercharged !
                          </p>
                          <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                            The new supercar is here, 543 cv and 140 000$. This
                            is best racing GT about 7 years on...
                          </p>
                          <div className="flex items-center mt-4">
                            <a
                              href="#"
                              className="absolute block top-[-40px] right-[20px] z-20"
                            >
                              <Image
                                alt="profil"
                                src="/images/testimonail.jpeg"
                                className="object-cover w-10 h-10 mx-auto rounded-full"
                                width="75"
                                height="75"
                              />
                            </a>
                            <div className="flex flex-col justify-between ml-4 text-sm">
                              <p className="text-gray-800 dark:text-white">
                                Jean Jacques
                              </p>
                              <p className="text-gray-400 dark:text-gray-300">
                                20 mars 2029 - 6 min read
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
