const fs = require("fs");
const path = require("path");
const sitemap = require("sitemap");

const urls = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  // Add more URLs here
];

const sitemapStream = new sitemap.SitemapStream({
  hostname: "https://Himit-md.com",
});
const writeStream = fs.createWriteStream(
  path.join(__dirname, "public", "sitemap.xml")
);

sitemapStream.pipe(writeStream);
urls.forEach((url) => sitemapStream.write(url));
sitemapStream.end();

console.log("Sitemap generated successfully!");
