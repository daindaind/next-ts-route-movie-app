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
					<Link href={`/movies/${movieData.slug}`} className='movie-list-link'>
						<img
							src={`${movieData.image}`}
							alt={movieData.title}
							width={250}
							height={350}
							style={{borderRadius: 5}}
						/>
						<span className='movie-title'>{movieData.title}</span>
						<p>{movieData.summary}</p>
					</Link>
				</li>
			))}
		</ul>
	);
}

export default MoviesList;
