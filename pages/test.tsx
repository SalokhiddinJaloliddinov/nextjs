import { NextPage } from "next";
import { MainLayout } from "../src/components/layout/MainLayout";
import CountTicket from "../src/components/widgets/count/CountTicket";
import Container from "src/components/layout/Container";
import dynamic from "next/dynamic";

const TestPage: NextPage = () => {
  const LineChart = dynamic(() => import("src/components/charts/LineChart"), {
    ssr: false,
  });
  return (
    <MainLayout>
      <Container>
        <LineChart />
      </Container>
    </MainLayout>
  );
};

export default TestPage;
