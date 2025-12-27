import { toolConfig } from "./config";
import Client from "./Client";
import { getToolSchema } from "../lib/seo";

export const metadata = {
  title: toolConfig.title,
  description: toolConfig.description,
};

export default function Page() {
  const schema = getToolSchema({
    name: toolConfig.name,
    description: toolConfig.description,
    url: `https://devtoolshub.web.id/${toolConfig.slug}`,
  });

  return (
    <>
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <Client />
    </>
  );
}
