'use client';

import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import SectionHeading from './section-heading';
import { Fragment } from 'react';
import { useSectionView } from '@/lib/hooks';

export default function Experience() {
	const { ref } = useSectionView('Experiências', 0.4);
	return (
		<section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb40">
			<SectionHeading>Experiências</SectionHeading>
			<VerticalTimeline animate lineColor="">
				{experiencesData.map((item, i) => (
					<Fragment key={i}>
						<VerticalTimelineElement
							visible
							contentStyle={{
								background: '#f3f4f6',
								boxShadow: 'none',
								border: '1px solid rgba(0,0,0,0.05)',
								padding: '1.3rem',
							}}
							contentArrowStyle={{
								borderRight: '0.4rem solid #9ca3af',
							}}
							date={item.date}
							icon={item.icon}
							iconStyle={{
								background: 'white',
								fontSize: '1.5rem',
							}}
						>
							<h3 className="!font-semibold capitalize">{item.title}</h3>
							<p className="!font-normal !mt-0">{item.location}</p>
							<p className="!mt-0 !font-light text-gray-700">
								{item.description}
							</p>
						</VerticalTimelineElement>
					</Fragment>
				))}
			</VerticalTimeline>
		</section>
	);
}
