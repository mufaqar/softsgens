import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/footer';
import Image from 'next/image';
import Header from '../components/header'

export default function ContactMe() {
  return (
    <>

      <Head>
        <title>Contact Us | SoftGens </title>
        <meta name="description" content="Contact Us" />
      </Head>

      <Header
        title="Contact Us"
        content="We are a one-stop shop for businesses big and small. From building, to designing, to analyzing and improving, we are always ready to make your company website smarter."
        lottifyURL="https://assets5.lottiefiles.com/private_files/lf30_o0calpsv.json"
        lottifyWidth="1000px"
        lottifyheight="500px"
      />

      <div className="container mx-auto mt-48 mb-28">
        <div className="flex flex-col justify-between text-black md:flex-row ">
          <div className="flex flex-col justify-between space-y-8">
            <div>
              <h1 className="text-4xl font-bold tracking-wide">Contact Us</h1>
              <p className="pt-2 text-sm text-gray-400">For all your non-existant company needs Fake Corp are <br/>here to help, do not hesitate to contact us!</p>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="inline-flex items-center space-x-2 w-60">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span>+111 345 214 213</span>
              </div>
              <div className="inline-flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span>hello@fakecorp.com</span>
              </div>
              <div className="inline-flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>111 Fake Boulevard, Fakesville, FYC</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
              <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute z-0 w-40 h-40 bg-indigo-400 rounded-full -right-28 -top-28"></div>
            <div className="absolute z-0 w-40 h-40 bg-indigo-400 rounded-full -left-28 -bottom-16"></div>
            <div className="relative z-10 p-8 text-gray-600 bg-white shadow-lg rounded-xl md:w-[560px]">
              <form className="flex flex-col space-y-4" action="">
                <div>
                  <label className="text-sm">Name</label>
                  <input type="text"
                    placeholder="Name"
                    className="w-full px-4 py-2 mt-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-300" />
                </div>
                <div>
                  <label className="text-sm">Email</label>
                  <input type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 mt-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-300" />
                </div>
                <div>
                  <label className="text-sm">Message</label>
                  <textarea placeholder="Message"
                    rows="4"
                    className="w-full px-4 py-2 mt-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-300"></textarea>
                </div>
                <button className="self-end inline-block px-6 py-4 text-sm font-bold text-white uppercase bg-indigo-600 rounded-lg">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
