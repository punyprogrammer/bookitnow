import React from "react";
import Layout from "../components/layout/Layout";
import Login from "../components/auth/Login";
import { getSession } from "next-auth/client";

const LoginPage = () => {
  return (
    <Layout title="Log into Bookit">
      <Login />
    </Layout>
  );
};
export async function getServerSideProps(context){

  const session=await getSession({req:context.req})
  if(session)
  {
      return {
          redirect:{
              destination:'/',
              permanent:false,
          }
      }
  }
  return  {
      props:{}
  }


 }

export default LoginPage;
