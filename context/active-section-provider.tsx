"use client";

import { SectionName } from "@/types";
import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from "react";

type ContextValueType = {
	activeSection: SectionName;
	setActiveSection: Dispatch<SetStateAction<SectionName>>;
	timeOfLastClick: number;
	setTimeOfLastClick: Dispatch<SetStateAction<number>>;
};

const ActiveSectionContext = createContext<ContextValueType | null>(null);

export function useActiveSectionContext() {
	const context = useContext(ActiveSectionContext);

	if (context === null) {
		throw new Error(
			"useActiveSectionContext must be used within an ActiveSectionContextProvider"
		);
	}

	return context;
}

const ActiveSectionProvider = ({ children }: { children: ReactNode }) => {
	const [activeSection, setActiveSection] = useState<SectionName>("Home");
	const [timeOfLastClick, setTimeOfLastClick] = useState(0);

	return (
		<ActiveSectionContext.Provider
			value={{
				activeSection,
				setActiveSection,
				timeOfLastClick,
				setTimeOfLastClick,
			}}
		>
			{children}
		</ActiveSectionContext.Provider>
	);
};

export default ActiveSectionProvider;
