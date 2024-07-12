import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata = {
	title: 'Next.js Page Routing & Rendering',
	description: 'Learn how to route to different pages.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body>
				<div id="page">
					<Navbar />
					{children}
				</div>
			</body>
		</html>
	);
}
