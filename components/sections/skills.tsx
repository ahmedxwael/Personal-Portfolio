import { skillsData } from "@/lib/data";
import React from "react";
import SectionHeading from "../section-header";

const Skills = () => {
	return (
		<section
			id="skills"
			className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
		>
			<SectionHeading>My skills</SectionHeading>
			<ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
				{skillsData.map((skill: SkillType, idx) => (
					<li
						key={idx}
						className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
					>
						{skill}
					</li>
				))}
			</ul>
		</section>
	);
};

export default Skills;
