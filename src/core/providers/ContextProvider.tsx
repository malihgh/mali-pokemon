'use client';

import { useState } from 'react';
import PokemonListContext from '../context/pokemonListContext';
import { PokemonDataType } from '@/pages/Home/types';
import { pokemonDataDefault } from '@/pages/Home/data/pokemonDataDefault';

export default function ContextProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [pokemonData, setPokemonData] =
    useState<PokemonDataType[]>(pokemonDataDefault);
  return (
    <PokemonListContext.Provider value={{ pokemonData, setPokemonData }}>
      {children}
    </PokemonListContext.Provider>
  );
}
