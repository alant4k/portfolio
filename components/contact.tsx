'use client';

import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import { useSectionView } from '@/lib/hooks';
import ContactForm from './form';

export default function Contact() {
	const { ref } = useSectionView('Contact');
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
			<SectionHeading>Contact me</SectionHeading>
			<p className="text-gray-700 -mt-6">
				Please contact me directly at{' '}
				<a href="https://t.me/alantnk" className="font-bold text-blue-400">
					Telegram
				</a>{' '}
				or through this form.
			</p>
			<ContactForm />
		</motion.section>
	);
}
