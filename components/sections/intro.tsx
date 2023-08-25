import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const Intro = () => {
	return (
		<section
			id="home"
			className="max-w-[30rem] sm:max-w-[50rem] text-center mx-auto sm:mb-0 scroll-mt-[100rem]"
		>
			<h1 className="mb-10 mt-12 sm:mt-0 px-4 text-[1.6rem] font-medium !leading-[1.5] sm:text-4xl">
				Hello, I&#39;m Ahmed Wael
				<br />
				I&#39;m a Front-end developer. I enjoy building Sites and stuff for Web
			</h1>

			<div className="flex flex-col sm:flex-row items-center flex-wrap justify-center gap-4 px-4 text-lg font-medium">
				<Link
					href="#contact"
					className="group bg-gray-900 text-gray-300 hover:text-gray-100 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
				>
					Contact me
				</Link>

				<a
					className="group bg-white px-7 dark:hover:text-gray-200 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
					href="/Ahmed-Wael-Fawzy.pdf"
					download
				>
					Download CV{" "}
					<HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
				</a>

				<div className="flex gap-4 w-full items-center justify-center">
					<a
						className="bg-white p-4 text-gray-700 hover:text-gray-900 dark:hover:text-gray-200 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
						href="https://www.linkedin.com/in/ahmed-wael-2403291a8"
						target="_blank"
					>
						<BsLinkedin />
					</a>
					<a
						className="bg-white p-4 text-gray-700 hover:text-gray-900 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] dark:hover:text-gray-200 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
						href="https://github.com/JAHMD"
						target="_blank"
					>
						<FaGithubSquare />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Intro;
