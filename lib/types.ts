import { links } from './data';

export type SectionName = (typeof links)[number]['name'];
export type formData = { senderEmail: string; message: string; global: string };
