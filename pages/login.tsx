import { NextPage } from "next";
import React from "react";
import { LoginForm } from "../src/components/forms/login";
import { LoginPageLayout } from "../src/components/layout/login/LoginPageLayout";
import { Meta } from "../src/components/meta";

const LoginPage: NextPage = () => {
  return (
    <LoginPageLayout>
      <Meta title="Вход в Сервис Деск" />
      <LoginForm />
    </LoginPageLayout>
  );
};

export default LoginPage;
