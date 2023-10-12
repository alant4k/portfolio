'use server';

import { formData } from '@/lib/types';
import { Resend } from 'resend';
const resend = new Resend('re_gAAoQPM1_59rKSMjakSqDF5sR1RQJc2zC');

export async function sendEmail(data: formData) {
	try {
		const resend_data = await resend.emails.send({
			from: 'Acme <onboarding@resend.dev>',
			to: 'alanctnk@gmail.com',
			subject: 'Mensagem do seu Website',
			text: data.message,
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
