"use client";

import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";

type Props = {
	children: ReactNode;
};

export type ThemeType = "dark" | "light";

type ThemeContextType = {
	theme: ThemeType;
	toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const useThemeContext = () => {
	const context = useContext(ThemeContext);

	if (context === null) {
		throw new Error(
			"useThemeContext must be used within an ThemeContextProvider"
		);
	}

	return context;
};

export const ThemeContextProvider = ({ children }: Props) => {
	const [theme, setTheme] = useState<ThemeType>("light");

	const toggleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			setTheme("light");
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	};

	useEffect(() => {
		const storedTheme = (localStorage.getItem("theme") as ThemeType) || null;

		if (
			(matchMedia("(prefers-color-scheme: dark)").matches && !storedTheme) ||
			storedTheme === "dark"
		) {
			setTheme("dark");
			document.documentElement.classList.add("dark");
		}
	}, []);
	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
