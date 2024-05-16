'use client';

import { useState } from 'react';
import PokemonListContext from '../context/pokemonListContext';
import pokemonDataDefault from '@/features/Home/data/pokemonDataDefault';
import DeckListContext from '../context/deckListContext';
import { PokemonDataType } from '../api/types';

export default function ContextProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [pokemonData, setPokemonData] = useState<PokemonDataType[]>(
    pokemonDataDefault()
  );
  const [deckList, setDeckList] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <PokemonListContext.Provider
      value={{ pokemonData, setPokemonData, isLoading, setIsLoading }}>
      <DeckListContext.Provider value={{ list: deckList, setDeckList }}>
        {children}
      </DeckListContext.Provider>
    </PokemonListContext.Provider>
  );
}
