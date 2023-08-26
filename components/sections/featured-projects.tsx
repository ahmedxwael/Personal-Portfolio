"use client";

import { useSectionInView } from "@/hooks/useSectionInView";
import { featuredProjects } from "@/lib/data";
import Link from "next/link";
import ProjectCard from "../project-card";
import SectionHeading from "../section-header";

export default function FeaturedProjects() {
	const { ref } = useSectionInView("Projects", 0.5);

	return (
		<section
			ref={ref}
			id="projects"
			className="scroll-mt-28 mb-28 max-w-full text-center sm:mb-40"
		>
			<SectionHeading>Featured Projects</SectionHeading>
			<div className="space-y-4 sm:space-y-8">
				{featuredProjects.map((project, index) => (
					<ProjectCard key={index} {...project} />
				))}
			</div>
			<Link
				href="/projects"
				className="inline-block mt-10 py-3 shadow-md font-semibold px-6 rounded-full bg-gray-900 text-white outline-none transition-all hover:bg-gray-700 dark:bg-white/10 dark:hover:bg-white/20"
			>
				All Projects
			</Link>
		</section>
	);
}
