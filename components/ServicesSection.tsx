// components/ServicesSection.tsx
"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Lightbulb, Code, Brain, TrendingUp, BriefcaseBusiness, ShieldCheck } from "lucide-react";

const services = [
	{
		title: "Tech Training & Capacity Building",
		description:
			"Empowering individuals and teams through hands-on, industry-relevant training in ICT, software development, AI, and digital tools.",
		icon: Lightbulb,
	},
	{
		title: "IT & Business Consultancy",
		description:
			"Providing expert guidance to help businesses optimize technology, streamline operations, and scale with confidence.",
		icon: BriefcaseBusiness,
	},
	{
		title: "AI Automation & Digital Transformation",
		description:
			"Designing and deploying smart AI solutions that automate workflows, enhance productivity, and unlock business potential.",
		icon: Brain,
	},
	{
		title: "Custom Web & App Development",
		description:
			"Building tailored, scalable, and user-friendly web and mobile applications that align with client goals and user needs.",
		icon: Code,
	},
	{
		title: "Business Innovation & Advisory Services",
		description:
			"Delivering strategic insights and data-driven advisory for startups and SMEs, helping them innovate, grow, and stay competitive.",
		icon: TrendingUp,
	},
	{
		title: "Cybersecurity & Data Protection",
		description:
			"Safeguarding your digital assets with robust cybersecurity strategies, threat detection, incident response, and data privacy compliance.",
		icon: ShieldCheck, // Using the ShieldCheck icon
	},
];

export function ServicesSection() {
	const containerVariants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 50 },
		show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
	};

	return (
		<section
			id="services"
			// New background: radial gradient for a smooth "fade in" from dark to lighter/different hue
			className="py-24 relative overflow-hidden // Increased padding to facilitate blending
                 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
                 from-byteops-base-dark/90 via-byteops-base-dark/70 to-byteops-bg-light
                 dark:from-byteops-base-dark/90 dark:via-byteops-base-dark/70 dark:to-[hsl(220_30%_8%)]
                 text-byteops-text-dark dark:text-byteops-text-light"
			itemScope
			itemType="https://schema.org/Service"
		>
			{/* Optional: Add a subtle background pattern for texture, if desired */}
			<div className="absolute inset-0 z-0 opacity-5 dark:opacity-10 pointer-events-none">
				<svg className="h-full w-full" fill="none">
					<defs>
						<pattern
							id="service-grid-pattern"
							x="0"
							y="0"
							width="20"
							height="20"
							patternUnits="userSpaceOnUse"
						>
							<path
								d="M20 0L0 0L0 20"
								stroke="currentColor"
								strokeWidth="0.5"
							/>
						</pattern>
					</defs>
					<rect
						width="100%"
						height="100%"
						fill="url(#service-grid-pattern)"
						className="text-byteops-primary dark:text-byteops-secondary"
					/>
				</svg>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				{/* Ensure content is above background elements */}
				<motion.h2
					initial={{ y: -50, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.6 }}
					className="text-4xl sm:text-5xl font-extrabold text-center mb-12
                     text-byteops-accent drop-shadow-md"
					itemProp="name"
				>
					Our Core Services
				</motion.h2>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.2 }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					{services.map((service, index) => (
						<motion.div key={index} variants={itemVariants}>
							<Card
								className="h-full flex flex-col justify-between p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 // Added hover lift
                           bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg" // Solid card background for better contrast
							>
								<CardHeader className="pb-4">
									<div className="text-5xl mb-4 flex justify-center text-byteops-primary dark:text-byteops-secondary">
										<service.icon size={48} />
									</div>
									<CardTitle className="text-2xl font-bold text-center text-byteops-accent">
										{service.title}
									</CardTitle>
								</CardHeader>
								<CardContent className="flex-grow text-center">
									<CardDescription className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
										{service.description}
									</CardDescription>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
