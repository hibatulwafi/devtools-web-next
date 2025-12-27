export type ToolBadge = "new" | "popular";

export type Tool = {
  title: string;
  description: string;
  href: string;
  badge?: ToolBadge;
};

export const TOOLS: Tool[] = [
  {
    title: "JSON Beautifier",
    description: "Format and beautify JSON instantly.",
    href: "/json-beautifier",
    badge: "popular",
  },
  {
    title: "JSON Validator",
    description: "Validate JSON and catch errors fast.",
    href: "/json-validator",
    badge: "popular",
  },
  {
    title: "JSON Minifier",
    description: "Minify JSON for smaller payloads.",
    href: "/json-minifier",
  },
  {
    title: "JSON to CSV",
    description: "Convert JSON data into CSV format.",
    href: "/json-to-csv",
    badge: "popular",
  },
  {
    title: "Base64 Encoder / Decoder",
    description: "Encode and decode Base64 strings.",
    href: "/base64-encoder-decoder",
  },
  {
    title: "JWT Decoder",
    description: "Decode JWT header and payload instantly.",
    href: "/jwt-decoder",
    badge: "new",
  },
];
