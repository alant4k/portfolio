'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';

import pfp from '@/public/p2.jpg';
import { useSectionView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
	const { setActiveSection, setTimeLastClick } = useActiveSectionContext();
	const { ref } = useSectionView('Home');
	return (
		<section
			ref={ref}
			id="home"
			className="mb-28 max-w-[52rem] text-center sm:mb-0 scroll-mt-[100rem]"
		>
			<div className="flex items-center justify-center">
				<div className="relative">
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ type: 'tween', duration: 0.2 }}
					>
						<Image
							src={pfp}
							alt="Alan Tanaka portrait"
							quality="95"
							priority={true}
							className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
						/>
					</motion.div>
					<motion.span
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: 'spring',
							stiffness: 125,
							delay: 0.5,
							duration: 0.7,
						}}
						className="absolute bottom-0 right-0 text-3xl"
					>
						✌🏻
					</motion.span>
				</div>
			</div>
			<motion.h1
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				className="mb-10 mt-4 px-4 font-medium text-2xl !leading-[1.5]"
			>
				<span className="font-bold">Olá, eu sou Alan.</span> Desenvolvedor{' '}
				<span className="font-bold">Front-end</span> com{' '}
				<span className="font-bold">2 anos</span> de experiência em
				desenvolvimento de aplicações web. Minha especialidade é em{' '}
				<span className="underline">React(Next.js)</span>.
			</motion.h1>
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1 }}
				className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
			>
				<Link
					href="#contact"
					className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
					onClick={() => {
						setActiveSection('Contato');
						setTimeLastClick(Date.now());
					}}
				>
					Entre em contato{' '}
					<BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
				</Link>
				<a
					href="/AlanTanakaCV.pdf"
					download
					className="group bg-white dark:bg-white/10 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
				>
					Download CV{' '}
					<HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
				</a>
				<a
					href="https://www.linkedin.com/in/alantanakaa/"
					target="_blank"
					className="bg-white dark:bg-white/10 dark:text-white/60 p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10"
				>
					<BsLinkedin />{' '}
				</a>
				<a
					href="https://github.com/alant2031"
					target="_blank"
					className="bg-white dark:bg-white/10 dark:text-white/60 p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10"
				>
					<FaGithubSquare />
				</a>
			</motion.div>
		</section>
	);
}
