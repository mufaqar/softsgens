import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <div className="bg-hero">
        <div className="container flex  items-center justify-between px-4 lg:px-0 py-44  mx-auto flex-col-reverse lg:flex-row static overflow-hidden">
          <div className="w-full mt-10 lg:w-1/2 lg:mr-0">
            <h2 className="p-2 text-4xl font-extrabold leading-tight text-gray-900 lg:text-5xl font-fira">
              Impacting Industry
              <br /> Leaders with Softgens
            </h2>
            <p className="p-2 mt-4 text-lg text-gray-700 font-fira lg:pr-20 ">
              We deliver web development, Custome Development services to global
              businesses since 2012, with 100% project delivery success. Hire
              the best programmers at affordable prices. Our design-focused
              approach and project execution processes help you to deliver the
              right solutions.
            </p>
            <div className="flex p-2 mt-6 lg:p-0">
              <Link href="/contact">
                <a className="p-4 text-white font-semibold uppercase rounded-full pl-7 pr-7 hover:text-black bg-gradient-to-l from-blue-300 to-blue-500">
                  Start A project
                </a>
              </Link>
              <Link href="/contact">
                <a className="p-4 ml-6 text-gray-800 uppercase border-2 border-gray-800 rounded-full pl-7 pr-7 hover:bg-gradient-to-l from-blue-300 to-blue-500">
                  View portfolio
                </a>
              </Link>
            </div>
          </div>
          <Image
            alt="moto"
            src="/images/heroimg.png"
            className="lg:absolute md:block right-0"
            width="765"
            height="558"
          />
        </div>
      </div>
    </>
  );
}
