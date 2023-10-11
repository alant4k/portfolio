'use client';

import { Fragment } from 'react';
import { projectsData } from '@/lib/data';

import SectionHeading from './section-heading';
import Project from './project';
import { useSectionView } from '@/lib/hooks';

export default function Projects() {
	const { ref } = useSectionView('Projects', 0.5);
	return (
		<section ref={ref} id="projects" className="scroll-mt-28">
			<SectionHeading>My Projects</SectionHeading>{' '}
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
