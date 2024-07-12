import React from 'react';
import MoviesList from '@/components/movies-list';
import { MOVIE_DATA } from '@/constants/data';

function MoviesPage() {
	return (
		<div>
			<h1>movies page</h1>
			<MoviesList movies={MOVIE_DATA} />
		</div>
	);
}

export default MoviesPage;
