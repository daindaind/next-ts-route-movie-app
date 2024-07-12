import React from 'react';
import MoviesList from '@/components/movies-list';
import { MOVIE_DATA } from '@/constants/data';

function LatestPage() {

	return (
		<div>
			<MoviesList movies={MOVIE_DATA}/>
		</div>
	);
}

export default LatestPage;
