import Link from 'next/link';
import React from 'react';

export default function Navbar() {
	return (
		<header id="main-header">
			<div id="logo">
				<Link href="/">Next Movies</Link>
			</div>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/movies">Movies</Link>
				</li>
			</ul>
		</header>
	);
}
