import type { Metadata } from "next";
import { services, site } from "@/lib/site";

const siteUrl = site.url;
const heroImageUrl = `${siteUrl}/images/hero-repair.webp`;
const logoUrl = `${siteUrl}/android-chrome-512x512.png`;
const businessId = `${siteUrl}/#business`;
const personId = `${siteUrl}/#person-mikhail`;
const websiteId = `${siteUrl}/#website`;
const webpageId = `${siteUrl}/#webpage`;
const serviceCatalogId = `${siteUrl}/#service-catalog`;

export const homeMetadata: Metadata = {
  title: site.title,
  description: site.description,
  authors: [{ name: site.ownerName }],
  creator: site.ownerName,
  publisher: site.name,
  keywords: site.keywords,
  category: "computer repair",
  alternates: {
    canonical: "/",
    languages: {
      ru: "/",
    },
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [
      {
        url: "/images/hero-repair.webp",
        width: 1280,
        height: 960,
        alt: "Рабочее место мастера по ремонту компьютеров",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/images/hero-repair.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteUrl,
      name: site.name,
      inLanguage: site.language,
      publisher: { "@id": businessId },
      potentialAction: {
        "@type": "ContactAction",
        target: [`tel:${site.phone}`, site.telegramUrl],
        name: "Связаться с мастером",
      },
    },
    {
      "@type": "WebPage",
      "@id": webpageId,
      url: `${siteUrl}/`,
      name: site.title,
      description: site.description,
      inLanguage: site.language,
      isPartOf: { "@id": websiteId },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: heroImageUrl,
        width: 1280,
        height: 960,
      },
      about: { "@id": businessId },
      mainEntity: { "@id": businessId },
      breadcrumb: { "@id": `${siteUrl}/#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Главная",
          item: `${siteUrl}/`,
        },
      ],
    },
    {
      "@type": ["LocalBusiness", "ComputerRepair"],
      "@id": businessId,
      name: site.name,
      legalName: site.name,
      description: site.description,
      url: siteUrl,
      telephone: site.phone,
      image: heroImageUrl,
      logo: logoUrl,
      priceRange: site.priceRange,
      taxID: site.unp,
      founder: { "@id": personId },
      employee: { "@id": personId },
      areaServed: {
        "@type": "Country",
        name: site.countryName,
      },
      knowsAbout: site.keywords,
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: site.phone,
          contactType: "customer support",
          areaServed: site.countryName,
          availableLanguage: [site.language],
        },
      ],
      sameAs: [site.telegramUrl],
      hasOfferCatalog: { "@id": serviceCatalogId },
    },
    {
      "@type": "Person",
      "@id": personId,
      name: site.ownerName,
      jobTitle: "Компьютерный мастер",
      worksFor: { "@id": businessId },
      image: `${siteUrl}/images/master-portrait.webp`,
      knowsAbout: site.keywords,
      sameAs: [site.telegramUrl],
    },
    {
      "@type": "OfferCatalog",
      "@id": serviceCatalogId,
      name: "Услуги по ремонту и настройке техники",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
          provider: { "@id": businessId },
          areaServed: {
            "@type": "Country",
            name: site.countryName,
          },
        },
      })),
    },
  ],
};
