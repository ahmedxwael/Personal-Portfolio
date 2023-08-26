"use client";

import { BiSolidUpArrow } from "react-icons/bi";

const ToTopBtn = () => {
	const handleClick = () => {
		scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	return (
		<button
			className="fixed bottom-20 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border-2 dark:border-white dark:border-opacity-10 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
			onClick={handleClick}
		>
			<BiSolidUpArrow />
		</button>
	);
};

export default ToTopBtn;
