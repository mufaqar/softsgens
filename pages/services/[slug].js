import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { ugcServices } from '../../data_files/ugcServices';
import { HiCheck, HiArrowRight } from 'react-icons/hi';

export default function ServiceDetail({ service }) {
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Service not found.</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{service.title} | SoftGens</title>
        <meta name="description" content={service.subtitle} />
      </Head>

      <Header
        title={service.title}
        content={service.subtitle}
        lottifyURL="https://assets1.lottiefiles.com/packages/lf20_uhoBnYFtuw.json"
        lottifyWidth="1000px"
        lottifyheight="500px"
        button={false}
      />

      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-6">
            <span className="text-6xl block mb-4">{service.emoji}</span>
            <h1 className="main-title mb-4">{service.title}</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{service.description}</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-primary text-center mb-10">Key Benefits</h2>
          <div className="grid md:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {service.benefits.map((benefit, i) => (
              <div key={i} className="flex items-center space-x-3 bg-white p-5 rounded-xl shadow-sm">
                <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HiCheck className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium text-gray-800">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-primary text-white p-10 rounded-3xl">
            <h2 className="text-2xl font-bold mb-4">Perfect For</h2>
            <p className="text-lg text-gray-300 leading-relaxed">{service.ideal}</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-primary mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 text-lg">Let&apos;s create something amazing together.</p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-10 py-4 text-lg font-semibold text-white bg-primary rounded-full hover:opacity-90 transition-all duration-300 shadow-lg"
          >
            <span>Contact Us</span>
            <HiArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const paths = ugcServices.map((svc) => ({
    params: { slug: svc.id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const service = ugcServices.find((svc) => svc.id === params.slug) || null;
  return { props: { service } };
}
