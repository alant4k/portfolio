'use client';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import { useSectionView } from '@/lib/hooks';

export default function About() {
	const { ref } = useSectionView('Sobre', 0.5);
	return (
		<motion.section
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
			id="about"
			ref={ref}
		>
			{/* Em 2017, enquanto trabalhava como técnico de suporte em uma empresa de software, um colega me enviou o livro "Curso Intensivo de Python" (ed. Novatec). Diante das tarefas rotineiras, comecei a lê-lo para passar o tempo. */}
			<SectionHeading>Minha História</SectionHeading>
			<p className="mb-3">
				Existiu um tempo em que não me via como programador. Em 2017, enquanto
				trabalhava como técnico de suporte em uma empresa de software, um colega
				me enviou o livro{' '}
				<span className="italic">Curso Intensivo de Python</span> (ed. Novatec).
				Diante das tarefas rotineiras, comecei a lê-lo para passar o tempo. Em
				pouco tempo, me vi fascinado por algo que antes era um enigma para mim,
				sobretudo porque a programação sempre pareceu um conceito obscuro. Desde
				aquele ponto, decidi seguir esse caminho e me tornar um profissional,
				investindo em cursos e leituras constantes. Em 2021, ingressei na{' '}
				<span className="underline">Trybe</span> e, em um ano, alcancei meu
				objetivo: iniciei no meu primeiro cargo como Desenvolvedor Front-end.
			</p>
			<p>
				Minhas stacks principais são{' '}
				<span className="font-semibold"> React, Next.js e Node.js</span>. Também
				estou familiarizado com{' '}
				<span className="font-semibold">
					TypeScript, Vue, MySQL, MongoDB, Python, Git, Docker e AWS
				</span>{' '}
				. Estou em constante busca de adquirir novos conhecimentos e
				colaborações. Atualmente estou procurando uma posição em tempo integral
				como <span className="font-semibold">Desenvolvedor Full Stack</span>.
			</p>

			<p>
				Quando não estou programando, gosto de ler, assistir filmes e ir à
				praia. Também gosto de esportes. Atualmente comecei a praticar jiu-jitsu
				como forma de me manter mais focado.
			</p>
		</motion.section>
	);
}
