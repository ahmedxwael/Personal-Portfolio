"use client";

import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

type ProjectProps = (typeof projectsData)[number];

export default function ProjectCard({
	title,
	description,
	tags,
	imageUrl,
}: ProjectProps) {
	return (
		<motion.article className="group bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden shadow-lg shadow-black/5 relative sm:h-[364px] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
			<div className="pt-4 pb-7 px-5 sm:pl-6 sm:pr-6 sm:pt-7 sm:max-w-[55%] flex flex-col gap-2 h-full sm:group-even:ml-auto">
				<h3 className="text-2xl font-semibold">{title}</h3>
				<p className="leading-relaxed text-gray-700 dark:text-white/70">
					{description}
				</p>
				<ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto justify-center">
					{tags.map((tag, index) => (
						<li
							className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
							key={index}
						>
							{tag}
						</li>
					))}
				</ul>
			</div>

			<Image
				src={imageUrl}
				alt="Project I worked on"
				width={650}
				height={650}
				className="absolute hidden sm:block bottom-0 -right-40 w-[28.25rem] h-[290px] object-cover object-top rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
			/>
		</motion.article>
	);
}
