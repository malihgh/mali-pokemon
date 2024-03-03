import PokemonCard from '@/core/components/PokemonCard';
import { pokemonData } from '../../data/pokemonData';

const PokemonList = () => {
  return (
    <div className="w-full grid grid-cols-3 phone:grid-cols-1 px-10">
      {[0, 1, 2, 3, 4, 5].map(item => (
        <div key={item}>
          <PokemonCard data={pokemonData[0]} isSearched={false} />
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
