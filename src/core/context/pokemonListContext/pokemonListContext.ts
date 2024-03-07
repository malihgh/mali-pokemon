import { createContext, Dispatch, SetStateAction } from 'react';
import pokemonDataDefault from '@/pages/Home/data/pokemonDataDefault';
import { PokemonDataType } from '@/core/api/types';

type PokemonListContextType = {
  pokemonData: PokemonDataType[];
  setPokemonData: Dispatch<SetStateAction<PokemonDataType[]>>;
};

const PokemonListContext = createContext<PokemonListContextType>({
  pokemonData: pokemonDataDefault(),
  setPokemonData: () => {}
});

export default PokemonListContext;
