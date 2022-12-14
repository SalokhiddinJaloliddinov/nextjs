import dynamic from 'next/dynamic';
import LineChart from 'src/components/charts/LineChart';
import Container from 'src/components/layout/Container';
import { Meta } from 'src/components/meta';
import StatsWidget from 'src/components/widgets/stats';
import MainHeader from '../src/components/layout/header';

export default function Home() {
  // const LineChart = dynamic(() => import('src/components/charts/LineChart'), {
  //   ssr: false,
  // });
  return (
    <>
      <MainHeader />
      <Meta title={'Дашборд'} />
      <StatsWidget />
      <Container className="flex justify-between mt-5">
        <LineChart type="area" />
      </Container>
    </>
  );
}
