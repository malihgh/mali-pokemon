'use client';

import { FC, useContext } from 'react';
import Text from '../Text';
import deckListContext from '@/core/context/deckListContext';

type Props = {
  pokemonId: number;
};
const DeckButton: FC<Props> = ({ pokemonId }) => {
  const { list, setDeckList } = useContext(deckListContext);
  const isInDeck = list.filter(i => i === pokemonId).length > 0;

  const addToDeck = () => {
    if (list.length < 10) {
      setDeckList(pre => [...pre, pokemonId]);
    } else {
      alert(
        'You already have 10 cards, we will remove your first card from deck to add this one....Is it OK?'
      );
      removeFromDeck(list[0]);
      setDeckList(pre => [...pre, pokemonId]);
    }
  };

  const removeFromDeck = (id: number) => {
    const filteredNumbers = list.filter(item => item !== id);
    setDeckList(filteredNumbers);
  };
  return (
    <div>
      {isInDeck ? (
        <button
          className="bg-error px-3 py-1 rounded-md"
          type="button"
          onClick={() => removeFromDeck(pokemonId)}>
          <Text type="s" className="text-white">
            Remove from deck
          </Text>
        </button>
      ) : (
        <button
          className="bg-success px-3 py-1 rounded-md"
          type="button"
          onClick={addToDeck}>
          <Text type="s" className="text-white">
            Add to deck
          </Text>
        </button>
      )}
    </div>
  );
};

export default DeckButton;
