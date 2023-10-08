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
		location: "Thebes academy - Maadi, Egypt",
		description:
			"I graduated as a electronics and communications engineer after 5 years of studying.",
		icon: React.createElement(LuGraduationCap),
		date: "Sep 2018 - Jul 2023",
	},
	{
		title: "Front-End React Developer",
		location: "Intern2Grow - Remote",
		description:
			"I took a virtual internship as a front-end react developer and I worked on adding new features to an existing projects and fixing some bugs and errors.",
		icon: React.createElement(CgWorkAlt),
		date: "May 2023 - Jul 2023",
	},
	{
		title: "Front-End Developer",
		location: "Cairo, Egypt",
		description:
			"I build side projects to improve my skills and gain more experience. I learned new technologies such as Next.js and mongoDB. My stack includes React, Next.js, TypeScript, Tailwind CSS, and MongoDB.",
		icon: React.createElement(FaReact),
		date: "Jul 2023 - Aug 2023",
	},
	{
		title: "Front-End Developer",
		location: "Crafted Internet - Cairo, Egypt",
		description:
			"My responsibility is to create responsive and good-looking web applications from scratch until they're ready to be used by the client. My job depends on communicating with other developers and designers to achieve our goals by creating a product that includes great performance and a great user experience.",
		icon: React.createElement(FaReact),
		date: "Aug 2023 - Present",
	},
] as const;

export const projectsData = [
	{
		title: "Chat loom",
		description:
			"It's a chat application built with next.js, typescript, tailwindcss and socket.io.",
		tags: [
			"React",
			"Next.js",
			"Next Auth",
			"Tailwind CSS",
			"TypeScript",
			"Shadcn/ui",
			"MongoDB",
			"Prisma",
		],
		imageUrl: "/assets/images/chat-loom.png",
		url: "",
		githubUrl: "https://github.com/JAHMD/Chat-Loom",
		inProgress: true,
	},
	{
		title: "TopicHub",
		description:
			"It is a website that allows users in tech or any field to write and publish articles about general stuff to share their knowledge with other people and help them learn new topics.",
		tags: [
			"React",
			"Next.js",
			"Next Auth",
			"Tailwind CSS",
			"TypeScript",
			"MongoDB",
		],
		imageUrl: "/assets/images/topic-hub.png",
		url: "https://rest-api-nu-six.vercel.app",
		githubUrl: "https://github.com/JAHMD/REST-API",
	},
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
	{
		title: "Where in the world",
		description:
			"The idea of the app is inspired from a front-end mentor challenge. It is an app to show the world countries and filter them according to their region with displaying some details about each one of them, and it also has a theme changer.",
		tags: ["React", "APIs", "React Router", "Tailwind css", "JavaScript"],
		imageUrl: "/assets/images/countries-screen.png",
		url: "https://r-where-in-the-world.netlify.app",
		githubUrl: "https://github.com/JAHMD/Where_In_The_World-React#built-with",
	},
	{
		title: "Van Life",
		description:
			"Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.",
		tags: ["React", "Firebase", "React Router", "CSS", "JavaScript"],
		imageUrl: "/assets/images/van-life.png",
		url: "https://main--vans-life-app.netlify.app",
		githubUrl: "https://github.com/JAHMD/Van_Life",
	},
	{
		title: "Article Summarizer",
		description:
			"It's an Article Summarizer Application using OpenAI's GPT model.",
		tags: ["React", "APIs", "Tailwind CSS", "OpenAI", "JavaScript"],
		imageUrl: "/assets/images/open-ai.png",
		url: "https://openai-article-summerizer.netlify.app",
		githubUrl: "https://github.com/JAHMD/OpenAI_Article_Summarizer",
	},
	{
		title: "Build Better",
		description:
			"It's an app has built to help you to get some of your helper tools from one place.",
		tags: [
			"React",
			"React Router",
			"Tailwind CSS",
			"LocalStorage",
			"JavaScript",
		],
		imageUrl: "/assets/images/build-better.png",
		url: "https://jahmd.github.io/Build_Better",
		githubUrl: "https://github.com/JAHMD/Build_Better",
	},
	{
		title: "Rock, Paper and Scissors",
		description:
			"It's a solution to the Rock, Paper, Scissors challenge on Frontend Mentor, and it's a Rock, paper and scissors game.",
		tags: ["Tailwind CSS", "HTML", "CSS", "JavaScript"],
		imageUrl: "/assets/images/rock-paper-scissors.png",
		url: "https://jahmd.github.io/Rock_Paper_Scissors",
		githubUrl: "https://github.com/JAHMD/Rock_Paper_Scissors",
	},
	{
		title: "Shortly",
		description:
			"It's an application that allows you to shorten any valid URL, see a list of your shortened links and copy the shortened link to your clipboard by a single click.",
		tags: ["JavaScript", "Tailwind CSS", "LocalStorage", "HTML", "CSS", "APIs"],
		imageUrl: "/assets/images/shorten-url.png",
		url: "https://jahmd.github.io/URL_shortening",
		githubUrl: "https://github.com/JAHMD/URL_shortening",
	},
	{
		title: "Repos Fetcher",
		description:
			"It's an application to fetch repos from github to any user and show them up to the page.",
		tags: ["JavaScript", "CSS", "HTML", "CSS", "APIs"],
		imageUrl: "/assets/images/fetch-repos.png",
		url: "https://jahmd.github.io/Fetch_github_repos_app",
		githubUrl: "https://github.com/JAHMD/Fetch_github_repos_app",
	},
];

export const featuredProjects = [
	{
		title: "TopicHub",
		description:
			"It is a website that allows users in tech or any field to write and publish articles about general stuff to share their knowledge with other people and help them learn new topics.",
		tags: [
			"React",
			"Next.js",
			"Next Auth",
			"Tailwind CSS",
			"TypeScript",
			"REST API",
		],
		imageUrl: "/assets/images/topic-hub.png",
		url: "https://rest-api-nu-six.vercel.app",
		githubUrl: "https://github.com/JAHMD/REST-API",
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
