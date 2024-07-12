import React from 'react';
import { MOVIE_DATA } from '@/constants/data';
import { notFound } from 'next/navigation';
import ModalBackdrop from '@/components/ModalBackDrop';

interface InterceptImagePageProps {
   params: { id: string }
}

function InterceptImagePage({ params }: InterceptImagePageProps) {
	const movieItemSlug = params.id;
	const newsItem = MOVIE_DATA.find(newItem => newItem.slug === movieItemSlug);

	if (!newsItem) {
		notFound();
	}

	return (
		<ModalBackdrop>
			<dialog className="modal" open>
				<h2>인터셉트 라우트</h2>
				<div className="fullscreen-image">
					<img src={`${newsItem.image}`} alt={newsItem.title} />
				</div>
			</dialog>
		</ModalBackdrop>
	);
}

export default InterceptImagePage;
