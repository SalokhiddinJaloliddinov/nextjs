import { MainLayout } from "../src/components/layout/MainLayout";
import { Meta } from "../src/components/meta";
import CountTicket from "../src/components/widgets/count/CountTicket";
import Container from "src/components/layout/Container";

export default function Home() {
  return (
    <MainLayout>
      <Meta title="Сервис Деск" />
      <Container>
        <>
          <CountTicket />
        </>
      </Container>
    </MainLayout>
  );
}
