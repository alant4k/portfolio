'use client';
import { Fragment, useRef } from 'react';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { useScroll, motion, useTransform } from 'framer-motion';

type TProps = (typeof projectsData)[number];
export default function Project({
	title,
	description,
	tags,
	imageUrl,
	source,
}: TProps) {
	const ref = useRef<HTMLAnchorElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['0 1', '1.33 1'],
	});
	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
	return (
		<motion.a
			ref={ref}
			href={source}
			target="_blank"
			style={{
				scale: scaleProgress,
				opacity: opacityProgress,
			}}
			className="group block mb-3 sm:mb-8 last:mb-0"
		>
			<section className="bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] sm:group-even:pl-8 hover:bg-gray-200 transition">
				<div className="py-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
					<h3 className="text-2xl font-semibold">{title}</h3>
					<p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
						{description}
					</p>
					<ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
						{tags.map((t, i) => (
							<li
								key={i}
								className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:text-white/70 rounded-full"
							>
								{t}
							</li>
						))}
					</ul>
				</div>
				<Image
					src={imageUrl}
					alt={title}
					quality={90}
					className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:-right-[initial] group-even:-left-40 transition group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2"
				/>
			</section>
		</motion.a>
	);
}
