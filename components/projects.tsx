'use client';

import { Fragment } from 'react';
import { projectsData } from '@/lib/data';

import SectionHeading from './section-heading';
import Project from './project';
import { useSectionView } from '@/lib/hooks';

export default function Projects() {
	const { ref } = useSectionView('Projetos', 0.5);
	return (
		<section ref={ref} id="projects" className="scroll-mt-28 mb-28">
			<SectionHeading>Projetos</SectionHeading>{' '}
			<div>
				{projectsData.map((p, i) => (
					<Fragment key={i}>
						<Project {...p} />
					</Fragment>
				))}
			</div>
		</section>
	);
}
