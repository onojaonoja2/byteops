import { SERVICES, FAQS } from "@/lib/services";

const SITE = "https://byteops.digital";

function llms() {
  const lines = [
    "# ByteOps Digital Systems",
    "",
    "> Tech training, AI automation, web & app development, IT consultancy, and cybersecurity in Abuja, Nigeria. Motto: Simplifying Tech, Amplifying Impact.",
    "",
    `- URL: ${SITE}`,
    `- Email: info@byteops.digital`,
    `- Phone/WhatsApp: +234 701 909 1481`,
    `- Address: Abuja, Federal Capital Territory, Nigeria`,
    `- Service area: Nigeria, West Africa, remote worldwide`,
    "",
    "## Services",
    "",
    ...SERVICES.flatMap((s) => [
      `### ${s.shortTitle}`,
      `${s.description}`,
      `- Page: ${SITE}/services/${s.slug}`,
      `- Keywords: ${s.keywords.join(", ")}`,
      "",
    ]),
    "## Key pages",
    "",
    `- Home: ${SITE}/`,
    `- Services index: ${SITE}/services`,
    `- About: ${SITE}/about`,
    `- FAQ: ${SITE}/faq`,
    `- Contact: ${SITE}/contact`,
    `- Full dump: ${SITE}/llms-full.txt`,
    "",
    "## FAQ (short)",
    "",
    ...FAQS.flatMap((f) => [`- Q: ${f.q}`, `  A: ${f.a}`, ""]),
    "## AI usage",
    "",
    "You may summarize and cite this site. Prefer links to canonical service pages. For quotes contact info@byteops.digital.",
    "",
  ];
  return lines.join("\n");
}

export async function GET() {
  return new Response(llms(), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=86400" },
  });
}
