import React from 'react';
import { MOVIE_DATA } from '@/constants/data';
import { notFound } from 'next/navigation';

interface ImagePageProps {
   params: { id: string }
}

function ImagePage({ params }: ImagePageProps) {
	const movieItemSlug = params.id;
	const newsItem = MOVIE_DATA.find(movieItem => movieItem.slug === movieItemSlug);

	if (!newsItem) {
		notFound();
	}

	return (
		<div className="fullscreen-image">
			<img src={`${newsItem.image}`} alt={newsItem.title} />
		</div>
	);
}

export default ImagePage;
