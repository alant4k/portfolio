import React from 'react';

export default function Footer() {
	const today = new Date();
	const currentYear = today.getFullYear();
	return (
		<footer className="mb-10 px-10 text-center text-gray-500">
			<small className="mb-2 block text-xs">
				&copy; {currentYear} Alan Tanaka. Todos os direitos reservados.
			</small>
			<p className="text-xs">
				<span className="font-semibold">Sobre este site:</span> construído com
				React e Next.js (App Router & Server Actions), Typescript, Tailwind,
				Framer Motion, React Email & Resend.
			</p>
		</footer>
	);
}
