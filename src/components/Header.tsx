import localFont from '@next/font/local';
import Link from 'next/link';

const pokefont = localFont({
	src: '../../public/fonts/Pokemon Solid.ttf',
	display: 'swap',
});

export default function Header() {
	return (
		<header
			className={`${pokefont.className} bg-green-600/70 w-full p-5 backdrop-blur-md position: fixed flex justify-center text-2xl tracking-widest`}
		>
			<nav className='flex w-full max-w-7xl mx-auto'>
				<Link
					href={'/'}
					className='header-text-stroke text-4xl hover:scale-110 transition-all duration-300 ease-in-out'
				>
					PokeJohn
				</Link>
				<div className='flex-1' />
				<Link
					className='header-text-stroke text-3xl hover:scale-110 transition-all duration-300 ease-in-out'
					href={'/counter'}
				>
					Counter
				</Link>
			</nav>
		</header>
	);
}
