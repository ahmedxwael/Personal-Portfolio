import { type } from "os";
import { links } from "./lib/data";

type ProjectType = {
	title: string;
	description: string;
	tags: string[];
	imageUrl: string;
	url: string;
	githubUrl: string;
	inProgress?: boolean;
};

type SkillType = string;

type SectionName = (typeof links)[number]["name"];
