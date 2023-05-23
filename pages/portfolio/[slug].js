import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/header';
import { sanityClient } from '../../config/sanityClient';
import PortableText from 'react-portable-text';

export default function SingleWork({ project }) {
  console.log('🚀 ~ file: [slug].js:7 ~ SingleWork ~ data', project);
  return (
    <>
      <Head>
        <title>Portfolio | SoftGens </title>
        <meta name="description" content="Portfolio" />
      </Head>

      <Header
        title={project?.title}
        button={false}
        content={project?.shortinfo}
        lottifyURL="https://assets1.lottiefiles.com/packages/lf20_uhoBnYFtuw.json"
        lottifyWidth="1000px"
        lottifyheight="500px"
      />

      <section className="py-12 mt-20 px-8">
        <div className="md:max-w-[1140px] mx-auto flex md:flex-row flex-col ">
          <div className="md:w-1/2 w-full md:p-7 p-4">
            <h2 className="md:text-5xl text-4xl leading-7 font-bold tracking-wide mb-5">
              {project?.title}
            </h2>
            <p className="text-xl text-slate-500 mb-5">{project?.shortinfo}</p>

            <div className="mb-8">
              <p className="text-sm text-slate-700 font-bold">VISIT</p>
              <a href={project?.link} target="_blank" passHref>
                <span className="underline hover:no-underline text-xl text-slate-700 font-bold">
                  {project?.link}
                </span>
              </a>
            </div>
            <div>
              <p className="text-sm text-slate-700 font-bold">SERVICES</p>
              <ul>
                {project?.services.map((itm, idx) => (
                  <li key={idx}>
                    <a href="#" passHref>
                      <span className="underline hover:no-underline text-xl text-slate-700 font-bold">
                        {itm}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:w-1/2 w-full relative h-screen">
            <Image
              src={project?.mobile_view_image?.asset.url}
              alt=""
              className="rounded-3xl"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      <section className="py-12 px-8 relative w-[95%] h-screen mx-auto rounded-3xl">
        <Image
          src="/images/services.png"
          alt=""
          layout="fill"
          className="rounded-3xl"
          objectFit="cover"
        />
      </section>

      <section className="py-24 px-8">
        <div className="md:max-w-[1140px] mx-auto longinfo">
          <PortableText
            content={project?.content}
            serializers={{
              h1: (props) => (
                <h1
                  className="md:text-5xl text-4xl leading-7 font-bold tracking-wide mb-5"
                  {...props}
                />
              ),
              h2: (props) => (
                <h1
                  className="md:text-5xl text-4xl leading-7 font-bold tracking-wide mb-5"
                  {...props}
                />
              ),
              p: (props) => (
                <p className="text-xl text-slate-500 mb-5" {...props} />
              ),
              li: ({ children }) => (
                <li className="text-xl text-slate-700 font-bold">{children}</li>
              ),
            }}
          />
        </div>
      </section>

      <section className="py-12 px-8 relative w-[95%] mx-auto ">
        {project?.gallery.map((gal, idx) => (
          <img
            src={gal?.asset.url}
            alt=""
            className="w-full mb-10 rounded-3xl"
            key={idx}
          />
        ))}
      </section>
    </>
  );
}

const portfolioQuery = `*[_type == "portfolio" && slug.current == $slug][0]{
  title,
  shortinfo,
  link,
  slug,
  mobile_view_image{
    asset->{
      url
    }
  },
  content,
  services[],
  featureimage{
    asset->{
      url
    }
  },
  gallery[]{
    asset->{
      url
    }
  }
}`;

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(`
  *[_type == "portfolio" && defined(slug.current)]{
       "params": {
         "slug" : slug.current
       }
     }
  `);
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const project = await sanityClient.fetch(portfolioQuery, { slug });
  return {
    props: {
      project,
      preview: true,
    },
  };
}
