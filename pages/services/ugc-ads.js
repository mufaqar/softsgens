import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { HiPlay, HiLightningBolt, HiChartBar, HiHeart, HiGlobe, HiCash, HiClock, HiPhotograph, HiCube, HiUserGroup, HiAcademicCap, HiSparkles, HiFilm, HiDeviceMobile, HiShoppingCart, HiClipboardList, HiEye, HiThumbUp, HiStar, HiCheck, HiArrowRight } from 'react-icons/hi';
import { ugcServices } from '../../data_files/ugcServices';

const icons = {
  engagement: <HiHeart className="w-8 h-8 text-primary" />,
  clicks: <HiLightningBolt className="w-8 h-8 text-primary" />,
  sales: <HiChartBar className="w-8 h-8 text-primary" />,
  storytelling: <HiFilm className="w-8 h-8 text-primary" />,
  platform: <HiGlobe className="w-8 h-8 text-primary" />,
  trust: <HiStar className="w-8 h-8 text-primary" />,
  ads: <HiCash className="w-8 h-8 text-primary" />,
  demo: <HiPlay className="w-8 h-8 text-primary" />,
  unboxing: <HiCube className="w-8 h-8 text-primary" />,
  testimonial: <HiUserGroup className="w-8 h-8 text-primary" />,
  lifestyle: <HiPhotograph className="w-8 h-8 text-primary" />,
  problem: <HiLightningBolt className="w-8 h-8 text-primary" />,
  reels: <HiDeviceMobile className="w-8 h-8 text-primary" />,
  facebook: <HiThumbUp className="w-8 h-8 text-primary" />,
  amazon: <HiShoppingCart className="w-8 h-8 text-primary" />,
  ai: <HiSparkles className="w-8 h-8 text-primary" />,
  strategy: <HiAcademicCap className="w-8 h-8 text-white" />,
  script: <HiClipboardList className="w-8 h-8 text-white" />,
  creation: <HiFilm className="w-8 h-8 text-white" />,
  editing: <HiPhotograph className="w-8 h-8 text-white" />,
  delivery: <HiGlobe className="w-8 h-8 text-white" />,
};

const benefits = [
  { label: 'Higher Engagement', icon: icons.engagement },
  { label: 'Better Click-Through Rates', icon: icons.clicks },
  { label: 'Increased Sales & Conversions', icon: icons.sales },
  { label: 'Authentic Brand Storytelling', icon: icons.storytelling },
  { label: 'Platform-Optimized Content', icon: icons.platform },
  { label: 'Faster Customer Trust', icon: icons.trust },
  { label: 'Perfect for Paid Advertising', icon: icons.ads },
];

const services = [
  { title: 'Product Demo Videos', desc: 'Showcase your product\'s features with engaging demonstrations.', icon: icons.demo },
  { title: 'Product Unboxing Videos', desc: 'Create excitement with realistic unboxing experiences.', icon: icons.unboxing },
  { title: 'Customer Testimonial Videos', desc: 'Build trust using authentic customer-style reviews.', icon: icons.testimonial },
  { title: 'Lifestyle Videos', desc: 'Show your products being used in real-life situations.', icon: icons.lifestyle },
  { title: 'Problem & Solution Ads', desc: 'Highlight customer pain points and demonstrate how your product solves them.', icon: icons.problem },
  { title: 'TikTok & Instagram Reels', desc: 'Short-form videos designed to stop the scroll and increase engagement.', icon: icons.reels },
  { title: 'Facebook Video Ads', desc: 'High-converting creatives optimized for Meta advertising campaigns.', icon: icons.facebook },
  { title: 'Amazon Product Videos', desc: 'Professional product videos that improve buyer confidence and increase conversions.', icon: icons.amazon },
  { title: 'AI UGC Videos', desc: 'Cost-effective AI-generated creator videos with natural voiceovers and realistic presentations.', icon: icons.ai },
];

const industries = [
  'Fashion & Apparel',
  'Beauty & Skincare',
  'eCommerce Brands',
  'Food Brands',
  'Beverage Companies',
  'Agriculture Products',
  'Health & Wellness',
  'Fitness Brands',
  'Home & Living',
  'Mobile Accessories',
  'Pet Products',
  'Jewelry & Luxury Brands',
];

const industryEmojis = ['👗', '💄', '🛍️', '🍔', '🥤', '🌾', '💊', '🏋️', '🏠', '📱', '🐶', '💎'];

const process = [
  { step: '1', title: 'Strategy', desc: 'We understand your brand, audience, and campaign goals.', icon: icons.strategy },
  { step: '2', title: 'Script Writing', desc: 'Our team creates engaging, conversion-focused scripts.', icon: icons.script },
  { step: '3', title: 'Content Creation', desc: 'Professional creators produce authentic, high-quality videos.', icon: icons.creation },
  { step: '4', title: 'Editing', desc: 'We add captions, motion graphics, transitions, and branding.', icon: icons.editing },
  { step: '5', title: 'Delivery', desc: 'Receive ad-ready videos optimized for every social media platform.', icon: icons.delivery },
];

const whyItems = [
  'Professional UGC Creators',
  'Fast Turnaround',
  'Custom Scripts',
  'Platform Optimized',
  'High-Converting Ads',
  'Affordable Pricing',
  'Worldwide Service',
];

const perfectFor = [
  'Shopify Stores',
  'WooCommerce Stores',
  'Amazon Sellers',
  'Startups',
  'D2C Brands',
  'Small Businesses',
  'Marketing Agencies',
  'Product Launches',
];

export default function UGCAads() {
  return (
    <>
      <Head>
        <title>UGC Video Ads | SoftGens</title>
        <meta name="description" content="Authentic UGC video ads that build trust and drive sales for your brand." />
      </Head>

      <Header
        title="UGC Video Ads"
        content="Authentic Videos That Build Trust & Drive Sales"
        lottifyURL="https://assets1.lottiefiles.com/packages/lf20_uhoBnYFtuw.json"
        lottifyWidth="1000px"
        lottifyheight="500px"
        button={false}
      />

      <section className="py-24 px-4 bg-gradient-to-b from-white to-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Today&apos;s customers trust real people more than traditional advertisements. At SoftsGens, we create high-converting UGC (User-Generated Content) videos that help brands connect with their audience, increase engagement, and generate more sales across Facebook, Instagram, TikTok, YouTube, and Amazon.
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
            Whether you&apos;re launching a new product or scaling your eCommerce business, our creative team produces authentic, scroll-stopping content designed to maximize your return on ad spend.
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
            <h2 className="main-title mb-4">Why Choose UGC Ads?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              UGC videos feel natural, authentic, and trustworthy. They outperform traditional ads by creating genuine connections with potential customers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center group">
                <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <p className="font-semibold text-primary">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="main-title mb-4">Our UGC Video Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Every format you need to scale your brand with authentic content.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-14 h-14 bg-primary bg-opacity-10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">We create UGC content for businesses across multiple industries.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, i) => (
              <div key={i} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-5 text-center hover:bg-opacity-20 transition-all duration-300">
                <span className="text-3xl block mb-2">{industryEmojis[i]}</span>
                <p className="font-medium">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="main-title mb-4">Our Creative Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">From concept to delivery — a seamless workflow that produces results.</p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {process.map((phase, i) => (
              <div key={i} className="bg-secondary rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative">
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {phase.icon}
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                  {phase.step}
                </div>
                <h3 className="font-bold text-primary mb-2 text-lg">{phase.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <h2 className="main-title mb-4">Why SoftsGens?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">What sets us apart from the rest.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyItems.map((item, i) => (
              <div key={i} className="flex items-center space-x-3 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HiCheck className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium text-gray-800">{item}</span>
              </div>
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Scale Your Brand?</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
            Turn your products into scroll-stopping content that captures attention, builds trust, and drives measurable results.
          </p>
          <p className="text-xl md:text-2xl mb-12 font-medium">Let&apos;s create UGC videos that convert viewers into loyal customers.</p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-12 py-4 text-lg font-semibold text-primary bg-secondary rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Get Started Today</span>
            <HiArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

        <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="main-title mb-4">We work for</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">From CGI to UGC — every creative format to grow your brand.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ugcServices.map((svc) => (
              <Link key={svc.id} href={`/services/${svc.id}`} className="block bg-secondary p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <span className="text-3xl block mb-3">{svc.emoji}</span>
                <h3 className="text-lg font-bold text-primary mb-2">{svc.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{svc.subtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      
  

      <Footer />
    </>
  );
}
