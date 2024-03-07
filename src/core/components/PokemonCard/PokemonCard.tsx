import { PokemonDataType } from '@/pages/Home/types';
import classNames from 'classnames';
import { FC } from 'react';
import Text from '../Text';
import DeckButton from '../DeckButton';
import Link from 'next/link';

type Props = {
  data: PokemonDataType;
  isSearched: boolean;
};

const PokemonCard: FC<Props> = props => {
  const { id, name, sprite_image, types, abilities, base_experience } =
    props.data;
  const { isSearched } = props;

  const capitalizeName = (name: string) =>
    name.charAt(0).toUpperCase() + name.slice(1);

  const idFillWithZero = '#' + String(id).padStart(4, '0');

  return (
    <div className="m-1 hover:animate-bounce">
      <Link href={`/info/${id}`}>
        {/* fix it later --> url */}
        <div
          className={classNames(
            'w-full h-56 bg-no-repeat bg-cover bg-gray-200 rounded-lg',
            `bg-[url('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/132.png')]`
          )}></div>
      </Link>

      <div className="pb-5 px-3">
        <Text type="s" className="text-sm font-flexoBold text-[#919191]">
          {idFillWithZero}
        </Text>

        <Text type="h3" className="text-[#000] font-flexoBold mt-3 mb-2">
          {capitalizeName(name)}
        </Text>

        {isSearched && (
          <>
            <Text type="s" className="mb-1">
              Base experience: {base_experience}
            </Text>

            {/* fix it later -> , between abilities */}
            <Text type="s" className="mb-2">
              Abilities:{' '}
              {abilities.map((ability, index) => (
                <>{capitalizeName(ability.name)}</>
              ))}
            </Text>
          </>
        )}

        <div className="flex justify-start mb-3">
          {types.map((type, index) => (
            <div
              key={index}
              className="px-4 py-0.5 rounded-md bg-gray-300 mr-2">
              <Text type="s" className="text-xs">
                {capitalizeName(type.name)}
              </Text>
            </div>
          ))}
        </div>

        {isSearched && <DeckButton pokemonId={id} />}
      </div>
    </div>
  );
};

export default PokemonCard;
