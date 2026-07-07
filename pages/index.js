import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import Clients from '../components/clients';
import Service from '../components/service';
import AboutUs from '../components/aboutUs';


export default function Home() {
  return (
    <>
      <Head>
        <title>SoftGens | Digital Agency - Web Development, WordPress, React & UGC Ads</title>
        <meta name="description" content="SoftGens is a digital agency specializing in web development, WordPress, React & Next.js, UGC video ads, and digital marketing. We build modern, high-performance websites and ad creatives that grow your business." />
      </Head>
      <Header 
        title="A digital agency focused on web"
        content="We are a one-stop shop for businesses big and small. From building, to designing, to analyzing and improving, we are always ready to make your company website smarter."
        lottifyURL="https://assets8.lottiefiles.com/packages/lf20_dl87KC.json"
        lottifyWidth="400px"
        lottifyheight="300px"
        button={true}
      />
      <Service/>
      <AboutUs/>
      <Clients />
      <Footer />
    </>
  );
}
