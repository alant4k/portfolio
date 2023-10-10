import { Fragment, useRef } from 'react';
import { projectsData } from '@/lib/data';

import SectionHeading from './section-heading';
import Project from './project';

export default function Projects() {
	return (
		<section>
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
