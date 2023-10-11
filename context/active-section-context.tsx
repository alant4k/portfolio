'use client';
import {
	ReactNode,
	useState,
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
} from 'react';
import type { SectionName } from '@/lib/types';

type TProps = { children: ReactNode };

type ActiveSectionContextType = {
	activeSection: SectionName;
	setActiveSection: Dispatch<SetStateAction<SectionName>>;
	timeLastClick: number;
	setTimeLastClick: Dispatch<SetStateAction<number>>;
};
export const ActiveSectionContext =
	createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({ children }: TProps) {
	const [activeSection, setActiveSection] = useState<SectionName>('Home');
	const [timeLastClick, setTimeLastClick] = useState(0);

	return (
		<ActiveSectionContext.Provider
			value={{
				activeSection,
				setActiveSection,
				timeLastClick,
				setTimeLastClick,
			}}
		>
			{children}
		</ActiveSectionContext.Provider>
	);
}

export function useActiveSectionContext() {
	const ctx = useContext(ActiveSectionContext);
	if (ctx === null) {
		throw new Error(
			'useActiveSectionContext must be used within a ActiveSectionContextProvider',
		);
	}

	return ctx;
}
