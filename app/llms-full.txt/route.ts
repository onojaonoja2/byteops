import { SERVICES, FAQS } from "@/lib/services";

const SITE = "https://byteops.digital";

function full() {
  const out: string[] = [
    `# ByteOps Digital Systems — full context`,
    ``,
    `> Last updated 2026-10-02. Canonical: ${SITE}`,
    ``,
    `## Identity`,
    `ByteOps Digital Systems (“Simplifying Tech, Amplifying Impact”) is an Abuja-based technology company serving individuals, startups, and SMEs with training, consultancy, engineering, and security.`,
    `Contact: info@byteops.digital, +234 701 909 1481, Abuja FCT Nigeria. Hours: Mon–Sat. Response <24h.`,
    ``,
  ];
  for (const s of SERVICES) {
    out.push(`## Service: ${s.shortTitle}`, ``, s.longDescription, ``, `URL: ${SITE}/services/${s.slug}`, ``, `### Benefits`);
    for (const b of s.benefits) out.push(`- ${b}`);
    out.push(``, `### Deliverables`);
    for (const d of s.deliverables) out.push(`- ${d}`);
    out.push(``, `### FAQs`);
    for (const f of s.faqs) out.push(`- Q: ${f.q}`, `  A: ${f.a}`);
    out.push(``, `Keywords: ${s.keywords.join("; ")}`, ``, `---`, ``);
  }
  out.push(`## Global FAQs`, ``);
  for (const f of FAQS) out.push(`- Q: ${f.q}`, `  A: ${f.a}`, ``);
  out.push(`## Pages`, `- /services, /services/[slug], /about, /faq, /contact`, ``, `## Social`, `- LinkedIn: https://www.linkedin.com/company/byteops-digital-systems/`, `- Facebook: https://www.facebook.com/profile.php?viewas=100000686899395&id=61583223701076`, `- WhatsApp: https://wa.me/2347019091481`);
  return out.join("\n");
}

export async function GET() {
  return new Response(full(), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=86400" },
  });
}
