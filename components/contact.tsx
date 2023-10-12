'use client';

import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import { useSectionView } from '@/lib/hooks';
import ContactForm from './form';

export default function Contact() {
	const { ref } = useSectionView('Contato');
	return (
		<motion.section
			ref={ref}
			id="contact"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.8 }}
			viewport={{ once: true }}
			className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
		>
			<SectionHeading>Entre em contato</SectionHeading>
			<p className="text-gray-700 -mt-6">
				Entre em contato comigo diretamente no{' '}
				<a href="https://t.me/alantnk" className="font-bold text-blue-400">
					Telegram
				</a>{' '}
				ou através deste formulário.
			</p>
			<ContactForm />
		</motion.section>
	);
}
