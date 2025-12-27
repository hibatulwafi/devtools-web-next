import HomeClient from "./HomeClient";
import { getHomeSchema } from "./lib/seo";

export const metadata = {
  title: "DevTools Hub – Fast JSON Formatter & Developer Utilities",
  description:
    "Modern developer tools for JSON formatting, validation, conversion, and encoding. Fast, secure, and runs entirely in your browser.",
};

export default function Page() {
  const schema = getHomeSchema();

  return (
    <>
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <HomeClient />
    </>
  );
}
