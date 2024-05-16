import { createContext, Dispatch, SetStateAction } from 'react';
import pokemonDataDefault from '@/features/Home/data/pokemonDataDefault';
import { PokemonDataType } from '@/core/api/types';

type PokemonListContextType = {
  pokemonData: PokemonDataType[];
  setPokemonData: Dispatch<SetStateAction<PokemonDataType[]>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

const PokemonListContext = createContext<PokemonListContextType>({
  pokemonData: pokemonDataDefault(),
  setPokemonData: () => {},
  isLoading: false,
  setIsLoading: () => {}
});

export default PokemonListContext;
