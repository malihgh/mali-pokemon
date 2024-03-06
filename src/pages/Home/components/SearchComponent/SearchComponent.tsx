import Text from '@/core/components/Text';
import pokemonListContext from '@/core/context/pokemonListContext';
import { FC, useContext, useState } from 'react';
import { useGetData } from '../../hooks/useGetData';
import { PokemonListType } from '@/core/api/types';
import { getPokemonDetails } from '@/core/api/getPokemonDetails';

type Props = {
  sendSearch: (value: string) => void;
};

const SearchComponent: FC<Props> = ({ sendSearch }) => {
  const [search, setSearch] = useState('');
  const { pokemonData, setPokemonData } = useContext(pokemonListContext);
  const data = useGetData();

  const searchFunction = async (searchValue: string) => {
    const searchResult = data.filter(item =>
      item.name.toLowerCase().match(searchValue.toLowerCase())
    );

    const wanted: PokemonListType[] = [];
    searchResult.forEach(pokemon => {
      if (pokemonData.filter(i => i.name === pokemon.name).length === 0) {
        wanted.push(pokemon);
      }
    });

    const newSearchedData = await getPokemonDetails(wanted);

    setPokemonData(prev => [...prev, ...newSearchedData]);
  };

  const searching = (e: any) => {
    setSearch(e.target.value);
    sendSearch(e.target.value);
    if (e.target.value.length > 2) {
      searchFunction(e.target.value);
    }
  };
  return (
    <>
      <Text type="h1">Pokédex</Text>
      <Text type="h3" className="mt-8 mb-2">
        Find your favorite Pokemon:
      </Text>

      <input
        type="text"
        placeholder="Search pokemon name..."
        className="p-2 border-solid border-2 border-gray-200 rounded-md w-2/3 mb-8"
        value={search}
        onChange={e => searching(e)}></input>
    </>
  );
};

export default SearchComponent;
