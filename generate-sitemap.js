import { SitemapStream, streamToPromise } from 'sitemap';
import { writeFile } from 'fs/promises';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module file
const __dirname = dirname(fileURLToPath(import.meta.url));

// Define the base URL of your site
const baseUrl = 'http://am.najezsoft.com';

// Define the URLs for your sitemap
const urls = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/work', changefreq: 'weekly', priority: 0.8 },
  { url: '/service', changefreq: 'weekly', priority: 0.8 },
  { url: '/blog', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact', changefreq: 'weekly', priority: 0.8 },
  // Add other routes as needed
];

const generateSitemap = async () => {
  const sitemap = new SitemapStream({ hostname: baseUrl });

  try {
    const data = await streamToPromise(sitemap);
    urls.forEach(url => sitemap.write(url));
    sitemap.end();
    
    const xml = data.toString();
    const filePath = resolve(__dirname, 'public/sitemap.xml');

    await writeFile(filePath, xml);
    console.log('Sitemap written successfully');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
};

generateSitemap();
