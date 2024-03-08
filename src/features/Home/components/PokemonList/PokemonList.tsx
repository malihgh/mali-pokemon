import { FC } from 'react';
import PokemonCard from '@/core/components/PokemonCard';
import { PokemonDataType } from '@/core/api/types';

type Props = {
  data: PokemonDataType[];
  isSearch: boolean;
};
const PokemonList: FC<Props> = ({ data, isSearch }) => {
  return (
    <div className="w-full grid grid-cols-3 phone:grid-cols-1 tablet:grid-cols-2 px-10">
      {data?.map(item => (
        <div key={item.id}>
          <PokemonCard data={item} isSearched={isSearch} />
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
