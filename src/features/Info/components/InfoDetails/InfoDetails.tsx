import Text from '@/core/components/Text';
import classNames from 'classnames';
import { FC } from 'react';

type Props = {
  height: number;
  weight: number;
  abilities: string[];
  types: { name: string; color: string }[];
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
    <div className="flex-grow mt-10 max-w-[50%] phone:max-w-full phone:mt-5">
      <div className="bg-blue p-7 pr-20 phone:p-5 rounded-md phone:mb-5">
        <div className="flex mb-2 justify-between">
          <div>
            <Text type="s" className="text-white mb-2">
              Height
            </Text>

            {/* Doc -> The height of this Pokémon in decimetres */}
            <Text type="s" className="text-night mb-2">
              {height * 10} cm
            </Text>
          </div>

          <div>
            <Text type="s" className="text-white mb-2">
              Weight
            </Text>

            {/* Doc -> The weight of this Pokémon in hectograms. */}
            <Text type="s" className="text-night mb-2">
              {(weight * 0.1).toFixed(2)} kg
            </Text>
          </div>
        </div>

        <Text type="s" className="text-white mb-2">
          Abilities:
          {abilities.length > 0 ? (
            abilities?.map((ability, index) => (
              <Text type="s" className="text-night" key={index}>
                {ability}
              </Text>
            ))
          ) : (
            <Text type="s" className="pl-1 text-night">
              -
            </Text>
          )}
        </Text>
      </div>

      <Text type="s" className="my-4">
        Type
      </Text>
      <div className="flex justify-start">
        {types?.map((type, index) => (
          <div
            key={index}
            className={classNames(
              `bg-${type.color}`,
              ' px-4 py-0.5 rounded-md mr-2'
            )}>
            <Text type="s" className="text-white">
              {type.name}
            </Text>
          </div>
        ))}
      </div>

      <Text type="s" className="mt-7 mb-4">
        Moves
      </Text>
      <div className="flex justify-start flex-wrap ">
        {moves.length > 0 ? (
          moves?.map((type, index) => (
            <div
              key={index}
              className="px-4 py-0.5 rounded-md bg-gray-300 mr-2 mb-2">
              <Text type="s">{type}</Text>
            </div>
          ))
        ) : (
          <Text type="s" className="pl-1 text-night">
            -
          </Text>
        )}
      </div>
    </div>
  );
};

export default InfoDetails;
