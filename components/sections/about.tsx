"use client";

import { about } from "@/lib/data";
import { motion } from "framer-motion";
import SectionHeading from "../section-header";

const About = () => {
	return (
		<section
			className="py-28 max-w-full w-[45rem] text-center scroll-mt-28"
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
		</section>
	);
};

export default About;
