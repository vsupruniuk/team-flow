import React from 'react';

export const HomePage: React.FC = () => {
	const hello = process.env.NEXT_PUBLIC_TEST || 'world';

	return <div>Hello {hello}</div>;
};
