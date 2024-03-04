import Container from '@/core/components/Container';
import Text from '@/core/components/Text';
import { PokemonDataType } from '../Home/types';
import { FC } from 'react';
import Image from 'next/image';
import ChartContainer from './components/ChartContainer';
import { pokemonData } from '../Home/data/pokemonData';
import DeckButton from '@/core/components/DeckButton';

type Props = {
  data: PokemonDataType;
};

const Info: FC<Props> = props => {
  const { id, name, sprite_image, types, abilities, height, weight, moves } =
    props.data;

  const capitalizeName = (name: string) =>
    name.charAt(0).toUpperCase() + name.slice(1);

  const idFillWithZero = '#' + String(id).padStart(4, '0');
  return (
    <Container className="px-10">
      <div className="w-full flex phone:flex-col items-center justify-around phone:justify-between">
        <div className="flex items-center phone:mb-5">
          <Text type="h2" className="text-black font-flexo font-normal mr-4">
            {capitalizeName(name)}
          </Text>
          <Text type="h2" className="text-gray-700">
            {idFillWithZero}
          </Text>
        </div>

        <DeckButton pokemonId={id} />
      </div>

      <div className="w-full flex phone:flex-col items-start mt-12 phone:mt-5">
        <div className="flex-grow max-w-[50%] phone:max-w-full phone:w-full mr-6 phone:mr-0">
          <Image
            src={sprite_image.front}
            alt={'pic'}
            width={430}
            height={400}
            className="bg-gray-200 rounded-md mb-6"
          />

          <ChartContainer stats={pokemonData[0].stats} />
        </div>

        <div className="flex-grow mt-10 phone:w-full phone:mt-5">
          <div className="bg-[#30a7d7] p-7 pr-20 phone:p-5 rounded-md phone:mb-5">
            <div className="flex mb-2 justify-between">
              <div>
                <Text type="s" className="text-white mb-2">
                  Height
                </Text>
                <Text type="s" className="text-black mb-2">
                  {height} cm
                </Text>
              </div>

              <div>
                <Text type="s" className="text-white mb-2">
                  Weight
                </Text>
                <Text type="s" className="text-black mb-2">
                  {weight} kg
                </Text>
              </div>
            </div>

            <Text type="s" className="text-white mb-2">
              Abilities:{' '}
              {abilities.map((ability, index) => (
                <Text type="s" className="text-black" key={index}>
                  {capitalizeName(ability.name)}
                </Text>
              ))}
            </Text>
          </div>

          <Text type="s" className="my-4">
            Type
          </Text>
          <div className="flex justify-start">
            {types.map((type, index) => (
              <div
                key={index}
                className="px-4 py-0.5 rounded-md bg-gray-300 mr-2">
                <Text type="s">{capitalizeName(type.name)}</Text>
              </div>
            ))}
          </div>

          <Text type="s" className="mt-7 mb-4">
            Moves
          </Text>
          <div className="flex justify-start">
            {moves.map((type, index) => (
              <div
                key={index}
                className="px-4 py-0.5 rounded-md bg-gray-300 mr-2">
                <Text type="s">{capitalizeName(type.name)}</Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Info;
