import React from "react";
import Layout from "../components/layout/Layout";
import Login from "../components/auth/Login";

const LoginPage = () => {
  return (
    <Layout title="Log into Bookit">
      <Login />
    </Layout>
  );
};

export default LoginPage;
