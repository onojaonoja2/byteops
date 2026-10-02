import {
  Lightbulb,
  BriefcaseBusiness,
  Brain,
  Code,
  TrendingUp,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  keywords: string[];
  icon: LucideIcon;
  benefits: string[];
  deliverables: string[];
  faqs: { q: string; a: string }[];
}

export const SERVICES: Service[] = [
  {
    slug: "tech-training",
    title: "Tech Training & Capacity Building in Abuja, Nigeria",
    shortTitle: "Tech Training & Capacity Building",
    description:
      "Hands-on, industry-relevant training in ICT, software development, AI, and digital tools for individuals and teams in Abuja and across Nigeria.",
    longDescription:
      "ByteOps Digital Systems provides expert-led tech training in Abuja, Nigeria. Our practical courses cover software development, AI tools, ICT fundamentals, and digital productivity — designed to transform careers and upskill teams with job-ready skills.",
    keywords: [
      "Tech Training Abuja",
      "ICT Courses Nigeria",
      "Software Development Training Abuja",
      "Digital Skills Nigeria",
      "AI Training Nigeria",
    ],
    icon: Lightbulb,
    benefits: [
      "Beginner to advanced learning paths with mentorship",
      "Practical projects and portfolio building",
      "Corporate upskilling for teams and SMEs",
      "Certificates and career guidance",
    ],
    deliverables: ["Curriculum", "Live workshops", "LMS access", "Capstone project", "Certificate"],
    faqs: [
      { q: "Where does training hold?", a: "In-person in Abuja, FCT and online across Nigeria and Africa." },
      { q: "How long are courses?", a: "Short courses run 2–6 weeks; professional tracks run 8–16 weeks." },
    ],
  },
  {
    slug: "it-consultancy",
    title: "IT & Business Consultancy in Abuja | Technology Consulting Nigeria",
    shortTitle: "IT & Business Consultancy",
    description:
      "Strategic IT consultancy to help businesses optimize technology, streamline operations, and scale with confidence.",
    longDescription:
      "Our Abuja-based IT consultants audit your systems, recommend cost-effective tools, and guide digital transformation — from cloud adoption to process automation for startups and enterprises.",
    keywords: ["IT Consultancy Abuja", "Tech Consulting Nigeria", "Digital Strategy", "Business Technology"],
    icon: BriefcaseBusiness,
    benefits: [
      "Systems audit and roadmap",
      "Tool selection and cost optimization",
      "Digital transformation strategy",
      "Ongoing advisory retainers",
    ],
    deliverables: ["Audit report", "Roadmap", "Implementation support", "KPI tracking"],
    faqs: [
      { q: "Do you work with startups?", a: "Yes — we specialize in startups and SMEs across West Africa." },
    ],
  },
  {
    slug: "ai-automation",
    title: "AI & Automation Solutions in Nigeria | Business Process Automation Abuja",
    shortTitle: "AI Automation & Digital Transformation",
    description:
      "Smart AI solutions that automate workflows, enhance productivity, and unlock business potential.",
    longDescription:
      "We design and deploy AI chatbots, document automation, sales pipelines, and custom AI integrations that save hours weekly for Nigerian businesses.",
    keywords: ["AI Solutions Nigeria", "Business Automation Abuja", "Process Automation", "AI Chatbots Nigeria"],
    icon: Brain,
    benefits: [
      "WhatsApp and web AI assistants",
      "Document and reporting automation",
      "CRM and workflow integrations",
      "Staff training on AI tools",
    ],
    deliverables: ["Discovery", "Prototype", "Deployment", "Training", "Support"],
    faqs: [
      { q: "How fast can we deploy?", a: "MVPs in 2–4 weeks; full rollouts in 6–10 weeks." },
    ],
  },
  {
    slug: "web-development",
    title: "Web Development Services in Abuja | Leading Web Agency Nigeria",
    shortTitle: "Custom Web & App Development",
    description:
      "Tailored, scalable, user-friendly websites, e-commerce stores, and web/mobile apps built with modern stacks.",
    longDescription:
      "From business websites to e-commerce and dashboards, ByteOps builds fast, SEO-ready Next.js and mobile apps optimized for Nigerian payment gateways, WhatsApp commerce, and low-bandwidth performance.",
    keywords: ["Web Development Abuja", "Website Design Nigeria", "E-commerce Nigeria", "Next.js Developers Abuja"],
    icon: Code,
    benefits: [
      "SEO-first Next.js builds",
      "Paystack/Flutterwave integration",
      "WhatsApp commerce and analytics",
      "Maintenance and hosting",
    ],
    deliverables: ["Design", "Development", "CMS", "SEO setup", "Launch + care plan"],
    faqs: [
      { q: "How much does a website cost?", a: "Business sites start lean; e-commerce and apps are scoped after a free consultation." },
    ],
  },
  {
    slug: "business-innovation",
    title: "Business Innovation & Advisory for Startups and SMEs in Africa",
    shortTitle: "Business Innovation & Advisory",
    description:
      "Data-driven advisory to help startups and SMEs innovate, grow, and stay competitive.",
    longDescription:
      "Market research, MVP validation, pricing, and go-to-market support for founders building in Abuja, Lagos, and across Africa.",
    keywords: ["Business Innovation Nigeria", "Startup Advisory Africa", "SME Growth Consulting"],
    icon: TrendingUp,
    benefits: ["Idea validation", "MVP scoping", "Growth experiments", "Pitch support"],
    deliverables: ["Discovery sprint", "Validation report", "Growth roadmap"],
    faqs: [{ q: "Do you help non-tech founders?", a: "Yes — most of our advisory clients are non-technical founders." }],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity & Data Protection Services in Nigeria",
    shortTitle: "Cybersecurity & Data Protection",
    description:
      "Robust cybersecurity audits, threat detection, incident response, and NDPR data privacy compliance.",
    longDescription:
      "Protect your business with vulnerability assessments, staff security training, backup policies, and Nigeria Data Protection Regulation (NDPR) compliance.",
    keywords: ["Cybersecurity Nigeria", "Data Protection Abuja", "NDPR Compliance", "Security Audit Nigeria"],
    icon: ShieldCheck,
    benefits: ["Vulnerability audits", "Staff phishing training", "Backup and recovery plans", "NDPR compliance"],
    deliverables: ["Audit", "Remediation", "Policy docs", "Training"],
    faqs: [{ q: "Do small businesses need this?", a: "Yes — SMEs are the most targeted. Audits take 1–2 weeks." }],
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export const FAQS = [
  {
    q: "Where is ByteOps Digital Systems located?",
    a: "We are based in Abuja, Federal Capital Territory, Nigeria, and serve clients across Nigeria, West Africa, and remotely worldwide.",
  },
  {
    q: "What services does ByteOps offer?",
    a: "Tech training, IT consultancy, AI automation, custom web and app development, business innovation advisory, and cybersecurity.",
  },
  {
    q: "How do I start a project?",
    a: "Message us on WhatsApp at +234 701 909 1481 or email info@byteops.digital. We offer a free consultation and respond within 24 hours.",
  },
  {
    q: "Do you offer online training?",
    a: "Yes — in-person in Abuja and live online across Nigeria and Africa, with practical projects and certificates.",
  },
  {
    q: "How much does a website or AI project cost?",
    a: "Pricing depends on scope. Contact us for a free quote — business websites, e-commerce, and AI automation are scoped transparently with milestones.",
  },
  {
    q: "Do you support NDPR compliance?",
    a: "Yes — our cybersecurity service includes NDPR audits, staff training, and data protection policies.",
  },
];
