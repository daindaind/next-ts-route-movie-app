import MoviesList from "@/components/movies-list";
import { MOVIE_DATA } from "@/constants/data";

export default function HomePage() {
	return (
		<div id="home">
			<h1>My Movies</h1>
			<MoviesList movies={MOVIE_DATA}/>
		</div>
	);
}
