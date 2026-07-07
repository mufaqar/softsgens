import webDev from '../public/images/w-d.webp';
import ecom from '../public/images/ecom.jpg';

export const data = [
  {
    title: 'WordPress Services',
    description: 'I build powerful, SEO-optimized WordPress websites, custom themes, plugins, and WooCommerce stores tailored to your business needs.',
    feature: {
      one: 'Custom WordPress Theme Development',
      two: 'Plugin Development & Customization',
      Three: 'WooCommerce Store Setup',
      Four: 'WordPress Maintenance & SEO',
    },
    image: webDev,
    link: '/services/wordpress-services',
  },
  {
    title: 'React & Next.js and Tailwindcss',
    description:
      'Reliable, professional and search engine friendly web solutions are a need of the today’s web. using JAMStack Technology',
    feature: {
      one: 'Tailwindcss , Boostrap , MUI',
      two: 'RESTful APIs and GraphQL',
      Three: 'Prisma , MYSQL , Sqlite',
      Four: 'Auth',
    },
    image: ecom,
    link: '/services/react-nextjs-development',
  },
  {
    title: 'Digital Marketing & UGC Ads',
    description: 'Scale your brand with digital marketing automation, UGC video ads, product CGI, social media reels, and creative ad strategies designed to maximize ROI.',
    feature: {
      one: 'UGC & CGI Video Ads',
      two: 'Social Media Ads & PPC',
      three: 'Marketing Automation',
      Four: 'Creative Ad Strategy',
    },
    image: ecom,
    link: '/services/ugc-ads',
  },
];
