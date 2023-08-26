import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "About",
		hash: "#about",
	},
	{
		name: "Projects",
		hash: "#projects",
	},
	{
		name: "Skills",
		hash: "#skills",
	},
	{
		name: "Experience",
		hash: "#experience",
	},
	{
		name: "Contact",
		hash: "#contact",
	},
] as const;

export const about = [
	{
		p: "After graduating with a degree in communication and electronics engineering, I decided to pursue my passion for programming. I learned the fundamentals of programming, then I decided to be a frontend web developer.",
	},
	{
		p: "My core stack is React.js, Next.js, TypeScript, and Tailwind CSS and I am always looking to learn new technologies. I am currently looking for a full-time position as a front-end developer.",
	},
];

export const experiencesData = [
	{
		title: "Graduated from college",
		location: "Maadi, Egypt",
		description:
			"I graduated as a electronics and communications engineer after 5 years of studying.",
		icon: React.createElement(LuGraduationCap),
		date: "2018 - 2023",
	},
	{
		title: "Front-End React Developer",
		location: "Remote",
		description:
			"I took a virtual internship as a front-end react developer and I worked on adding new features to an existing projects and fixing some bugs and errors.",
		icon: React.createElement(CgWorkAlt),
		date: "2023",
	},
	{
		title: "Front-End Developer",
		location: "Cairo, Egypt",
		description:
			"I'm now building side projects to improve my skills and get some experience. I'm learning new technologies and looking for an opportunity in web development. My stack includes React, Next.js, TypeScript, Tailwind CSS, and MongoDB. I'm open to full-time and part-time opportunities.",
		icon: React.createElement(FaReact),
		date: "2023 - present",
	},
] as const;

export const projectsData = [
	{
		title: "Bloggify",
		description:
			"It's a blog website that represents posts written and published in a GitHub repository and displays them as an MDX files. Build with the latest feautres of next.js such as app router and server-side components",
		tags: [
			"React",
			"Next.js",
			"GitHub API",
			"MDX",
			"Tailwind CSS",
			"TypeScript",
		],
		imageUrl: "/assets/images/bloggify.png",
		url: "https://blog-nextjs-two-zeta.vercel.app",
		githubUrl: "https://github.com/JAHMD/Blog-Nextjs",
	},
	{
		title: "Promptopia",
		description:
			"It's an website used to generate and save AI prompts to be used when it's needed. Users can sign in with their google account and save their own prompts and other users promts.",
		tags: [
			"React",
			"TypeScript",
			"Next.js",
			"Tailwind css",
			"Next auth",
			"MongoDB",
		],
		imageUrl: "/assets/images/promptopia.png",
		url: "https://promptopia-alpha-three.vercel.app",
		githubUrl: "https://github.com/JAHMD/Promptopia",
	},
	{
		title: "Blog nook",
		description:
			"It is a website that allows individuals or businesses to create and publish their own blogs on the internet. Each user can create and manage their own blog and blog articles.",
		tags: ["React", "Clerk", "TypeScript", "Tailwind css", "Firebase"],
		imageUrl: "/assets/images/blog-nook.png",
		url: "https://blog-nook.vercel.app",
		githubUrl: "https://github.com/JAHMD/Blog-nook",
	},
	{
		title: "E-commerce Store",
		description:
			"It is a modern and user-friendly platform that allows customers to browse, search, and purchase products online. It incorporates various technologies to provide a seamless and interactive shopping experience.",
		tags: ["React", "APIs", "Redux", "Tailwind css", "TypeScript"],
		imageUrl: "/assets/images/ecommerce.png",
		url: "https://the-store-ecommerce.netlify.app",
		githubUrl: "https://github.com/JAHMD/E-Commerce",
	},
];

export const featuredProjects = [
	{
		title: "Bloggify",
		description:
			"It's a blog website that represents posts written and published in a GitHub repository and displays them as an MDX files. Build with the latest feautres of next.js such as app router and server-side components",
		tags: [
			"React",
			"Next.js",
			"GitHub API",
			"MDX",
			"Tailwind CSS",
			"TypeScript",
		],
		imageUrl: "/assets/images/bloggify.png",
		url: "https://blog-nextjs-two-zeta.vercel.app",
		githubUrl: "https://github.com/JAHMD/Blog-Nextjs",
	},
	{
		title: "Promptopia",
		description:
			"It's an website used to generate and save AI prompts to be used when it's needed. Users can sign in with their google account and save their own prompts and other users promts.",
		tags: [
			"React",
			"TypeScript",
			"Next.js",
			"Tailwind css",
			"Next auth",
			"MongoDB",
		],
		imageUrl: "/assets/images/promptopia.png",
		url: "https://promptopia-alpha-three.vercel.app",
		githubUrl: "https://github.com/JAHMD/Promptopia",
	},
	{
		title: "Blog nook",
		description:
			"It is a website that allows individuals or businesses to create and publish their own blogs on the internet. Each user can create and manage their own blog and blog articles.",
		tags: ["React", "Clerk", "TypeScript", "Tailwind css", "Firebase"],
		imageUrl: "/assets/images/blog-nook.png",
		url: "https://blog-nook.vercel.app",
		githubUrl: "https://github.com/JAHMD/Blog-nook",
	},
];

export const skillsData = [
	"Next.js",
	"React",
	"TypeScript",
	"JavaScript",
	"Tailwind CSS",
	"Shadcn/UI",
	"MongoDB",
	"Firebase",
	"Supabase",
	"Redux toolkit",
	"React Query",
	"React Form hook",
	"REST API",
	"JSON",
	"HTML",
	"CSS",
	"GitHub",
	"Git",
] as const;
