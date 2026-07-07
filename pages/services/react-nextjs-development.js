import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { HiCheck, HiArrowRight, HiLightningBolt, HiSearch, HiCode, HiServer, HiShieldCheck, HiDeviceMobile, HiChartBar, HiCube, HiEye, HiUserGroup } from 'react-icons/hi';

const benefits = [
  { icon: <HiLightningBolt className="w-8 h-8 text-primary" />, title: 'Blazing Fast Performance', desc: 'Static generation and server-side rendering deliver near-instant page loads.' },
  { icon: <HiSearch className="w-8 h-8 text-primary" />, title: 'SEO Optimized', desc: 'Server-rendered content ensures search engines can crawl and index your pages effectively.' },
  { icon: <HiCode className="w-8 h-8 text-primary" />, title: 'Modern Tech Stack', desc: 'Built with React, Next.js, Tailwind CSS, and the latest web technologies.' },
  { icon: <HiServer className="w-8 h-8 text-primary" />, title: 'Scalable Architecture', desc: 'Microservices, API routes, and serverless functions for effortless scaling.' },
  { icon: <HiShieldCheck className="w-8 h-8 text-primary" />, title: 'Type Safe', desc: 'Full TypeScript support for robust, maintainable, error-free code.' },
  { icon: <HiDeviceMobile className="w-8 h-8 text-primary" />, title: 'Responsive by Default', desc: 'Tailwind CSS utility-first approach ensures pixel-perfect responsive designs.' },
];

const services = [
  { title: 'Single Page Applications', desc: 'Fast, interactive SPAs built with React for seamless user experiences.' },
  { title: 'Next.js Full-Stack Apps', desc: 'End-to-end web applications with SSR, SSG, API routes, and middleware.' },
  { title: 'RESTful APIs & GraphQL', desc: 'Robust backend APIs using Next.js API routes, Express, or GraphQL with Apollo.' },
  { title: 'Headless CMS Integration', desc: 'Connect React frontends with Strapi, Sanity, Contentful, or custom backends.' },
  { title: 'Authentication & Authorization', desc: 'Secure user authentication with NextAuth.js, JWT, OAuth, and role-based access.' },
  { title: 'Database Design & Integration', desc: 'Prisma, MySQL, PostgreSQL, SQLite, and MongoDB integration for data-driven apps.' },
];

const process = [
  { step: '1', title: 'Requirements', desc: 'Understand your goals, audience, and technical requirements.' },
  { step: '2', title: 'Architecture', desc: 'Design the component tree, data flow, and API structure.' },
  { step: '3', title: 'UI/UX Design', desc: 'Create modern, intuitive interfaces using Tailwind CSS and Framer Motion.' },
  { step: '4', title: 'Development', desc: 'Build with clean, modular React components and best practices.' },
  { step: '5', title: 'Testing', desc: 'Comprehensive testing across functionality, performance, and accessibility.' },
  { step: '6', title: 'Deployment', desc: 'Deploy on Vercel, Netlify, or your preferred hosting with CI/CD pipelines.' },
];

const whyItems = [
  'Modern React & Next.js Expertise',
  'Tailwind CSS & Component Libraries',
  'Full-Stack Capabilities',
  'Performance Optimized',
  'Clean, Maintainable Code',
  'End-to-End Project Delivery',
];

export default function ReactNextjsDevelopment() {
  return (
    <>
      <Head>
        <title>React & Next.js Development | SoftGens</title>
        <meta name="description" content="Professional React and Next.js development services including SPAs, full-stack apps, APIs, and headless CMS integration." />
      </Head>

      <Header
        title="React & Next.js Development"
        content="Modern, High-Performance Web Applications Built with React, Next.js & Tailwind CSS"
        lottifyURL="https://assets1.lottiefiles.com/packages/lf20_uhoBnYFtuw.json"
        lottifyWidth="1000px"
        lottifyheight="500px"
        button={false}
      />

      <section className="py-24 px-4 bg-gradient-to-b from-white to-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            React and Next.js have revolutionized modern web development. At SoftsGens, we build fast, scalable, and SEO-friendly web applications using the JAMStack architecture. From single-page applications to full-stack platforms, our React expertise delivers exceptional user experiences.
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
            We combine Next.js server-side rendering, Tailwind CSS utility-first design, and modern tooling to create web applications that load instantly, rank higher in search, and scale effortlessly as your business grows.
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
            <h2 className="main-title mb-4">Why React & Next.js?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">The modern standard for building fast, scalable web applications.</p>
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
            <h2 className="main-title mb-4">Our Development Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">End-to-end React and Next.js solutions for your business.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-14 h-14 bg-primary bg-opacity-10 rounded-xl flex items-center justify-center mb-5">
                  <HiCube className="w-7 h-7 text-primary" />
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
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">A proven workflow from concept to deployment.</p>
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
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">What makes us the right partner for your React project.</p>
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
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Projects that benefit most from React and Next.js.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {['Startups & SaaS', 'eCommerce Platforms', 'Content-Rich Sites', 'Dashboards & Admin Panels', 'Real-Time Applications', 'Marketing Sites', 'Portfolio Websites', 'Enterprise Applications'].map((item, i) => (
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Build Your Next App?</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
            From concept to deployment, we build modern web applications that perform.
          </p>
          <p className="text-xl md:text-2xl mb-12 font-medium">Let&apos;s create something amazing with React & Next.js.</p>
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
