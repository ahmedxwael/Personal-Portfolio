"use client";

import { useSectionInView } from "@/hooks/useSectionInView";
import { about } from "@/lib/data";
import { motion } from "framer-motion";
import SectionHeading from "../section-header";

const About = () => {
	const { ref, isVisible } = useSectionInView("About");

	return (
		<motion.section
			ref={ref}
			className="mb-28 leading-8 sm:mb-40 pt-28 max-w-full w-[45rem] text-center scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="about"
		>
			<SectionHeading>About me</SectionHeading>
			<div className="flex flex-col gap-4">
				{about.map(({ p: content }, idx) => (
					<p
						key={idx}
						className="mx-4 leading-10 sm:leading-10 text-lg sm:text-xl"
					>
						{content}
					</p>
				))}
			</div>
		</motion.section>
	);
};

export default About;
