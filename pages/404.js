import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';
import { HiArrowRight } from 'react-icons/hi';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | SoftGens</title>
        <meta name="description" content="The page you are looking for does not exist. Return to SoftGens homepage." />
      </Head>

      <Header
        title="Page Not Found"
        content="The page you are looking for doesn't exist or has been moved."
        lottifyURL="https://assets1.lottiefiles.com/packages/lf20_uhoBnYFtuw.json"
        lottifyWidth="1000px"
        lottifyheight="500px"
        button={false}
      />

      <section className="py-28 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <span className="text-8xl font-bold text-primary opacity-20 block mb-6">404</span>
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Oops! Page Not Found</h1>
          <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
            The page you were looking for doesn&apos;t exist, has been moved, or is temporarily unavailable.
          </p>
          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-10 py-4 text-lg font-semibold text-white bg-primary rounded-full hover:opacity-90 transition-all duration-300 shadow-lg"
          >
            <span>Back to Home</span>
            <HiArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
