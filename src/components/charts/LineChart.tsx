import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
import { ApexOptions } from 'apexcharts';
import { ChartProps } from 'src/utils/types';

const LineChart: React.FC<ChartProps> = ({ type }) => {
  const [averageTemp, setAverageTemp] = useState([]);
  const [date, setDate] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const url = 'http://localhost:3000/api/hello';
      try {
        const response = await fetch(url);
        const { temperature } = await response.json();
        console.log(temperature);
        setAverageTemp(temperature?.map((item: any) => item.average_temp));
        setDate(temperature?.map((item: any) => item.date));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  const series = [
    //data on the y-axis
    {
      name: 'Temperature in Celsius',
      data: averageTemp,
    },
  ];
  const options: ApexOptions = {
    //data on the x-axis
    chart: {
      id: 'bar-chart',
      brush: {
        enabled: false,
        target: undefined,
        autoScaleYaxis: false,
      },
      sparkline: {
        enabled: false,
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
          enabled: false,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 600,
        },
      },
    },
    stroke: {
      curve: 'smooth',
    },
    markers: {
      size: 0,
    },
    colors: ['#222'],
    // xaxis: {
    //   categories: date,
    // },
  };
  return (
    <div>
      <Chart options={options} series={series} type={type} width="450" />
    </div>
  );
};

export default LineChart;
