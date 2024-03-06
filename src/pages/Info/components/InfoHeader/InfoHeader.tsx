import { FC } from 'react';
import Text from '@/core/components/Text';
import DeckButton from '@/core/components/DeckButton';
import { capitalizeName } from '@/core/api/transformer';

type Props = {
  name: string;
  id: number;
  idWithZero: string;
};

const InfoHeader: FC<Props> = ({ name, id, idWithZero }) => {
  return (
    <div className="w-full flex phone:flex-col items-center justify-around phone:justify-between">
      <div className="flex items-center phone:mb-5">
        <Text type="h2" className="text-black font-flexo font-normal mr-4">
          {capitalizeName(name)}
        </Text>
        <Text type="h2" className="text-gray-700">
          {idWithZero}
        </Text>
      </div>

      <DeckButton pokemonId={id} />
    </div>
  );
};

export default InfoHeader;
