import Home from '@/pages/Home';
import { pokemonData } from '@/pages/Home/data/pokemonData';
import Info from '@/pages/Info';

export default function App() {
  return (
    <>
      {/* <Home /> */}
      <Info data={pokemonData[0]} />
    </>
  );
}
