import { FC } from 'react';

import InfoHeader from '../InfoHeader';
import InfoImages from '../InfoImages';
import InfoDetails from '../InfoDetails';
import { PokemonDataType } from '@/core/api/types';

type Props = {
  data: PokemonDataType;
};

const InfoCard: FC<Props> = ({ data }) => {
  const {
    id,
    name,
    sprite_image,
    types,
    abilities,
    height,
    weight,
    moves,
    stats
  } = data;

  const idFillWithZero = '#' + String(id).padStart(4, '0');
  return (
    <>
      <InfoHeader name={name} id={id} idWithZero={idFillWithZero} />

      <div className="w-full flex phone:flex-col items-start mt-12 phone:mt-5">
        <InfoImages image={sprite_image.back} stats={stats} />

        <InfoDetails
          height={height}
          weight={weight}
          abilities={abilities?.map(i => i.name)}
          types={types}
          moves={moves?.map(i => i.name)}
        />
      </div>
    </>
  );
};

export default InfoCard;
