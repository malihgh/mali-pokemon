export type PokemonDataStatType = {
  base_stat: number;
  name: string;
};

export type PokemonDataType = {
  id: number;
  name: string;
  base_experience: number;
  sprite_image: { front: string; back: string };
  abilities: { name: string }[]; //only "is_hidden": false,
  types: { name: string }[];
  moves: { name: string }[];
  height: number;
  weight: number;
  stats: PokemonDataStatType[];
};
