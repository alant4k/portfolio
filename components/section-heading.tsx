import { ReactNode } from 'react';

type TProps = { children: ReactNode };

export default function SectionHeading({ children }: TProps) {
	return <h2 className="text-3xl font-medium capitalize mb-8">{children}</h2>;
}
