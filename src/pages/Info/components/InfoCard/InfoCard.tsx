import { FC } from 'react';
import { PokemonDataType } from '@/pages/Home/types';
import InfoHeader from '../InfoHeader';
import InfoImages from '../InfoImages';
import InfoDetails from '../InfoDetails';

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

  const capitalizeName = (name: string) =>
    name.charAt(0).toUpperCase() + name.slice(1);

  const idFillWithZero = '#' + String(id).padStart(4, '0');
  return (
    <>
      <InfoHeader
        name={capitalizeName(name)}
        id={id}
        idWithZero={idFillWithZero}
      />

      <div className="w-full flex phone:flex-col items-start mt-12 phone:mt-5">
        <InfoImages image={sprite_image.front} stats={stats} />

        <InfoDetails
          height={height}
          weight={weight}
          abilities={abilities.map(i => capitalizeName(i.name))}
          types={types.map(i => capitalizeName(i.name))}
          moves={moves.map(i => capitalizeName(i.name))}
        />
      </div>
    </>
  );
};

export default InfoCard;
