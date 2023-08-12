import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Ahmed | Personal Portfolio",
	description: "Ahmed is a Frontend web developer.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} bg-gray-50 text-gray-950 relative dark:bg-gray-950 dark:text-gray-50 dark:text-opacity-90`}
			>
				<div className="main" aria-hidden="true">
					<div
						aria-hidden="true"
						className="bg-[#ff3a3d50] absolute top-[-5rem] -z-10 right-[5rem] h-[40rem] w-[40rem] rounded-full blur-[15rem] sm:w-[68.75rem] dark:bg-[#ff424540]"
					></div>
					<div
						aria-hidden="true"
						className="bg-[#3c1eff50] absolute bottom-[-5rem] -z-10 left-[-35rem] h-[30rem] w-[50rem] rounded-full blur-[15rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#4f3fff40]"
					></div>
				</div>
				<main className="pt-28 sm:pt-36">{children}</main>
			</body>
		</html>
	);
}
