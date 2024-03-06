import { createContext, Dispatch, SetStateAction } from 'react';

type DeckListContextType = {
  list: number[] | [];
  setDeckList: Dispatch<SetStateAction<number[]>>;
};

const DeckListContext = createContext<DeckListContextType>({
  list: [],
  setDeckList: () => {}
});

export default DeckListContext;
