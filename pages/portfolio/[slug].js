import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/header';
import { useRouter } from 'next/router';
import { Categories } from '../../data_files/portfolioData';
import Footer from '../../components/footer';

export default function SingleWork() {
  const router = useRouter();
  const { slug } = router.query;

  const allWorks = Categories.flatMap(category => category.works);
  const res = allWorks.find(work => work.slug === slug);

  if (!res) {
    if (router.isReady) {
    }
    return <section className='md:py-[12.5rem] py-20'>
      <div className='container mx-auto px-4'>
        <p className='md:text-2xl text-base text-title_color mb-9 text-center'>
          This page could not be found.
        </p>
      </div>
    </section>;
  }
  return (
    <>
      <Head>
        <title>Portfolio | SoftGens </title>
        <meta name="description" content="Portfolio" />
      </Head>

      <Header
        title={res?.title}
        button={false}
        content={res?.shortinfo}
        lottifyURL="https://assets1.lottiefiles.com/packages/lf20_uhoBnYFtuw.json"
        lottifyWidth="1000px"
        lottifyheight="500px"
      />

      <section className="py-12 my-20 px-8">
        <div className="md:max-w-[1140px] mx-auto flex md:flex-row flex-col ">
          <div className="md:w-1/2 w-full md:p-7 p-4">
            <h2 className="md:text-5xl text-4xl leading-7 font-bold tracking-wide mb-5">
              The Challenge
            </h2>
            <p className="text-xl text-slate-500 mb-5">
              As a web developer, the task is to modernize {res?.title}&apos;s aging web platform in just six months. The primary objectives include enhancing user experience, ensuring mobile responsiveness, optimizing performance, improving security, implementing
            </p>
            <p className="text-xl text-slate-500 mb-5">
              SEO strategies, ensuring scalability, developing a user-friendly content management system, integrating third-party tools, conducting thorough testing, and providing comprehensive documentation.
            </p>
            <div className="mb-8">
              <p className="text-sm text-slate-700 font-bold">VISIT</p>
              <a href={res?.link} target="_blank" passHref>
                <span className="underline hover:no-underline text-xl text-slate-700 font-bold">
                  {res?.link}
                </span>
              </a>
            </div>
            <div>
              <p className="text-sm text-slate-700 font-bold">SERVICES</p>
              <ul>
                {res?.features?.map((itm, idx) => (
                  <li key={idx}>
                    <span className="text-xl text-slate-700 font-bold">
                      {itm?.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:w-1/2 w-full relative h-screen">
            {res?.gallery.slice(1, 2).map((item, id) => {
              return <Image key={id}
                src={item?.img}
                alt="img"
                width={550}
                height={750}
                className="md:ml-auto md:mr-0"
              />
            })}

          </div>
        </div>
      </section>

      <section className="py-12 px-8 relative w-[95%] mx-auto rounded-3xl">
        <div className="container px-4 mx-auto">
          {res?.gallery.slice(0, 1).map((item, id) => {
            return <Image key={id}
              src={item?.img}
              alt="img"
              width={1920}
              height={768}
              className="mx-auto" />
          })}
        </div>
      </section>

      <section className="py-12 px-8 relative bg-gray-50">
        <div className="container px-4 mx-auto grid md:grid-cols-3 grid-cols-1 gap-5">
          {res?.gallery.slice(1).map((item, id) => {
            return <Image key={id}
              src={item?.img}
              alt="img"
              width={550}
              height={750}
              className="mx-auto" />
          })}
        </div>
      </section>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const allWorks = Categories.flatMap(category => category.works);
  const paths = allWorks.map((work) => ({
    params: { slug: work.slug },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const allWorks = Categories.flatMap(category => category.works);
  const project = allWorks.find((work) => work.slug === params.slug);
  return {
    props: {
      project: project || null,
    },
  };
}
