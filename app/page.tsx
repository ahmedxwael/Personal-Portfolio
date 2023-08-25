import About from "@/components/sections/about";
import Intro from "@/components/sections/intro";
import LatestProjects from "@/components/sections/latest-projects";
import Skills from "@/components/sections/skills";

export default function Home() {
	return (
		<>
			<Intro />
			<About />
			<LatestProjects />
			<Skills />
		</>
	);
}
