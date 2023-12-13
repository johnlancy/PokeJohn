export type Pokemon = {
	abilities: {
		ability: any; // You might want to replace "any" with the actual type for ability
		is_hidden: boolean;
		slot: number;
	}[];
	base_experience: number;
	forms: {
		name: string;
		url: string;
	}[];
	game_indices: {
		game_index: number;
		version: any; // Replace "any" with the actual type for version
	}[];
	height: number;
	held_items: any[]; // Replace "any" with the actual type for held_items
	id: number;
	is_default: boolean;
	location_area_encounters: string;
	moves: {
		move: any; // Replace "any" with the actual type for move
		version_group_details: any[]; // Replace "any" with the actual type for version_group_details
	}[];
	name: string;
	order: number;
	past_abilities: any[]; // Replace "any" with the actual type for past_abilities
	past_types: any[]; // Replace "any" with the actual type for past_types
	species: {
		name: string;
		url: string;
	};
	sprites: {
		back_default: string;
		back_female: string | null;
		back_shiny: string;
		back_shiny_female: string | null;
		front_default: string;
		front_female: string | null;
		front_shiny: string;
		front_shiny_female: string | null;
		other: {
			dream_world: any; // Replace "any" with the actual type for dream_world
			home: any; // Replace "any" with the actual type for home
			'official-artwork': any; // Replace "any" with the actual type for official-artwork
		};
		versions: {
			'generation-i': any; // Replace "any" with the actual type for generation-i
			'generation-ii': any; // Replace "any" with the actual type for generation-ii
			'generation-iii': any; // Replace "any" with the actual type for generation-iii
			'generation-iv': any; // Replace "any" with the actual type for generation-iv
			'generation-v': any; // Replace "any" with the actual type for generation-v
			'generation-vi': any; // Replace "any" with the actual type for generation-vi
			'generation-vii': any; // Replace "any" with the actual type for generation-vii
			'generation-viii': any; // Replace "any" with the actual type for generation-viii
		};
	};
	stats: {
		base_stat: number;
		effort: number;
		stat: any; // Replace "any" with the actual type for stat
	}[];
	types: {
		slot: number;
		type: any; // Replace "any" with the actual type for type
	}[];
	weight: number;
};
