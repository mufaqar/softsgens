import { ugcServices } from '../data_files/ugcServices';

const EXTERNAL_URL = 'https://softgens.com';

function escapeXml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export async function getServerSideProps({ res }) {
  const staticPages = [
    { loc: '/', priority: '1.0', changefreq: 'weekly' },
    { loc: '/services', priority: '0.9', changefreq: 'weekly' },
    { loc: '/services/ugc-ads', priority: '0.8', changefreq: 'weekly' },
    { loc: '/services/wordpress-services', priority: '0.8', changefreq: 'monthly' },
    { loc: '/services/react-nextjs-development', priority: '0.8', changefreq: 'monthly' },
    { loc: '/portfolio', priority: '0.7', changefreq: 'monthly' },
    { loc: '/about', priority: '0.6', changefreq: 'monthly' },
    { loc: '/contact', priority: '0.6', changefreq: 'monthly' },
  ];

  const servicePages = ugcServices.map((svc) => ({
    loc: `/services/${svc.id}`,
    priority: '0.7',
    changefreq: 'monthly',
  }));

  const allPages = [...staticPages, ...servicePages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map(
      (page) => `  <url>
    <loc>${EXTERNAL_URL}${page.loc}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join('\n')}
</urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default function Sitemap() {
  return null;
}
