import Navbar from "@/components/navbar";
import Experience from "@/components/sections/Experience";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Intro from "@/components/sections/intro";
import LatestProjects from "@/components/sections/latest-projects";
import Skills from "@/components/sections/skills";

export default function Home() {
	return (
		<main className="py-32 flex flex-col items-center">
			<Navbar />
			<Intro />
			<About />
			<LatestProjects />
			<Skills />
			<Experience />
			<Contact />
		</main>
	);
}
