'use server';

import { formData } from '@/lib/types';
import { Resend } from 'resend';
import EmailTemplate from '@/email/email-template';
import { createElement } from 'react';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: formData) {
	try {
		const resend_data = await resend.emails.send({
			from: 'Acme <onboarding@resend.dev>',
			to: 'alanctnk@gmail.com',
			subject: '📩 alantd.vercel.app',
			react: createElement(EmailTemplate, data),
			reply_to: data.senderEmail,
		});
		if (!!resend_data.id) {
			return null;
		}
		throw new Error('Validation Error');
	} catch (error) {
		console.error(error);
		throw new Error('Server Error');
	}
}
