'use client';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import { FaPaperPlane } from 'react-icons/fa';
import { CgSpinner } from 'react-icons/cg';
import { contactFormSchema } from '@/utils/schema';
import { formData } from '@/lib/types';
import clsx from 'clsx';
import { useState } from 'react';
import { sendEmail } from '@/actions/sendEmail';

export default function ContactForm() {
	const [submitted, setSubmitted] = useState(false);

	async function handleSubmit(
		values: formData,
		actions: FormikHelpers<formData>,
	) {
		try {
			await sendEmail(values);
			actions.resetForm();
			actions.setSubmitting(false);
			setSubmitted(true);
		} catch (err) {
			actions.setSubmitting(false);
			actions.setErrors({
				global:
					'✖ Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde',
			});
		}
	}

	return (
		<>
			<Formik
				initialValues={{
					senderEmail: '',
					message: '',
					global: '',
				}}
				validationSchema={contactFormSchema}
				onSubmit={handleSubmit}
			>
				{({ errors, touched, isSubmitting }) => (
					<Form className="flex flex-col mt-10 dark:text-black">
						{submitted ? (
							<div className="success">✔ Sua mensagem partiu com sucesso</div>
						) : (
							<>
								<Field
									name="senderEmail"
									placeholder="Seu email"
									className="h-14 rounded-lg border border-black/10 dark:bg-white/80 dark:focus:bg-white/100 transition-all dark:outline-none px-4"
								/>
								{errors.senderEmail && touched.senderEmail ? (
									<div className="alert">{errors.senderEmail}</div>
								) : null}
								<Field
									name="message"
									placeholder="Escreva aqui sua mensagem"
									as="textarea"
									className="h-52 my-3 rounded-lg border border-black/10 dark:bg-white/80 dark:focus:bg-white/100 transition-all dark:outline-none p-4"
								/>
								{errors.message && touched.message ? (
									<div className="alert mb-4">{errors.message}</div>
								) : null}

								<button
									type="submit"
									disabled={isSubmitting}
									className={clsx(
										'group flex items-center justify-center gap-2 h-[3rem] w-[8rem] text-white rounded-full outline-none transition-all dark:bg-white/10',
										{
											'bg-gray-400 cursor-not-allowed': isSubmitting,
											'bg-gray-900 focus:scale-110 hover:scale-110 active:scale-110 hover:bg-gray-950':
												!isSubmitting,
										},
									)}
								>
									{isSubmitting ? (
										<div className="animate-spin">
											<CgSpinner className="text-2xl" />
										</div>
									) : (
										<>
											Enviar{' '}
											<FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
										</>
									)}
								</button>
								{errors.global ? (
									<div className="error mt-4">{errors.global}</div>
								) : null}
							</>
						)}
					</Form>
				)}
			</Formik>
		</>
	);
}
