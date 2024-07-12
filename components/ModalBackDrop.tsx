'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

interface ModalBackdropProps {
   children: React.ReactNode;
}

function ModalBackdrop({ children }: ModalBackdropProps) {
	const router = useRouter();

	return (
		<div className="modal-backdrop" onClick={() => router.back()}>
			{children}
		</div>
	);
}

export default ModalBackdrop;
