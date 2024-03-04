import Text from '@/core/components/Text';
import { FC } from 'react';

type Props = {
  height: number;
  weight: number;
  abilities: string[];
  types: string[];
  moves: string[];
};
const InfoDetails: FC<Props> = ({
  height,
  weight,
  abilities,
  types,
  moves
}) => {
  return (
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
              {ability}
            </Text>
          ))}
        </Text>
      </div>

      <Text type="s" className="my-4">
        Type
      </Text>
      <div className="flex justify-start">
        {types.map((type, index) => (
          <div key={index} className="px-4 py-0.5 rounded-md bg-gray-300 mr-2">
            <Text type="s">{type}</Text>
          </div>
        ))}
      </div>

      <Text type="s" className="mt-7 mb-4">
        Moves
      </Text>
      <div className="flex justify-start">
        {moves.map((type, index) => (
          <div key={index} className="px-4 py-0.5 rounded-md bg-gray-300 mr-2">
            <Text type="s">{type}</Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoDetails;
