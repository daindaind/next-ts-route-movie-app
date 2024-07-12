import React from 'react';
import { MOVIE_DATA } from '@/constants/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface MoviesDetailPageProps {
   params: { id: string }
}

function MoviesDetailPage({ params }: MoviesDetailPageProps) {
	const movieSlug = params.id;
	console.log(movieSlug)
	const movieItem = MOVIE_DATA.find(movieItem => movieItem.slug === movieSlug);

	if (!movieItem) {
		notFound();
	}

	return (
		<article className={'news-article'}>
			<header>
				<Link href={`/movies/${movieItem.slug}/image`}>
					<img src={`${movieItem.image}`} alt={movieItem.title} />
				</Link>
				<h1>{movieItem.title}</h1>
			</header>
		</article>
	);
}

export default MoviesDetailPage;
