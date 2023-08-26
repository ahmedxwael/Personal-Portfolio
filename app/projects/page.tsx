import ProjectCard from "@/components/project-card";
import SectionHeading from "@/components/section-header";
import { projectsData } from "@/lib/data";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

const MyProjects = () => {
	return (
		<main className="pt-10 pb-20 flex flex-col items-center max-w-[30rem] sm:max-w-[50rem] mx-auto">
			<Link
				href="/"
				className="flex items-center gap-2 mb-6 shadow-md shadow-black/5 text-sm py-2 px-4 mr-auto font-semibold rounded-full bg-gray-900 text-white outline-none transition-colors hover:bg-gray-700 dark:bg-white/10 dark:hover:bg-white/20"
			>
				<FaArrowLeftLong /> Back to home
			</Link>
			<SectionHeading>My Projects</SectionHeading>
			<div className="space-y-4 sm:space-y-8">
				{projectsData.map((project, index) => (
					<ProjectCard key={index} {...project} />
				))}
			</div>
		</main>
	);
};

export default MyProjects;
