import axios from 'axios';
import { PokemonListType } from './types';

const findLimits = async (): Promise<number> => {
  let result = 0;
  const path = 'https://pokeapi.co/api/v2/pokemon';

  await axios
    .get(path)
    .then(res => {
      result = res.data.count;
    })
    .catch(error => console.error('Error in findLimits api: ', error));

  return result;
};

export const getPokemonList = async () => {
  let result: PokemonListType[] = [];
  const limits = await findLimits();

  const path = `https://pokeapi.co/api/v2/pokemon?limit=${limits}`;

  await axios
    .get(path)
    .then(res => {
      result = res.data.results;
    })
    .catch(error => console.error('Error in getPokemonList api: ', error));

  return result;
};
