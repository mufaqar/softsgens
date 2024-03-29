import Head from 'next/head';
import Footer from '../components/footer';
import Header from '../components/header';
import ServicesCard from '../components/Services-card';

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | SoftGens</title>
        <meta name="description" content="Services" />
      </Head>
      {/* <Menu /> */}

      <Header
        title="Offering Digital Solutions to Amazing People"
        content="We are a one-stop shop for businesses big and small. From building, to designing, to analyzing and improving, we are always ready to make your company website smarter."
        lottifyURL="https://assets10.lottiefiles.com/packages/lf20_bklapohq.json"
        lottifyWidth="1000px"
        lottifyheight="500px"
        button={true}
      />

      <ServicesCard />

      {/* <ContactUs /> */}
      <Footer />
    </>
  );
}
