import Navbar from "@/components/navbar";
import Experience from "@/components/sections/Experience";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import FeaturedProjects from "@/components/sections/featured-projects";
import Intro from "@/components/sections/intro";
import Skills from "@/components/sections/skills";

export default function Home() {
	return (
		<main className="py-32 flex flex-col items-center">
			<Navbar />
			<Intro />
			<About />
			<FeaturedProjects />
			<Skills />
			<Experience />
			<Contact />
		</main>
	);
}
