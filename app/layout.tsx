import Header from '@/components/header';
import './globals.css';
import { Nunito } from 'next/font/google';
import ActiveSectionContextProvider from '@/context/active-section-context';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata = {
	title: 'Alan Tanaka | Desenvolvedor',
	description:
		'Portfólio de Alan Tanaka, desenvolvedor frontend com 2 anos de experiência na criação de aplicações web.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt" className="!scroll-smooth">
			<body
				className={`${nunito.className} bg-gray-50 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 relative pt-28 sm:pt-36`}
			>
				<div className="bg-[#fbe2e3] dark:bg-[#946263] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
				<div className="bg-[#dbd7fb] dark:bg-[#676394] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
				<ThemeContextProvider>
					<ActiveSectionContextProvider>
						<Header />
						{children}
						<Footer />
					</ActiveSectionContextProvider>
					<ThemeSwitch />
				</ThemeContextProvider>
			</body>
		</html>
	);
}
