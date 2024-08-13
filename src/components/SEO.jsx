import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Aos from 'aos'
import 'aos/dist/aos.css'
export default function SEO({ title, description, ogImage, keywords }) {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <Helmet>
      { /* Standard metadata tags */}
      <title>{title}</title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <link rel="canonical" href={window.location.href}/>
      <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
      <meta name="description" content={`${description}`} />
      <meta name="keywords" content={`${keywords}`} />
      <meta name="og:image" content={`${ogImage}`} />
      <meta name="twitter:image" content={`${ogImage}`} />
      <meta name="linkedin:image" content={`${ogImage}`} />
      <meta name="instagram:image" content={`${ogImage}`} />
      <meta name="tiktok:image" content={`${ogImage}`} />
      <meta name="twitter:image:alt" content={`${title}`} />
      <meta name="instagram:image:alt" content={`${title}`} />
      <meta name="linkedin:image:alt" content={`${title}`} />
      <meta property="article:section" content={`${title}`} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={`${title}`} />
      <meta property="og:description" content={`${description}`} />
      <meta property="og:image:title" content={`${title}`} />
      <meta property="og:image:alt" content={`${title}`} />
      <meta property="og:url" content={`${window.location.href}`} />
      <meta property="og:image" content={`${ogImage}`} />
      <meta property="og:image:height" content="300" />
      <meta property="og:image:width" content="300" />
      <meta name="twitter:description" content={`${description}`} />
      <meta name="twitter:site" content="https://x.com/wanfis18 " />
      <meta name="theme-color" content="#E35200" />
    </Helmet>
  );
}








