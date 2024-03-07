import Info from '@/pages/Info';

export default function InfoPage({ params }: { params: { id: string } }) {
  return (
    <>
      <Info pokemonId={+params.id} />
    </>
  );
}
