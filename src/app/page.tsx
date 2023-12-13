import axios from 'axios';
import Link from 'next/link';

export default async function Home() {
	type Pokemon = { name: string; url: string };
	const res = await axios.get('https://pokeapi.co/api/v2/pokemon');
	// console.log(res); visual data return
	const data = res.data;
	const pokemon: Pokemon[] = data.results;

	return (
		<div className='flex w-full gap-5 flex-col'>
			{pokemon.map((poke, index) => {
				return (
					<Link className=' hover:underline underline-offset-4' key={index} href={`individual-pokemon/${poke.name}`}>
						{poke.name}
					</Link>
				);
			})}
		</div>
	);
}
