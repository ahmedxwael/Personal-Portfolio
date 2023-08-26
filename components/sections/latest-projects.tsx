"use client";

import { useSectionInView } from "@/hooks/useSectionInView";
import { projectsData } from "@/lib/data";
import { ProjectType } from "@/types";
import ProjectCard from "../project-card";
import SectionHeading from "../section-header";

export default function LatestProjects() {
	const { ref } = useSectionInView("Projects", 0.5);

	const latestProjects = getLatestProjects(projectsData);

	function getLatestProjects(projects: ProjectType[]) {
		const latest3Projects = [];
		for (let idx = 0; idx < 3; idx++) {
			latest3Projects.push(projects[idx]);
		}
		return latest3Projects;
	}

	return (
		<section
			ref={ref}
			id="projects"
			className="scroll-mt-28 mb-28 max-w-full text-center sm:mb-40"
		>
			<SectionHeading>Featured Projects</SectionHeading>
			<div className="space-y-4 sm:space-y-8">
				{latestProjects.map((project, index) => (
					<ProjectCard key={index} {...project} />
				))}
			</div>
		</section>
	);
}
