'use client';

import Container from '@/core/components/Container';
import pokemonListContext from '@/core/context/pokemonListContext';
import { FC, useContext } from 'react';
import InfoCard from './components/InfoCard';
import Text from '@/core/components/Text';
import classNames from 'classnames';

type Props = {
  pokemonId: number;
};

const Info: FC<Props> = ({ pokemonId }) => {
  const { pokemonData } = useContext(pokemonListContext);

  const matchItems = pokemonData.filter(i => i.id === pokemonId)[0];

  return (
    <Container className={classNames('px-10', !matchItems && 'h-[82vh]')}>
      {matchItems ? (
        <InfoCard data={matchItems} />
      ) : (
        <div className="h-full flex items-center">
          <Text type="h3" className="flex flex-col items-center gap-4">
            There is no information for
            <Text type="h2">Pokemon with id: {pokemonId}</Text>
            in our database!
          </Text>
        </div>
      )}
    </Container>
  );
};

export default Info;
