"use client";

import { useSectionInView } from "@/hooks/useSectionInView";
import { skillsData } from "@/lib/data";
import { SkillType } from "@/types";
import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "../section-header";

const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.05 * index,
		},
	}),
};

const Skills = () => {
	const { ref } = useSectionInView("Skills");

	return (
		<section
			id="skills"
			className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
		>
			<SectionHeading>My skills</SectionHeading>
			<ul
				ref={ref}
				className={`flex flex-wrap justify-center gap-2 text-lg text-gray-800`}
			>
				{skillsData.map((skill: SkillType, idx) => (
					<motion.li
						className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
						key={idx}
						variants={fadeInAnimationVariants}
						initial="initial"
						whileInView="animate"
						viewport={{
							once: true,
						}}
						custom={idx}
					>
						{skill}
					</motion.li>
				))}
			</ul>
		</section>
	);
};

export default Skills;
