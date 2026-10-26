
import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
}

const SITE_NAME = "Native Kilimanjaro";
const SITE_URL = "https://nativekilimanjaro.com";
const DEFAULT_IMAGE = `${SITE_URL}/og-safari.jpg`;

const upsertMeta = (
  selector: string,
  attribute: "name" | "property",
  key: string,
  content: string,
) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = content;
};

export default function SEO({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  noindex = false,
}: SEOProps) {
  
useEffect(() => {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${SITE_URL}${path}`;

  const absoluteImage = image?.trim()
    ? new URL(image, SITE_URL).href
    : DEFAULT_IMAGE;

  document.title = fullTitle;

  upsertMeta('meta[name="description"]', "name", "description", description);
  upsertMeta(
    'meta[name="robots"]',
    "name",
    "robots",
    noindex ? "noindex, nofollow" : "index, follow",
  );

  upsertMeta('meta[property="og:title"]', "property", "og:title", fullTitle);
  upsertMeta(
    'meta[property="og:description"]',
    "property",
    "og:description",
    description,
  );
  upsertMeta('meta[property="og:type"]', "property", "og:type", "website");
  upsertMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
  upsertMeta(
    'meta[property="og:image"]',
    "property",
    "og:image",
    absoluteImage,
  );

  upsertMeta(
    'meta[name="twitter:card"]',
    "name",
    "twitter:card",
    "summary_large_image",
  );
  upsertMeta(
    'meta[name="twitter:title"]',
    "name",
    "twitter:title",
    fullTitle,
  );
  upsertMeta(
    'meta[name="twitter:description"]',
    "name",
    "twitter:description",
    description,
  );
  upsertMeta(
    'meta[name="twitter:image"]',
    "name",
    "twitter:image",
    absoluteImage,
  );

  let canonical = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  );

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }

  canonical.href = canonicalUrl;
}, [title, description, path, image, noindex]);


  return null;
}