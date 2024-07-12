import React from 'react';
import Link from 'next/link';
import { MOVIE_DATA } from '@/constants/data';

interface FilteredNewsPageProps {
   params: { filter: string }
}

function FilteredNewsPage({ params }: FilteredNewsPageProps) {
	const newsYear = params.filter;

	return (
		<header id="archive-header">
			<nav>
				<ul>
					{MOVIE_DATA.map(movie => (
						<li key={movie.id}>
							<Link href={`/archive/${movie.slug}`}>{movie.slug}</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}

export default FilteredNewsPage;
