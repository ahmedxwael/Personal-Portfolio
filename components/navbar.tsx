"use client";

import { useActiveSectionContext } from "@/context/active-section-provider";
import { links } from "@/lib/data";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
	const { activeSection, setActiveSection, setTimeOfLastClick } =
		useActiveSectionContext();

	return (
		<header className="z-[999] relative">
			<motion.nav
				initial={{ y: -100, x: "-50%", opacity: 0 }}
				animate={{ y: 0, x: "-50%", opacity: 1 }}
				className="fixed flex items-center justify-center left-1/2 -translate-x-1/2 border-b-2 sm:border-2 border-white border-opacity-10 bg-white bg-opacity-90 shadow-lg shadow-black/5 backdrop-blur-[0.5rem] top-0 sm:top-6 sm:h-14 w-full sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-white/10 dark:bg-opacity-75"
			>
				<ul className="flex w-[22rem] p-2 sm:py-0 flex-wrap items-center justify-center text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
					{links.map((link) => (
						<motion.li
							className="h-3/4 flex items-center justify-center relative"
							key={link.hash}
							initial={{ y: -100, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
						>
							<Link
								className={clsx(
									"flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500/80 dark:hover:text-gray-300",
									{
										"text-gray-950 dark:text-gray-300":
											activeSection === link.name,
									}
								)}
								href={link.hash}
								onClick={() => {
									setActiveSection(link.name);
									setTimeOfLastClick(Date.now());
								}}
							>
								{link.name}
								{link.name === activeSection ? (
									<motion.span
										className="bg-gray-200 my-auto h-8 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
										layoutId="activeSection"
										transition={{
											type: "spring",
											stiffness: 380,
											damping: 30,
										}}
									></motion.span>
								) : null}
							</Link>
						</motion.li>
					))}
				</ul>
			</motion.nav>
		</header>
	);
};

export default Navbar;
