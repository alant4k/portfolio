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
		<Tailwind>
			<Html>
				<Head />
				<Preview>Uma nova mensagem do seu website!</Preview>
				<Body className="w-full">
					<div className="w-5/6 sm:w-4/6 bg-amber-100 rounded flex flex-wrap p-4">
						<Text className="self-start">{message}</Text>
					</div>
				</Body>
			</Html>
		</Tailwind>
	);
}

export default EmailTemplate;
