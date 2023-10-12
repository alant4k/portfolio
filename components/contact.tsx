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
			{/* <form
				action={async (formData) => {
					console.log(formData.get('senderEmail'));
					console.log(formData.get('senderMessage'));
				}}
				className="flex flex-col mt-10"
			>
				<input
					placeholder="Seu email"
					type="email"
					name="senderEmail"
					required
					maxLength={100}
					className="h-14 rounded-lg border border-black/10 px-4"
				/>
				<textarea
					placeholder="Sua mensagem"
					name="senderMessage"
					required
					maxLength={500}
					className="h-52 my-3 rounded-lg border border-black/10 p-4"
				/>
				<button
					type="submit"
					className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-110 hover:bg-gray-950"
				>
					Submit{' '}
					<FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{' '}
				</button>
			</form> */}
		</motion.section>
	);
}
