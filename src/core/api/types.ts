export type PokemonListType = { name: string; url: string };

export type PokemonDetailsServerType = {
  id: number;
  name: string;
  base_experience: number;
  sprites: { front_default: string; back_default: string };
  abilities: { ability: { name: string }; is_hidden: boolean }[]; //only "is_hidden": false,
  types: { type: { name: string } }[];
  moves: { move: { name: string } }[];
  height: number;
  weight: number;
  stats: { base_stat: number; stat: { name: string } }[];
};
