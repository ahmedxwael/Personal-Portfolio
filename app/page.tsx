import Intro from "@/components/sections/Intro";
import About from "@/components/sections/about";
import MyProjects from "@/components/sections/my-projects";

export default function Home() {
	return (
		<>
			{/* Don't forget to add your cv */}
			<Intro />
			<About />
			<MyProjects />
		</>
	);
}
