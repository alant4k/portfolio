'use client';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import { useSectionView } from '@/lib/hooks';

export default function About() {
	const { ref } = useSectionView('Sobre');
	return (
		<motion.section
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
			id="about"
			ref={ref}
		>
			<SectionHeading>Minha História</SectionHeading>
			<p className="mb-3">
				Existiu um tempo em que não me via como programador. Em 2017, quando
				trabalhava como técnico de suporte em uma empresa de software, um colega
				me enviou um livro em formato PDF sobre{' '}
				<span className="font-semibold">Python</span>. Meu trabalho se resumia a
				atividades tediosas, então, como forma de passar o tempo, comecei a ler
				esse livro (<span className="italic">Curso Intensivo de Python</span> ,
				ed. Novatec). Em menos de dois meses, lendo em média dez páginas por
				dia, me vi fascinado por algo que antes era obscuro para mim, até porque
				nunca entendi o que programação representava. A partir daquele momento,
				decidi trilhar esse caminho e me profissionalizar por meio de cursos e
				mais leituras. Em 2021, ingressei na{' '}
				<span className="underline">Trybe</span> e, em um ano, alcancei meu
				objetivo: iniciei no meu primeiro cargo como Desenvolvedor Front-end.
			</p>
			<p>
				Minhas stacks principais são{' '}
				<span className="font-semibold"> React, Next.js, Node.js</span>. Também
				estou familiarizado com{' '}
				<span className="font-semibold">
					Vue, TypeScript, MongoDB, Python, Git, Docker e AWS
				</span>{' '}
				. Estou em constante busca de adquirir novos conhecimentos e
				colaborações. Atualmente estou procurando uma posição em tempo integral
				como <span className="font-semibold">Desenvolvedor Fullstack</span> .
			</p>

			<p>
				Quando não estou programando, gosto de ler, assistir filmes e no tempo
				livre tomar um banho de mar. Também gosto de esportes. Atualmente
				comecei a praticar jiu-jitsu como forma de manter me mais focado.
			</p>
		</motion.section>
	);
}
