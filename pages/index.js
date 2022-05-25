import React from "react";
import Home from "../components/Home";
import Layout from "../components/layout/Layout";
import { getRooms } from "../redux/actions/roomActions";
import { wrapper } from "../redux/store";
const index = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default index;
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res,query }) => {
      await store.dispatch(getRooms(req,query.page));
    }
);
