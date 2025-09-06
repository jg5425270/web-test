import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
}

export default function SEOHead({
  title = "JJM Technology LLC - AI Solutions, Web & Mobile Development",
  description = "JJM Technology LLC specializes in Gen AI, AI automation, web and mobile development. Professional technology solutions for modern businesses.",
  keywords = "AI automation, Gen AI, web development, mobile development, artificial intelligence, technology solutions",
  ogTitle = "JJM Technology LLC - AI Solutions & Development",
  ogDescription = "Leading provider of AI automation, web and mobile development services"
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    const updateMetaTag = (name: string, content: string, property?: string) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.content = content;
    };

    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('og:title', ogTitle, true);
    updateMetaTag('og:description', ogDescription, true);
    updateMetaTag('og:type', 'website', true);
  }, [title, description, keywords, ogTitle, ogDescription]);

  return null;
}