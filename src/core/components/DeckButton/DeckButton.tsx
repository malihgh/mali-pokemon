'use client';

import { FC } from 'react';
import Text from '../Text';

type Props = {
  pokemonId: number;
};
const DeckButton: FC<Props> = ({ pokemonId }) => {
  //do sth base pokemonId
  const isInDeck = false;

  return (
    <div>
      {isInDeck ? (
        <button
          className="bg-[#E3350D;] px-3 py-1 rounded-md"
          type="button"
          onClick={() => console.log('Remove from deck')}>
          <Text type="s" className="text-white">
            Remove from deck
          </Text>
        </button>
      ) : (
        <button
          className="bg-[#54b564] px-3 py-1 rounded-md"
          type="button"
          onClick={() => console.log('Add to deck')}>
          <Text type="s" className="text-white">
            Add to deck
          </Text>
        </button>
      )}
    </div>
  );
};

export default DeckButton;
