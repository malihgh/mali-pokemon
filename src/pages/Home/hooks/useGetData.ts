import { getPokemonList } from '@/core/api/getPokemonsList';
import { PokemonListType } from '@/core/api/types';
import { useCallback, useEffect, useState } from 'react';

export function useGetData() {
  const defaultData = [{ name: '', url: '' }];
  const [data, setData] = useState<PokemonListType[]>(defaultData);

  const getData = useCallback(async () => {
    const res = await getPokemonList();

    setData(res);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return data;
}
