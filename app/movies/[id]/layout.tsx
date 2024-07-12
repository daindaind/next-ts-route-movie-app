import React from 'react';

interface MovieDetailLayoutProps {
   children: React.ReactNode;
   modals: React.ReactNode;
}

function MovieDetailLayout({ children, modals }: MovieDetailLayoutProps) {
	return (
		<>
			{modals}
			{children}
		</>
	);
}

export default MovieDetailLayout;
