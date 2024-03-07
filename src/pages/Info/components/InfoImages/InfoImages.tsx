import { FC } from 'react';
import Image from 'next/image';
import ChartContainer from '../ChartContainer';
import { PokemonDataStatType } from '@/pages/Home/types';

type Props = {
  image: string;
  stats: PokemonDataStatType[];
};

const InfoImages: FC<Props> = ({ image, stats }) => {
  return (
    <div className="flex-grow max-w-[50%] phone:max-w-full phone:w-full mr-6 phone:mr-0">
      <Image
        src={image}
        alt={'pic'}
        width={430}
        height={400}
        className="bg-gray-200 rounded-md mb-6"
      />

      <div className="w-full">
        <ChartContainer stats={stats} />
      </div>
    </div>
  );
};

export default InfoImages;
