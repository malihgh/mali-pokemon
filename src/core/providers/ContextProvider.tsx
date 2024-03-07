'use client';

import { useState } from 'react';
import PokemonListContext from '../context/pokemonListContext';
import pokemonDataDefault from '@/pages/Home/data/pokemonDataDefault';
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

  return (
    <PokemonListContext.Provider value={{ pokemonData, setPokemonData }}>
      <DeckListContext.Provider value={{ list: deckList, setDeckList }}>
        {children}
      </DeckListContext.Provider>
    </PokemonListContext.Provider>
  );
}
