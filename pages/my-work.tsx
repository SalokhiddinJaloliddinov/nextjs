import { NextPage } from 'next';
import Container from 'src/components/layout/Container';
import Sidebar from 'src/components/navigations/sidebars';
import MainHeader from 'src/components/layout/header';
import TaskList from 'src/components/lists/TaskList';
import { Meta } from 'src/components/meta';

const WorkPage: NextPage = () => {
  return (
    <>
      <MainHeader />
      <Meta title={'Моя работа'} />
      <Container className="mt-5">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Работа</h3>
        <div className="grid overflow-hidden grid-cols-4 grid-rows-2 gap-5">
          <div className="box row-span-2">
            <Sidebar />
          </div>
          <div className="box row-span-2 col-span-3">
            <TaskList />
          </div>
        </div>
      </Container>
    </>
  );
};

export default WorkPage;
