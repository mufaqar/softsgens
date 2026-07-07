import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { HiCheck, HiArrowRight, HiCode, HiShoppingCart, HiSearch, HiShieldCheck, HiDeviceMobile, HiCurrencyDollar, HiGlobe, HiChartBar, HiCog, HiUserGroup } from 'react-icons/hi';

const benefits = [
  { icon: <HiCode className="w-8 h-8 text-primary" />, title: 'Custom Themes', desc: 'Bespoke WordPress themes built to match your brand identity perfectly.' },
  { icon: <HiShoppingCart className="w-8 h-8 text-primary" />, title: 'WooCommerce Stores', desc: 'Full-featured online stores with secure payment gateways and inventory management.' },
  { icon: <HiSearch className="w-8 h-8 text-primary" />, title: 'SEO Optimized', desc: 'Search engine friendly architecture to help your content rank higher.' },
  { icon: <HiShieldCheck className="w-8 h-8 text-primary" />, title: 'Security First', desc: 'Hardened security practices to protect your site from vulnerabilities.' },
  { icon: <HiDeviceMobile className="w-8 h-8 text-primary" />, title: 'Fully Responsive', desc: 'Flawless experiences across desktop, tablet, and mobile devices.' },
  { icon: <HiCurrencyDollar className="w-8 h-8 text-primary" />, title: 'Cost Effective', desc: 'Affordable solutions without compromising on quality or performance.' },
];

const services = [
  { title: 'Custom Theme Development', desc: 'Unique WordPress themes tailored to your brand, built from scratch with clean, maintainable code.' },
  { title: 'Plugin Development', desc: 'Custom plugin creation to extend WordPress functionality exactly how your business needs it.' },
  { title: 'WooCommerce Setup', desc: 'Complete eCommerce solutions including product catalogs, carts, checkout, and payment integrations.' },
  { title: 'WordPress Maintenance', desc: 'Ongoing updates, backups, performance monitoring, and security patches to keep your site running smoothly.' },
  { title: 'SEO & Performance', desc: 'On-page SEO optimization, speed optimization, caching, and Core Web Vitals improvement.' },
  { title: 'Migration & Upgrades', desc: 'Seamless migration from other CMS platforms or WordPress version upgrades with zero downtime.' },
];

const process = [
  { step: '1', title: 'Discovery', desc: 'We analyze your business needs, goals, and target audience.' },
  { step: '2', title: 'Planning', desc: 'Site architecture, wireframes, and content strategy are mapped out.' },
  { step: '3', title: 'Design', desc: 'Custom UI/UX design crafted to align with your brand.' },
  { step: '4', title: 'Development', desc: 'Clean, optimized code with all requested functionality.' },
  { step: '5', title: 'Testing', desc: 'Rigorous QA across devices, browsers, and performance metrics.' },
  { step: '6', title: 'Launch', desc: 'Deployment with ongoing support and maintenance.' },
];

const whyItems = [
  '10+ Years WordPress Experience',
  'Clean & Maintainable Code',
  'SEO-First Approach',
  'Fast Turnaround Times',
  'Ongoing Support',
  'Client-Focused Process',
];

export default function WordPressServices() {
  return (
    <>
      <Head>
        <title>WordPress Services | SoftGens</title>
        <meta name="description" content="Professional WordPress development including custom themes, plugins, WooCommerce stores, SEO, and maintenance." />
      </Head>

      <Header
        title="WordPress Services"
        content="Custom WordPress Solutions — Themes, Plugins, WooCommerce & More"
        lottifyURL="https://assets1.lottiefiles.com/packages/lf20_uhoBnYFtuw.json"
        lottifyWidth="1000px"
        lottifyheight="500px"
        button={false}
      />

      <section className="py-24 px-4 bg-gradient-to-b from-white to-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            WordPress powers over 43% of all websites on the internet. At SoftsGens, we build powerful, SEO-optimized WordPress websites that are scalable, secure, and tailored to your business needs. From simple blogs to complex eCommerce platforms, we deliver WordPress solutions that perform.
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
            Whether you need a custom theme, a WooCommerce store, plugin development, or ongoing maintenance, our team has the expertise to bring your vision to life with clean code and modern best practices.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-10 py-4 text-lg font-semibold text-white bg-primary rounded-full hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Get a Free Quote</span>
            <HiArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="main-title mb-4">Why Choose WordPress?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">The world&apos;s most popular CMS — flexible, powerful, and built for growth.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center group">
                <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="main-title mb-4">Our WordPress Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">End-to-end WordPress solutions to grow your online presence.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-14 h-14 bg-primary bg-opacity-10 rounded-xl flex items-center justify-center mb-5">
                  <HiGlobe className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-primary text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Process</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">A proven workflow from concept to launch.</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {process.map((phase, i) => (
              <div key={i} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-opacity-20 transition-all duration-300 hover:-translate-y-2 relative">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{phase.step}</span>
                </div>
                <h3 className="font-bold text-white mb-2 text-lg">{phase.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <h2 className="main-title mb-4">Why SoftsGens?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">What makes us the right choice for your WordPress project.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {whyItems.map((item, i) => (
              <div key={i} className="flex items-center space-x-3 bg-secondary p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HiCheck className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="main-title mb-4">Perfect For</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Businesses that benefit most from our WordPress expertise.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {['Small Businesses', 'eCommerce Stores', 'Bloggers & Publishers', 'Corporate Websites', 'Non-Profits', 'Portfolio Sites', 'Membership Sites', 'Online Courses'].map((item, i) => (
              <span key={i} className="bg-primary text-white px-6 py-3 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-4 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto max-w-3xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Build Your WordPress Site?</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
            From concept to launch, we deliver WordPress solutions that help your business grow.
          </p>
          <p className="text-xl md:text-2xl mb-12 font-medium">Let&apos;s create a website that stands out.</p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-12 py-4 text-lg font-semibold text-primary bg-secondary rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Get Started Today</span>
            <HiArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
