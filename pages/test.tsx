import { NextPage } from 'next';
import Container from 'src/components/layout/Container';
import dynamic from 'next/dynamic';
import Sidebar from 'src/components/navigations/sidebars';
import MainHeader from 'src/components/layout/header';

const TestPage: NextPage = () => {
  const LineChart = dynamic(() => import('src/components/charts/LineChart'), {
    ssr: false,
  });
  return (
    <>
      <MainHeader />
      <Container className="mt-5">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Работа</h3>
        <div className="grid overflow-hidden grid-cols-4 grid-rows-4 gap-5 mt-5">
          <div className="row-start-1 row-span-2 col-start-1 col-end-2">
            <Sidebar />
          </div>
          <div className="row-start-1 col-start-2 col-span-3">5</div>
          <div className="row-start-2 col-start-2">6</div>
          <div className="row-start-2 col-start-3">4</div>
          <div className="row-start-2 col-start-4">5</div>
          <div className="row-start-3 col-start-2">6</div>
          <div className="col-start-3">7</div>
          <div className="col-start-4">8</div>
          <div className="col-start-2">9</div>
          <div
            className=">10</div>
          <div className=">
            11
          </div>
        </div>
      </Container>
    </>
  );
};

export default TestPage;
