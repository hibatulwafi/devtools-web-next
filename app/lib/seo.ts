import { TOOLS } from "./tools";

const BASE_URL = "https://devtoolshub.web.id";

/* ===============================
   Home Page Schema
================================ */

export function getHomeSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: "DevTools Hub",
    url: BASE_URL,
    description: "Fast, free, and privacy-friendly online developer tools.",
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: "DevTools Hub",
      url: BASE_URL,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${BASE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
    hasPart: {
      "@type": "ItemList",
      itemListElement: TOOLS.map((tool, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: tool.title,
        url: `${BASE_URL}${tool.href}`,
      })),
    },
  };
}

/* ===============================
   Tool Page Schema
================================ */

type ToolSchemaParams = {
  name: string;
  description: string;
  url: string;
};

export function getToolSchema({ name, description, url }: ToolSchemaParams) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${url}#app`,
    name,
    description,
    inLanguage: "en",
    applicationCategory: "DeveloperTool",
    operatingSystem: "All",
    url,
    isAccessibleForFree: true,
    author: {
      "@type": "Organization",
      name: "DevTools Hub",
      url: BASE_URL,
    },
  };
}
