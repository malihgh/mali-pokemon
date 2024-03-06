'use client';

import { useContext, useState } from 'react';
import PokemonList from './components/PokemonList';
import Container from '@/core/components/Container';
import pokemonListContext from '@/core/context/pokemonListContext';
import SearchComponent from './components/SearchComponent';
import Text from '@/core/components/Text';
import classNames from 'classnames';

const Home = () => {
  const [search, setSearch] = useState('');
  const { pokemonData } = useContext(pokemonListContext);

  let isSearch = search.length > 2;

  const setSearching = (search: string) => {
    setSearch(search);
  };

  const visiblePokemon = isSearch
    ? pokemonData.filter(item =>
        item.name.toLowerCase().match(search.toLowerCase())
      )
    : search === ''
    ? pokemonData
    : [];

  const notFound = isSearch && visiblePokemon.length === 0;
  return (
    <Container
      className={classNames(
        (notFound || (!isSearch && search != '')) && 'h-screen'
      )}>
      <SearchComponent sendSearch={setSearching} />

      {notFound && (
        <div className="h-full flex items-center">
          <Text type="h3">Not Found!</Text>
        </div>
      )}

      {!isSearch && search != '' && (
        <div className="h-full flex items-center">
          <Text type="h3">We need more letters...</Text>
        </div>
      )}

      {visiblePokemon.length > 0 && (
        <PokemonList data={visiblePokemon} isSearch={isSearch} />
      )}
    </Container>
  );
};

export default Home;
