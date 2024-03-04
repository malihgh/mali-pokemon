import Container from '@/core/components/Container';
import { PokemonDataType } from '../Home/types';
import { FC } from 'react';
import { pokemonData } from '../Home/data/pokemonData';
import InfoHeader from './components/InfoHeader';
import InfoDetails from './components/InfoDetails';
import InfoImages from './components/InfoImages';

type Props = {
  data: PokemonDataType;
};

const Info: FC<Props> = props => {
  const { id, name, sprite_image, types, abilities, height, weight, moves } =
    props.data;

  const capitalizeName = (name: string) =>
    name.charAt(0).toUpperCase() + name.slice(1);

  console.log('pppp');
  const idFillWithZero = '#' + String(id).padStart(4, '0');
  return (
    <Container className="px-10">
      <InfoHeader
        name={capitalizeName(name)}
        id={id}
        idWithZero={idFillWithZero}
      />

      <div className="w-full flex phone:flex-col items-start mt-12 phone:mt-5">
        <InfoImages image={sprite_image.front} stats={pokemonData[0].stats} />

        <InfoDetails
          height={height}
          weight={weight}
          abilities={abilities.map(i => capitalizeName(i.name))}
          types={types.map(i => capitalizeName(i.name))}
          moves={moves.map(i => capitalizeName(i.name))}
        />
      </div>
    </Container>
  );
};

export default Info;
