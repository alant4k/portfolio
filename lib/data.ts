import { createElement } from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { TbCertificate } from 'react-icons/tb';

import gpanel from '@/public/gp.png';
import cars from '@/public/cars.png';
import aapp from '@/public/aapp.png';
import node_api from '@/public/api.png';

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
		title: 'Formação Web Full Stack',
		location: 'Trybe',
		description:
			'Com mais de 1400 horas de aula em um ano, aprimorei fundamentos sobre aplicações web com HTML, CSS, JavaScript e React. No back-end, criei projetos com Node.js e Express, e trabalhei com bancos de dados relacionais e não relacionais. Além das habilidades técnicas, também desenvolvi soft skills importantes.',
		icon: createElement(TbCertificate),
		date: '2021 - 2022',
	},
	{
		title: 'Desenvolvedor Front-end',
		location: 'Ubistart',
		description:
			'Desenvolvimento de Interfaces de Usuário: Responsável por traduzir designs de UI/UX em código funcional utilizando linguagens como HTML, CSS e JavaScript.',
		icon: createElement(CgWorkAlt),
		date: '10/2021 - 06/2022',
	},
	{
		title: 'Desenvolvedor Front-end',
		location: 'WanSoft Brazil',
		description:
			'Integração com Back-end: Colabora com desenvolvedores back-end para integrar a interface com os sistemas e serviços necessários, utilizando APIs e outras tecnologias.',
		icon: createElement(CgWorkAlt),
		date: '02/2024 - 06/2024',
	},
] as const;

export const projectsData = [
	{
		title: 'Auth App',
		description:
			'App Next 14: autenticação, permissões, recuperação senha (email), verificação em duas etapas, login social (Google, Github), etc.',
		tags: [
			'Next',
			'React',
			'Tailwind',
			'shadcn/ui',
			'Prisma',
			'NextAuth',
			'Resend',
		],
		imageUrl: aapp,
		source: 'https://auth-app-189.vercel.app/',
	},
	{
		title: 'Car Showcase',
		description:
			'Website de exposição de carros com pesquisa por fabricante, modelo, ano e mais.',
		tags: ['Next', 'React', 'Typescript', 'Tailwind', 'CSS'],
		imageUrl: cars,
		source: 'https://car-showcase-zk.vercel.app/',
	},
	{
		title: 'GPanel',
		description:
			'Painel administrativo interativo com tabelas, formulários, validações, gráficos e uma variedade de elementos para uma experiência completa.',
		tags: ['React', 'Vite', 'Material UI', 'Formik', 'Nivo'],
		imageUrl: gpanel,
		source: 'https://gpanel-six.vercel.app/',
	},
	{
		title: 'Users API',
		description:
			'API com banco de dados. Ela possui métodos HTTP para criação, leitura, edição e remoção de recursos. Também contém testes automatizados. ',
		tags: ['Node', 'Typescript', 'Docker', 'MongoDB', 'Mocha'],
		imageUrl: node_api,
		source: 'https://github.com/alant2031/users-ts-api',
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
	'Vue',
	'Node.js',
	'Express',
	'Prisma',
	'MySQL',
	'MongoDB',
	'Axios',
	'Jest',
	'Mocha',
	'Python',
	'Django',
	'Flask',
	'GraphQL',
	'Git',
	'Docker',
	'Supabase',
	'AWS',
] as const;
