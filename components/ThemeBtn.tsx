"use client";

import { useEffect, useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";

type ThemeType = "dark" | "light";

const ThemeBtn = () => {
	const [theme, setTheme] = useState<ThemeType>("light");

	const handleClick = () => {
		if (theme === "light") {
			setTheme("dark");
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			setTheme("light");
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	};

	useEffect(() => {
		const storedTheme = (localStorage.getItem("theme") as ThemeType) || null;

		if (
			(matchMedia("(prefers-color-scheme: dark)").matches && !storedTheme) ||
			storedTheme === "dark"
		) {
			setTheme("dark");
			document.documentElement.classList.add("dark");
		}
	}, []);

	return (
		<button
			onClick={handleClick}
			className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border-2 dark:border-white dark:border-opacity-10 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
		>
			<MdOutlineLightMode />
		</button>
	);
};

export default ThemeBtn;
