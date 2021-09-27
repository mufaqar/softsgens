import Link from 'next/link';
import Image from 'next/image';
import brandImg from '../public/images/brand.png';

export default function Clients() {
  return (
    <>
      <div className="container flex flex-col items-center min-h-screen p-2 mx-auto lg:flex-row lg:p-0">
        <div className="w-full lg:w-1/2">
          <h2 className="mt-8 text-4xl font-bold text-gray-800 lg:mt-0">
            A Family Run-Agency
            <br /> Your Trusted Digital Partner
          </h2>
          <p className="mt-8 mb-6 text-lg font-fira">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vitae
            harum libero obcaecati praesentium. Harum aspernatur et atque quam
            aut, dignissimos totam fugit, deleniti eaque beatae provident qui
            consequatur quod. Veritatis velit iusto aliquid asperiores?
          </p>
          <Link href="/" className="">
            <a className="text-base font-semibold text-blue-600 uppercase">
              See What We do
            </a>
          </Link>
          <div className="flex justify-center mt-5 lg:justify-start">
            <div className="flex flex-col items-center justify-center mt-4 mr-8 lg:mr-20">
              <h3 className="text-3xl font-semibold text-blue-500 lg:text-5xl">
                250+
              </h3>
              <span className="items-center mt-3 text-xs font-medium text-gray-500 uppercase whitespace-nowrap">
                Client Satisfied
              </span>
            </div>
            <div className="flex flex-col items-center justify-center mt-4 mr-8 m lg:mr-20">
              <h3 className="text-3xl font-semibold text-blue-500 lg:text-5xl">
                11
              </h3>
              <span className="items-center mt-3 text-xs font-medium text-gray-500 uppercase whitespace-nowrap">
                years of experiance
              </span>
            </div>
            <div className="flex flex-col items-center justify-center mt-4 mr-8 lg:mr-20">
              <h3 className="text-3xl font-semibold text-blue-500 lg:text-5xl">
                600+
              </h3>
              <span className="items-center mt-3 text-xs font-medium text-gray-500 uppercase whitespace-nowrap">
                Projects build
              </span>
            </div>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 grid items-center justify-end w-full grid-cols-4 gap-1.5 p-3 lg:p-10 gap-y-0 item-center grid-row-3 lg:w-1/2 ">
          <div>
            <Image src={brandImg} />
          </div>
          <div>
            <Image src={brandImg} />
          </div>
          <div>
            <Image src={brandImg} />
          </div>

          <div></div>
          <div>
            <Image src={brandImg} />
          </div>
          <div>
            <Image src={brandImg} />
          </div>
          <div>
            <Image src={brandImg} />
          </div>
          <div>
            <Image src={brandImg} />
          </div>
          <div></div>
          <div>
            <Image src={brandImg} />
          </div>
          <div>
            <Image src={brandImg} />
          </div>
          <div>
            <Image src={brandImg} />
          </div>
        </div>
      </div>
    </>
  );
}
