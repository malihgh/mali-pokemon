import { createContext, Dispatch, SetStateAction } from 'react';
import { PokemonDataType } from '../../../pages/Home/types';
import { pokemonDataDefault } from '@/pages/Home/data/pokemonDataDefault';

type PokemonListContextType = {
  pokemonData: PokemonDataType[];
  setPokemonData: Dispatch<SetStateAction<PokemonDataType[]>>;
};

const PokemonListContext = createContext<PokemonListContextType>({
  pokemonData: pokemonDataDefault,
  setPokemonData: () => {}
});

export default PokemonListContext;
