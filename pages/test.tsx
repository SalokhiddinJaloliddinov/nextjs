import { NextPage } from "next";
import { MainLayout } from "../src/components/layout/MainLayout";
import CountTicket from "../src/components/widgets/count/CountTicket";
import Container from "src/components/layout/Container";

const TestPage: NextPage = () => {
  return (
    <MainLayout>
      <h2>Test Page</h2>
    </MainLayout>
  );
};

export default TestPage;
