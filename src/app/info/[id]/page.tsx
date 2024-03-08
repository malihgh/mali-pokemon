import Info from '@/features/Info';

export default function InfoPage({ params }: { params: { id: string } }) {
  return <Info pokemonId={+params.id} />;
}
