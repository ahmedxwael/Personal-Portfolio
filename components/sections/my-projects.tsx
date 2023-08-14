"use client";

import { projectsData } from "@/lib/data";
import { Fragment } from "react";
import SectionHeading from "../section-header";

export default function Projects() {
	return (
		<section
			ref={null}
			id="projects"
			className="scroll-mt-28 mb-28 max-w-full w-[45rem] text-center sm:mb-40"
		>
			<SectionHeading>My projects</SectionHeading>
			{/* <div>
				{projectsData.map((project, index) => (
					<Fragment key={index}></Fragment>
				))}
			</div> */}
		</section>
	);
}
