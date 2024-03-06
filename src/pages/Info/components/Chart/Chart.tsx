'use client';

import { FC, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

type Props = {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
      borderWidth: number;
      barThickness: number;
    }[];
  };
};

const ChartComponent: FC<Props> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const maxBaseStat = 535;

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        const myChart = new Chart(ctx, {
          type: 'bar',
          data: data,
          options: {
            scales: {
              y: {
                min: 0,
                max: maxBaseStat
              }
            }
          }
        });

        return () => {
          myChart.destroy();
        };
      }
    }
  }, [data]);

  return <canvas ref={chartRef}></canvas>;
};

export default ChartComponent;
