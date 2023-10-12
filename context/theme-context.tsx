'use client';

import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react';

type TypeTheme = 'light' | 'dark';
type TProps = { children: ReactNode };
type ThemeContextType = {
	theme: TypeTheme;
	toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({ children }: TProps) {
	const [theme, setTheme] = useState<TypeTheme>('light');

	function toggleTheme() {
		if (theme === 'light') {
			setTheme('dark');
			window.localStorage.setItem('theme', 'dark');
			document.documentElement.classList.add('dark');
		} else {
			setTheme('light');
			window.localStorage.setItem('theme', 'light');
			document.documentElement.classList.remove('dark');
		}
	}

	useEffect(() => {
		const localTheme = window.localStorage.getItem('theme') as TypeTheme | null;
		if (!!localTheme) {
			setTheme(localTheme);
			if (localTheme === 'dark') document.documentElement.classList.add('dark');
		} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
			document.documentElement.classList.add('dark');
		}
	}, []);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const ctx = useContext(ThemeContext);
	if (ctx === null) {
		throw new Error('useTheme must be used within a ThemeContextProvider');
	}

	return ctx;
}
