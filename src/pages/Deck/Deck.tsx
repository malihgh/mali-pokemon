'use client';

import Container from '@/core/components/Container';
import Text from '@/core/components/Text';
import PokemonCard from '@/core/components/PokemonCard';
import classNames from 'classnames';
import { useContext } from 'react';
import deckListContext from '@/core/context/deckListContext';
import pokemonListContext from '@/core/context/pokemonListContext';

import { PokemonDataType } from '../Home/types';

const Deck = () => {
  const { list } = useContext(deckListContext);
  const { pokemonData } = useContext(pokemonListContext);

  const isDeckEmpty = list.length === 0;

  const matchItems = () => {
    const result: PokemonDataType[] = [];

    if (!isDeckEmpty) {
      list.forEach(pokemonId => {
        const find = pokemonData.filter(i => i.id === pokemonId)[0];
        result.push(find);
      });
    }

    return result;
  };

  const countExperience = matchItems().reduce(
    (sum, item) => sum + item.base_experience,
    0
  );
  return (
    <Container className={classNames('px-10', isDeckEmpty && 'h-[82vh]')}>
      <Text type="h1">My Cards</Text>

      <div className="flex items-center mb-8">
        <Text type="h3">All of your Base Experiences:</Text>
        <Text
          type="normal"
          className="ml-7 p-3 bg-[#54b564] text-white rounded-full">
          {countExperience}
        </Text>
      </div>

      {isDeckEmpty ? (
        <div className="h-full flex items-center">
          <Text type="h3">Your Deck is Empty</Text>
        </div>
      ) : (
        <div className="h-full w-full grid grid-cols-3 phone:grid-cols-1 tablet:grid-cols-2">
          {matchItems().map(item => (
            <div key={item.id}>
              <PokemonCard data={item} isSearched={true} />
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default Deck;
