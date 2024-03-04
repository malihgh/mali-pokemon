import { pokemonData } from '@/pages/Home/data/pokemonData';
import Info from '@/pages/Info';

export default function InfoPage({ params }: { params: { id: number } }) {
  console.log('params', params.id);

  return (
    <>
      <Info data={pokemonData[0]} />
    </>
  );
}
