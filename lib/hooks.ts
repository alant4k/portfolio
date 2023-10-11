import { useActiveSectionContext } from '@/context/active-section-context';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import type { SectionName } from './types';

export function useSectionView(sectionName: SectionName, threshold = 0.8) {
	const { ref, inView } = useInView({
		threshold,
	});
	const { setActiveSection, timeLastClick } = useActiveSectionContext();

	useEffect(() => {
		if (inView && Date.now() - timeLastClick > 1000) {
			setActiveSection(sectionName);
		}
	}, [inView, setActiveSection, timeLastClick, sectionName]);
	return { ref };
}
