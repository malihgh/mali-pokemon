import classNames from 'classnames';
import { FC } from 'react';
import Text from '../Text';
import DeckButton from '../DeckButton';
import Link from 'next/link';
import Image from 'next/image';
import { capitalizeName } from '@/core/api/transformer';
import { PokemonDataType } from '@/core/api/types';

type Props = {
  data: PokemonDataType;
  isSearched: boolean;
};

const PokemonCard: FC<Props> = ({ data, isSearched }) => {
  const { id, name, sprite_image, types, abilities, base_experience } = data;

  const idFillWithZero = '#' + String(id).padStart(4, '0');

  return (
    <div className="m-1 hover:animate-bounce">
      <Link href={`/info/${id}`}>
        <Image
          src={sprite_image.back}
          alt={'pic'}
          width={400}
          height={400}
          className="bg-gray-200 rounded-md mb-1"
        />
      </Link>

      <div className="pb-5 px-3">
        <Text type="s" className="text-sm font-flexoBold text-gray-400">
          {idFillWithZero}
        </Text>

        <Text type="h3" className="text-night font-flexoBold mt-3 mb-2">
          {capitalizeName(name)}
        </Text>

        {isSearched && (
          <div className="mb-2">
            <Text type="s" className="mb-1">
              Base experience: {base_experience}
            </Text>

            <Text type="s" className="flex">
              Abilities:
              {abilities.length > 0 ? (
                abilities?.map((ability, index) => (
                  <div key={index} className="pl-1">
                    {ability.name}
                  </div>
                ))
              ) : (
                <Text type="s" className="pl-1">
                  -
                </Text>
              )}
            </Text>
          </div>
        )}

        <div className="flex justify-start mb-3">
          {types?.map((type, index) => (
            <div
              key={index}
              className={classNames(
                `bg-${type.color}`,
                ' px-4 py-0.5 rounded-md mr-2'
              )}>
              <Text type="s" className="text-xs text-white">
                {type.name}
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
