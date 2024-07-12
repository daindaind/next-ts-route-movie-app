import { MOVIE_TYPE } from '@/types/type';
import Link from 'next/link';
import React from 'react';

interface MoviesListProps {
	movies: MOVIE_TYPE[];
}

function MoviesList({ movies }: MoviesListProps) {
	return (
		<ul id="news-list">
			{movies.map(movieData => (
				<li key={movieData.id}>
					<Link href={`/movies/${movieData.slug}`}>
						<img
							src={`${movieData.image}`}
							alt={movieData.title}
						/>
						<span>{movieData.title}</span>
					</Link>
				</li>
			))}
		</ul>
	);
}

export default MoviesList;
