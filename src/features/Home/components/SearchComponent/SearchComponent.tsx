import Text from '@/core/components/Text';
import pokemonListContext from '@/core/context/pokemonListContext';
import { ChangeEvent, FC, useContext, useState } from 'react';
import useGetData from '../../hooks/useGetData';
import { PokemonListType } from '@/core/api/types';
import { getPokemonDetails } from '@/core/api/getPokemonDetails';
import limitStartSearching from '../../constant/constant';

type Props = {
  sendSearch: (value: string) => void;
};

const SearchComponent: FC<Props> = ({ sendSearch }) => {
  const [search, setSearch] = useState('');
  const { pokemonData, setPokemonData, setIsLoading } =
    useContext(pokemonListContext);
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
    setIsLoading(false);
    setPokemonData(prev => [...prev, ...newSearchedData]);
  };

  const searching = (event: ChangeEvent<HTMLInputElement>) => {
    const newSearch = event.target.value;

    setSearch(newSearch);
    sendSearch(newSearch);

    if (newSearch.length > limitStartSearching()) {
      setIsLoading(true);
      searchFunction(newSearch);
    }
  };
  return (
    <>
      <Text type="h1">Pokédex</Text>
      <Text type="h3" className="mt-8 mb-2">
        Find your favorite Pokémon:
      </Text>

      <input
        type="text"
        placeholder="Search Pokémon name..."
        className="p-2 border-solid border-2 border-gray-200 rounded-md w-2/3 mb-8"
        value={search}
        onChange={e => searching(e)}></input>
    </>
  );
};

export default SearchComponent;
