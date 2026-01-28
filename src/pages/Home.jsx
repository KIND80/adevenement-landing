
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import GallerySection from '@/components/GallerySection';
import PartnersSection from '@/components/PartnersSection';
import ContactSection from '@/components/ContactSection';
import { useLocation } from 'react-router-dom';
import { seoConfig } from '@/data/seoData';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>{seoConfig.home.title}</title>
        <meta name="description" content={seoConfig.home.description} />
        <meta name="keywords" content={seoConfig.home.keywords} />
        <link rel="canonical" href={seoConfig.home.url} />
        
        {/* Open Graph */}
        <meta property="og:title" content={seoConfig.home.title} />
        <meta property="og:description" content={seoConfig.home.description} />
        <meta property="og:url" content={seoConfig.home.url} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoConfig.home.title} />
        <meta name="twitter:description" content={seoConfig.home.description} />
        
        <meta name="robots" content="index, follow" />
      </Helmet>

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <PartnersSection />
      <ContactSection />
    </>
  );
};

export default Home;
