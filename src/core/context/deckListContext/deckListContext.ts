import { createContext, Dispatch, SetStateAction } from 'react';

type DeckListContextType = {
  list: number[] | [];
  setDeckList: Dispatch<SetStateAction<number[]>> | null;
};

const DeckListContext = createContext<DeckListContextType>({
  list: [],
  setDeckList: null
});

export default DeckListContext;
