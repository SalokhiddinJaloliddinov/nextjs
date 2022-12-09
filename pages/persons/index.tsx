import { NextPage } from "next";
import React from "react";
import { MainLayout } from "src/components/layout/MainLayout";
import Container from "src/components/layout/Container";
import { Button } from "../../src/components/buttons/Button";

const Person: NextPage = () => {
  return (
    <MainLayout>
      <Container>
        <Button type={"primary"}>Кнопка</Button>
      </Container>
    </MainLayout>
  );
};

export default Person;
