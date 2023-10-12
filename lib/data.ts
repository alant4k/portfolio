import { createElement } from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { TbCertificate } from 'react-icons/tb';

import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';

export const links = [
	{
		name: 'Home',
		hash: '#home',
	},
	{
		name: 'Sobre',
		hash: '#about',
	},
	{
		name: 'Projetos',
		hash: '#projects',
	},
	{
		name: 'Habilidades',
		hash: '#skills',
	},
	{
		name: 'Experiências',
		hash: '#experience',
	},
	{
		name: 'Contato',
		hash: '#contact',
	},
] as const;

export const experiencesData = [
	{
		title: 'Web Moderno com JavaScript',
		location: 'Udemy',
		description:
			'Aprendi os fundamentos de JavaScript, Node.js, HTML5, CSS3, Angular, React e Vue. Também aprendi a desenvolver aplicativos backend eficientes com Node.js e Express, e a trabalhar com bancos de dados relacionais e não relacionais.',
		icon: createElement(TbCertificate),
		date: '2019',
	},
	{
		title: 'Formação Web Fullstack',
		location: 'Trybe',
		description:
			'Com mais de 1400 horas de aula em um ano, aprimorei meu entendimento sobre aplicações web com HTML, CSS, JavaScript e React. No back-end, criei projetos com Node.js e Express, e trabalhei com bancos de dados relacionais e não relacionais. Também adquiri conhecimentos sobre testes com Mocha, Chai e Python. Além das habilidades técnicas, também desenvolvi soft skills importantes, como trabalho em equipe, comunicação eficaz e resolução de problemas.',
		icon: createElement(TbCertificate),
		date: '2021 - 2022',
	},
	{
		title: 'Desenvolvedor Front-end',
		location: 'Ubistart',
		description:
			'Desenvolvimento de código. Design responsivo. Otimizar o desempenho das páginas web. Trabalhar em estreita colaboração com designers, desenvolvedores e outros membros da equipe para garantir a integração adequada da aplicação.',
		icon: createElement(CgWorkAlt),
		date: '10/2021 - 06/2022',
	},
	{
		title: 'Desenvolvedor Back-end',
		location: 'Grupo Fornecedora',
		description:
			'Trabalhar com APIs de terceiros, integrando-as ao aplicativo para acessar dados externos ou serviços. Realizar manutenção contínua do aplicativo, corrigindo problemas, fazendo melhorias e atualizando recursos conforme necessário. Comunicar-se de forma eficaz com a equipe e documentar as decisões e processos relacionados ao desenvolvimento.',
		icon: createElement(CgWorkAlt),
		date: '06/2022 - 01/2023',
	},
] as const;

export const projectsData = [
	{
		title: 'CorpComment',
		description:
			'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
		tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
		imageUrl: corpcommentImg,
	},
	{
		title: 'rmtDev',
		description:
			'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
		tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
		imageUrl: rmtdevImg,
	},
	{
		title: 'Word Analytics',
		description:
			'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
		tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
		imageUrl: wordanalyticsImg,
	},
] as const;

export const skillsData = [
	'HTML',
	'CSS',
	'JavaScript',
	'TypeScript',
	'React',
	'Next.js',
	'Tailwind',
	'Node.js',
	'Express',
	'Prisma',
	'MySQL',
	'MongoDB',
	'Axios',
	'GraphQL',
	'Mocha',
	'Python',
	'Django',
	'Flask',
	'Git',
	'Docker',
	'AWS',
] as const;
