"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const Intro = () => {
	return (
		<section
			ref={null}
			id="home"
			className="mb-28 max-w-[30rem] sm:max-w-[50rem] text-center mx-auto sm:mb-0 scroll-mt-[100rem]"
		>
			<motion.h1
				className="mb-10 mt-12 sm:mt-0 px-4 text-[1.6rem] font-medium !leading-[1.5] sm:text-4xl"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
			>
				Hello, I&#39;m <span className="text-gray-200">Ahmed Wael</span>
				<br />
				I&#39;m a <span className="text-gray-200">Front-end developer</span>. I
				enjoy building Sites and stuff for Web
			</motion.h1>

			<motion.div
				className="flex flex-col sm:flex-row items-center flex-wrap justify-center gap-4 px-4 text-lg font-medium"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.1,
				}}
			>
				<Link
					href="#contact"
					className="group bg-gray-900 hover:text-gray-200 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
					// onClick={() => {
					// 	setActiveSection("Contact");
					// 	setTimeOfLastClick(Date.now());
					// }}
				>
					Contact me
				</Link>

				<a
					className="group bg-white px-7 hover:text-gray-200 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
					href=""
					download
				>
					Download CV{" "}
					<HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
				</a>

				<div className="flex gap-4 w-full items-center justify-center">
					<a
						className="bg-white p-4 text-gray-700 hover:text-gray-200 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
						href="https://www.linkedin.com/in/ahmed-wael-2403291a8"
						target="_blank"
					>
						<BsLinkedin />
					</a>
					<a
						className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-200 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
						href="https://github.com/JAHMD"
						target="_blank"
					>
						<FaGithubSquare />
					</a>
				</div>
			</motion.div>
		</section>
	);
};

export default Intro;
