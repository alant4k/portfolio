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
			<SectionHeading>Minha História</SectionHeading>
			<p className="mb-3">
				Em 2017, enquanto trabalhava como técnico de suporte em uma empresa de
				software, criei um sistema gerenciamento de senhas simples executado
				através de uma interface de linha de comando. Desenvolvi como forma de
				solucionar uma necessidade que há tempos me incomodava de escrever
				minhas senhas em um papel ou salvar em um arquivo de texto.
			</p>
			<p className="mb-3">
				Quando finalmente concluí este projeto, fiquei intrigado com a realidade
				de que outras pessoas enfrentam dificuldades semelhantes diariamente.
				Afinal, a programação pode ser aplicada em várias soluções. Foi então
				que entendi meu propósito de me tornar um especialista nessa área. Em
				2021 iniciei no meu primeiro cargo como Desenvolvedor Front-end. Desde
				então busco me aprimorar para ser um profissional qualificado,
				investindo em cursos e leituras constantes.
			</p>
			<p className="mb-3"></p>
			<p>
				Minhas stacks principais são{' '}
				<span className="font-semibold"> React, Next.js e Node.js</span>. Também
				estou familiarizado com{' '}
				<span className="font-semibold">
					TypeScript, Vue, MySQL, MongoDB, Python, Git, Docker e AWS
				</span>{' '}
				. Estou em constante busca de adquirir novos conhecimentos e
				colaborações.
			</p>

			<p>
				Quando não estou programando, gosto de ler, assistir filmes e ir à
				praia. Também gosto de esportes. Atualmente comecei a praticar jiu-jitsu
				como forma de me manter mais focado.
			</p>
		</motion.section>
	);
}
