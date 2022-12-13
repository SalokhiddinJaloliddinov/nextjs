import dynamic from 'next/dynamic';
import Container from 'src/components/layout/Container';
import StatsWidget from 'src/components/widgets/stats';
import MainHeader from '../src/components/layout/header';

export default function Home() {
  const LineChart = dynamic(() => import('src/components/charts/LineChart'), {
    ssr: false,
  });
  return (
    <>
      <MainHeader />
      <StatsWidget />
      <Container className="flex justify-between mt-5">
        <LineChart type="area" />
        <LineChart type="bar" />
        <LineChart type="line" />
      </Container>
    </>
  );
}
