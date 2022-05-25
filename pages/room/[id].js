import React from "react";
import RoomDetails from "../../components/room/RoomDetails";
import Layout from "../../components/layout/Layout";
import { getRoomDetails } from "../../redux/actions/roomActions";
import { wrapper } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
const RoomDetailsPage = () => {
  return (
    <Layout>
      <RoomDetails />
    </Layout>
  );
};

export default RoomDetailsPage;
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req ,params}) => {
      console.log(params)
      await store.dispatch(getRoomDetails(req, params?.id));
    }
);
