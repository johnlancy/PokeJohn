import type { Pokemon } from '@/app/types/pokemon';
import axios from 'axios';

export default async function Page({ params }: { params: { id: string } }) {
	const { id } = params;

	const res = await axios.get('https://pokeapi.co/api/v2/pokemon/' + id);
	const data: Pokemon = res.data;
	// console.log(data);
	const name = id;
	const types = data.types;
	const weight = data.weight;
	return (
		<div>
			<p>{name}</p>
			<p>{weight}</p>
			<div>
				{types.map((type, index) => {
					return <p key={index}>{type.type.name}</p>;
				})}
			</div>
		</div>
	);
}
