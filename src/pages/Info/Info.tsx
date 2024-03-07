import Container from '@/core/components/Container';
import Text from '@/core/components/Text';
import { pokemonDataType } from '../Home/types';
import { FC } from 'react';
import Image from 'next/image';

type Props = {
  data: pokemonDataType;
};

const Info: FC<Props> = props => {
  const { id, name, sprite_image, types, abilities, height, weight, moves } =
    props.data;

  const capitalizeName = (name: string) =>
    name.charAt(0).toUpperCase() + name.slice(1);

  const idFillWithZero = '#' + String(id).padStart(4, '0');
  return (
    <Container>
      <div className="flex items-center">
        <Text type="h2" className="text-black font-flexo font-normal mr-4">
          {capitalizeName(name)}
        </Text>
        <Text type="h2" className="text-gray-700">
          {idFillWithZero}
        </Text>
      </div>

      <div className="w-full flex phone:flex-col items-center px-10 mt-12">
        <div className="flex-grow">
          <Image
            src={sprite_image.front}
            alt={'pic'}
            width={400}
            height={400}
            className="bg-gray-200 rounded-md"
          />
        </div>

        <div className="flex flex-col grow-[4] phone:w-[90%] justify-between">
          <div className="bg-[#30a7d7] p-7 phone:p-5 rounded-md phone:my-5">
            <div className="flex phone:flex-col mb-2">
              <div>
                <Text type="s" className="text-white mb-2 mr-28">
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

            {/* fix it later -> , between abilities */}
            <Text type="s" className="text-white mb-2">
              Abilities:{' '}
              {abilities.map((ability, index) => (
                <Text type="s" className="text-black" key={index}>
                  {capitalizeName(ability.name)}
                </Text>
              ))}
            </Text>

            {/* fix it later -> , between abilities */}
            <Text type="s" className="text-white mb-2">
              Moves:{' '}
              {moves.map((ability, index) => (
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
        </div>
      </div>
    </Container>
  );
};

export default Info;
