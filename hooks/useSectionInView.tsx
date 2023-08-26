"use client";

import { useActiveSectionContext } from "@/context/active-section-provider";
import { SectionName } from "@/types";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
	const { ref, inView } = useInView({
		threshold,
	});
	const [isVisible, setIsVisible] = useState(false);

	const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

	useEffect(() => {
		if (inView && Date.now() - timeOfLastClick > 1000) {
			setActiveSection(sectionName);
			setIsVisible(true);
		}
	}, [inView, setActiveSection, timeOfLastClick, sectionName]);

	return {
		ref,
		isVisible,
	};
}
