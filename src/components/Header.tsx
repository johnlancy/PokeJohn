import localFont from '@next/font/local';

const pokefont = localFont({
	src: '../../public/fonts/Pokemon Solid.ttf',
	display: 'swap',
});

export default function Header() {
	return (
		<header
			className={`${pokefont.className} bg-green-600/70 w-full p-5 backdrop-blur-md position: fixed flex justify-center text-2xl tracking-widest`}
		>
			<p className='header-text-stroke text-4xl'>PokeJohn</p>
		</header>
	);
}
