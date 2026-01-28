
import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { businessInfo } from '@/data/seoData';

const StructuredData = () => {
  const location = useLocation();
  const currentUrl = `${businessInfo.url}${location.pathname}`;

  // 1. LocalBusiness Schema (Global)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${businessInfo.url}/#localbusiness`,
    "name": businessInfo.name,
    "image": businessInfo.image,
    "logo": businessInfo.logo,
    "description": businessInfo.description,
    "url": businessInfo.url,
    "telephone": businessInfo.phone,
    "email": businessInfo.email,
    "priceRange": businessInfo.priceRange,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessInfo.address.streetAddress,
      "addressLocality": businessInfo.address.addressLocality,
      "postalCode": businessInfo.address.postalCode,
      "addressCountry": businessInfo.address.addressCountry,
      "addressRegion": businessInfo.address.region
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": businessInfo.geo.latitude,
      "longitude": businessInfo.geo.longitude
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "areaServed": businessInfo.serviceAreas.map(area => ({
      "@type": "City",
      "name": area
    })),
    "sameAs": businessInfo.socialProfiles,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5"
    }
  };

  // 2. Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": businessInfo.name,
    "url": businessInfo.url,
    "logo": businessInfo.logo,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": businessInfo.phone,
      "contactType": "customer service",
      "areaServed": "FR",
      "availableLanguage": "French"
    }
  };

  // 3. Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": businessInfo.name,
    "url": businessInfo.url,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${businessInfo.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  // 4. Service Schema (Dynamic based on route)
  let serviceSchema = null;
  if (location.pathname.includes('/services/')) {
    const serviceType = location.pathname.split('/').pop();
    const serviceName = serviceType.charAt(0).toUpperCase() + serviceType.slice(1);
    
    serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `Décoration ${serviceName} Metz`,
      "provider": {
        "@type": "LocalBusiness",
        "name": businessInfo.name
      },
      "areaServed": businessInfo.serviceAreas.map(area => ({
        "@type": "City",
        "name": area
      })),
      "description": `Service professionnel de décoration pour ${serviceName} à Metz, Thionville et Forbach.`,
      "url": currentUrl
    };
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      {serviceSchema && (
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default StructuredData;
