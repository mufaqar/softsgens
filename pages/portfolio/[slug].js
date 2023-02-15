import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/header";

export default function SingleWork() {
  return (
    <>
      <Head>
        <title>Portfolio | SoftGens </title>
        <meta name="description" content="Portfolio" />
      </Head>

      <Header
        title="Site Name"
        button={false}
        content="We are a one-stop shop for businesses big and small. From building, to designing, to analyzing and improving, we are always ready to make your company website smarter."
        lottifyURL="https://assets1.lottiefiles.com/packages/lf20_uhoBnYFtuw.json"
        lottifyWidth="1000px"
        lottifyheight="500px"
        />

      <section className="py-12 px-8 relative w-full ">
        <Image src="/images/a.png" alt="" layout="fill" objectFit="cover" />
      </section>

      <section className="py-12 px-8">
        <div className="md:max-w-[1140px] mx-auto flex md:flex-row flex-col ">
          <div className="md:w-1/2 w-full md:p-7 p-4">
            <h2 className="md:text-5xl text-4xl leading-7 font-bold tracking-wide mb-5">
              The Challenge
            </h2>
            <p className="text-xl text-slate-500 mb-5">
              Warburton Building Services is an Oxfordshire company specialising
              in installation and maintenance of mechanical & electrical
              services, and they approached Electric Studio needing a new easy
              to manage and up to date website.
            </p>
            <p className="text-xl text-slate-500 mb-5">
              With their old website not being mobile friendly and looking
              tired, they challenged Electric Studio to fully redesign and
              rebuild it.
            </p>
            <div className="mb-8">
              <p className="text-sm text-slate-700 font-bold">VISIT</p>
              <Link href="https://teddingtonlegal.com.au/">
                <span className="underline hover:no-underline text-xl text-slate-700 font-bold">
                  https://teddingtonlegal.com.au/
                </span>
              </Link>
            </div>
            <div>
              <p className="text-sm text-slate-700 font-bold">SERVICES</p>
              <ul>
                <li>
                  <Link href="#">
                    <span className="underline hover:no-underline text-xl text-slate-700 font-bold">
                      Web Design,
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="underline hover:no-underline text-xl text-slate-700 font-bold">
                      WordPress Development,
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="underline hover:no-underline text-xl text-slate-700 font-bold">
                      WordPress Hosting
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/2 w-full relative h-screen">
            <Image src="/images/services.png" alt="" layout="fill" objectFit="cover" />
          </div>
        </div>
      </section>

      <section className="py-12 px-8 relative w-[95%] h-screen mx-auto">
        <Image src="/images/services.png" alt="" layout="fill" objectFit="cover" />
      </section>

      <section className="py-24 px-8">
        <div className="md:max-w-[1140px] mx-auto">
          <h2 className="md:text-5xl text-4xl leading-7 font-bold tracking-wide mb-5">
            The Solution
          </h2>
          <p className="text-xl text-slate-500 mb-5">
            Warburton Building Services is an Oxfordshire company specialising
            in installation and maintenance of mechanical & electrical services,
            and they approached Electric Studio needing a new easy to manage and
            up to date website.
          </p>
          <p className="text-xl text-slate-500 mb-5">
            With their old website not being mobile friendly and looking tired,
            they challenged Electric Studio to fully redesign and rebuild it.
          </p>

          <div className="mb-7">
            <ul>
              <li>
                <p className="text-xl text-slate-700 font-bold">
                  Responsive Web Design
                </p>
              </li>
              <li>
                <p className="text-xl text-slate-700 font-bold">
                  Custom WordPress theme
                </p>
              </li>
              <li>
                <p className="text-xl text-slate-700 font-bold">
                  Technical SEO
                </p>
              </li>
              <li>
                <p className="text-xl text-slate-700 font-bold">
                  Optimised website admin
                </p>
              </li>
            </ul>
          </div>
          <p className="text-xl text-slate-500 mb-5">
            Ongoing services include WordPress Web Hosting and ongoing
            improvements.
          </p>
        </div>
      </section>

      <section className="py-12 px-8 relative w-[95%] h-screen mx-auto mb-10">
        <Image src="/images/services.png" alt="" layout="fill" objectFit="cover" />
      </section>

      <section className="py-12 px-8 relative w-[95%] h-screen mx-auto mb-14">
        <Image src="/images/services.png" alt="" layout="fill" objectFit="cover" />
      </section>
    </>
  );
}
