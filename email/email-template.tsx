import {
	Body,
	Head,
	Html,
	Preview,
	Text,
	Tailwind,
} from '@react-email/components';
import { formData } from '@/lib/types';

function EmailTemplate({ message }: formData) {
	return (
		<Html>
			<Head />
			<Tailwind>
				<Preview>Uma nova mensagem do seu website!</Preview>
				<Body className="bg-amber-100 w-[50%] p-4 rounded">
					<Text>{message}</Text>
				</Body>
			</Tailwind>
		</Html>
	);
}

export default EmailTemplate;
