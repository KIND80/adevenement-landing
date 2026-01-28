
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { businessInfo } from '@/data/seoData';

const Breadcrumbs = ({ className = "" }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Don't render on home page
  if (pathnames.length === 0) return null;

  const breadcrumbList = [
    { name: 'Accueil', url: '/' },
    ...pathnames.map((name, index) => {
      const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
      // Format name for display (remove hyphens, capitalize)
      let displayName = name.replace(/-/g, ' ');
      displayName = displayName.charAt(0).toUpperCase() + displayName.slice(1);
      
      // Specific overrides
      if (name === 'politique-confidentialite') displayName = 'Politique de Confidentialité';
      if (name === 'conditions-generales') displayName = 'Conditions Générales';

      return {
        name: displayName,
        url: routeTo
      };
    })
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbList.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${businessInfo.url}${item.url}`
    }))
  };

  return (
    <nav aria-label="Breadcrumb" className={`py-4 ${className}`}>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      <ol className="flex items-center space-x-2 text-sm text-gray-500">
        <li>
          <Link to="/" className="hover:text-gold transition-colors flex items-center">
            <Home className="w-4 h-4" />
            <span className="sr-only">Accueil</span>
          </Link>
        </li>
        {breadcrumbList.slice(1).map((crumb, index) => {
          const isLast = index === breadcrumbList.length - 2;
          return (
            <li key={crumb.url} className="flex items-center">
              <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
              {isLast ? (
                <span className="font-medium text-navy" aria-current="page">
                  {crumb.name}
                </span>
              ) : (
                <Link to={crumb.url} className="hover:text-gold transition-colors">
                  {crumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
