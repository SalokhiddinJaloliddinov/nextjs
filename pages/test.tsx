import { NextPage } from 'next';
import { MainLayout } from '../src/components/layout/MainLayout';

const TestPage: NextPage = () => {
  return (
    <MainLayout>
      <h1>Test</h1>
    </MainLayout>
  );
};

export default TestPage;
