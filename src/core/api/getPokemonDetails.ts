import axios from 'axios';
import { transformPokemonDetails } from './transformer';
import pokemonDataDefault from '@/features/Home/data/pokemonDataDefault';
import { PokemonDataType, PokemonListType } from './types';

const getPokemonDetail = async (url: string): Promise<PokemonDataType> => {
  let result: PokemonDataType = pokemonDataDefault()[0];

  await axios
    .get(url)
    .then(res => {
      result = transformPokemonDetails(res.data);
    })
    .catch(error => console.error('Error in getPokemonDetails api: ', error));

  return result;
};

export const getPokemonDetails = async (props: PokemonListType[]) => {
  let result: PokemonDataType[] = pokemonDataDefault();
  result = [];

  for (let i = 0; i < props.length; i++) {
    const res = await getPokemonDetail(props[i].url);
    result.push(res);
  }

  return result;
};
