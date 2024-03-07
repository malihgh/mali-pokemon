import { FC } from 'react';
import { PokemonDataStatType } from '@/pages/Home/types';
import Chart from '../Chart';
import Text from '@/core/components/Text';

type Props = {
  stats: PokemonDataStatType[];
};

const ChartContainer: FC<Props> = ({ stats }) => {
  const data = {
    labels: stats.map(stat => stat.name),
    datasets: [
      {
        label: 'Base Stat',
        data: stats.map(stat => stat.base_stat),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        barThickness: 30
      }
    ]
  };
  return (
    <div>
      <Text type="s">Stats</Text>
      <Chart data={data} />
    </div>
  );
};

export default ChartContainer;
