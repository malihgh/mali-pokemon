import Container from '@/core/components/Container';
import Text from '@/core/components/Text';
import { pokemonData } from '../Home/data/pokemonData';
import PokemonCard from '@/core/components/PokemonCard';
import classNames from 'classnames';

const Deck = () => {
  const isDeckEmpty = !true;
  return (
    <Container className={classNames('px-10', isDeckEmpty && 'h-[82vh]')}>
      <Text type="h1">My Cards</Text>

      <div className="flex items-center mb-8">
        <Text type="h3">All of your Base Experiences:</Text>
        <Text
          type="normal"
          className="ml-7 p-3 bg-[#54b564] text-white rounded-full">
          467
        </Text>
      </div>

      {isDeckEmpty ? (
        <div className="h-full flex items-center">
          <Text type="h3">Your Deck is Empty</Text>
        </div>
      ) : (
        <div className="h-full w-full grid grid-cols-3 phone:grid-cols-1 tablet:grid-cols-2">
          {/* only on the Deck */}
          {[0, 1, 2].map(item => (
            <div key={item}>
              <PokemonCard data={pokemonData[0]} isSearched={true} />
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default Deck;
