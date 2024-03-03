'use client';

import { useState } from 'react';
import Text from '@/core/components/Text';
import PokemonList from './components/PokemonList';
import Container from '@/core/components/Container';

const Home = () => {
  const [search, setSearch] = useState('');

  return (
    <Container>
      <Text type="h1">Pokédex</Text>
      <Text type="h3" className="mt-8 mb-2">
        Find your favorite Pokemon:
      </Text>

      <input
        type="text"
        placeholder="Search name..."
        className="p-2 border-solid border-2 border-gray-200 rounded-md w-2/3 mb-8"
        value={search}
        onChange={e => setSearch(e.target.value)}></input>

      <PokemonList />
    </Container>
  );
};

export default Home;
