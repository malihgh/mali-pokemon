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
        backgroundColor: '#30a7d7',
        borderWidth: 1,
        barThickness: 30
      }
    ]
  };
  return (
    <div className="bg-gray-200 p-3 rounded-md">
      <Text type="s">Stats</Text>
      <Chart data={data} />
    </div>
  );
};

export default ChartContainer;
