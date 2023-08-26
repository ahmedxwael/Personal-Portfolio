import ThemeBtn from "@/components/ThemeBtn";
import ToTopBtn from "@/components/ToTopBtn";
import Footer from "@/components/footer";
import ActiveSectionProvider from "@/context/active-section-provider";
import { ThemeContextProvider } from "@/context/theme-context";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
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
		<html lang="en" className="!scroll-smooth">
			<body
				className={`${inter.className} px-4 bg-gray-50 text-gray-950 relative dark:bg-gray-950 dark:text-gray-200/95`}
			>
				<div
					aria-hidden="true"
					className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#94626390]"
				></div>
				<div
					aria-hidden="true"
					className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#67639490]"
				></div>
				<ActiveSectionProvider>
					<ThemeContextProvider>
						{children}
						<Footer />
						<div>
							<ToTopBtn />
							<ThemeBtn />
						</div>
						<Toaster />
					</ThemeContextProvider>
				</ActiveSectionProvider>
			</body>
		</html>
	);
}
