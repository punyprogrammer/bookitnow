import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RoomItem from "./room/RoomItem";
import { toast } from "react-toastify";
import Pagination from "react-js-pagination";
import { clearErrors } from "../redux/actions/roomActions";
import { useRouter } from "next/router";
import Link from "next/link";

const Home = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  let { page = 1 } = router.query;
  page = Number(page);
  const { rooms, error, resPerPage, roomsCount, filteredRoomsCount } =
    useSelector((state) => state.allRooms);
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, []);
  const handlePagination = (pageNumber) => {
    window.location.href = `/?page=${pageNumber}`;
  };
  let count = roomsCount;
  if (router.query.location) {
    count = filteredRoomsCount;
  }

  return (
    <>
      <section id="rooms" className="container mt-5">
        {router.query.location && (
          <h2 className="mb-3 ml-2 stays-heading">
            Stays in {router.query.location}
          </h2>
        )}

        <Link href="/search">
          <a className="ml-2 back-to-search">
            <i className="fa fa-arrow-left"></i> Back to Search
          </a>
        </Link>

        <div className="row">
          {rooms && rooms.length === 0 ? (
            <div className="alert alert-danger mt-5 w-100 ">
              <b>No rooms Found</b>
            </div>
          ) : (
            rooms.map((room) => {
              return <RoomItem room={room} key={room._id} />;
            })
          )}
        </div>
      </section>
      {resPerPage < count && (
        <div className="d-flex justify-content-center  mt-5">
          <Pagination
            activePage={page}
            itemsCountPerPage={resPerPage}
            totalItemsCount={roomsCount}
            onChange={handlePagination}
            nextPageText={"Next"}
            prevPageText={"Prev"}
            firstPageText={"First"}
            lastPageText={"Last"}
            itemClass="page-item"
            linkClass="page-link"
          />
        </div>
      )}
    </>
  );
};

export default Home;
