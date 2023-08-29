"use client";

import { projectsData } from "@/lib/data";
import { ProjectType } from "@/types";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { HiLink } from "react-icons/hi";

type ProjectProps = ProjectType;

export default function ProjectCard({
	title,
	description,
	tags,
	imageUrl,
	githubUrl,
	url,
	inProgress,
}: ProjectProps) {
	const ref = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.33 1"],
	});

	const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

	return (
		<motion.article
			ref={ref}
			className={`${
				inProgress ? "" : "group hover:bg-gray-200 dark:hover:bg-gray-200/20"
			} bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden shadow-lg shadow-black/5 relative sm:h-[364px] transition sm:group-even:pl-8 dark:text-white dark:bg-gray-200/10`}
			style={{
				scale: scaleProgess,
				opacity: opacityProgess,
			}}
		>
			{inProgress ? (
				<span className="absolute top-0 left-0 w-full h-full bg-gray-100/90 dark:bg-gray-950/90 z-10 flex items-center justify-center font-bold text-3xl text-center">
					Comming soon
				</span>
			) : null}
			<div className="p-5 sm:pl-6 sm:pr-6 sm:pt-7 sm:max-w-[55%] flex flex-col gap-2 h-full sm:group-even:ml-auto">
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
				<div className="flex gap-3 ml-auto mt-4">
					<Link
						href={githubUrl}
						target="_blank"
						className="rounded-full p-2 bg-gray-50 hover:bg-gray-100 transition-colors shadow-md dark:bg-gray-200/10 dark:text-white/70 dark:hover:text-white hover:scale-105"
					>
						<FaGithub />
					</Link>
					<Link
						href={url}
						target="_blank"
						className="rounded-full p-2 bg-gray-50 hover:bg-gray-100 transition-colors shadow-md dark:bg-gray-200/10 dark:text-white/70 dark:hover:text-white hover:scale-105"
					>
						<HiLink />
					</Link>
				</div>
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
