import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearErrors } from "../../redux/actions/roomActions";
import Head from "next/head";
import { Carousel } from "react-bootstrap";
import Image from "next/image";
import RoomFeatures from "./RoomFeatures";
const RoomDetails = () => {
  const dispatch = useDispatch();
  const { room, error } = useSelector((state) => state.roomDetails);
  //initial rener
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, []);
  console.log(room);
  return (
    <>
      <Head>
        <title>{room.name} - BookITNow</title>
      </Head>
      <div className="container container-fluid">
        <h2 className="mt-5">{room.name}</h2>
        <p>{room.address}</p>

        <div className="ratings mt-auto mb-3">
          <div className="rating-outer">
            <div
              className="rating-inner"
              style={{ width: `${(room.ratings / 5) * 100}%` }}
            ></div>
          </div>
          <span id="no_of_reviews">({room.numOfReviews} Reviews)</span>
        </div>

        {/* <img
        src="https://a0.muscache.com/im/pictures/a8f6a489-d236-4d2d-a57b-a95d928970af.jpg?im_w=960"
        className="d-block w-100 property-details-image m-auto"
        alt="Hotel"
      /> */}
        <Carousel hover="pause">
          {room.images &&
            room.images.map((item) => {
              return (
                <Carousel.Item key={item.public_id}>
                  <div style={{ height: "440px", width: "100%" }}>
                    <Image
                      className="d-block m-auto"
                      src={item.url}
                      alt={room.name}
                      layout="fill"
                    />
                  </div>
                </Carousel.Item>
              );
            })}
        </Carousel>

        <div className="row my-5">
          <div className="col-12 col-md-6 col-lg-8">
            <h3>Description</h3>
            <p>{room.description}</p>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="booking-card shadow-lg p-4">
              <p className="price-per-night">
                <b>${room.pricePerNight}</b> / night
              </p>

              <button className="btn btn-block py-3 booking-btn">Pay</button>
            </div>
          </div>
        </div>
        <RoomFeatures room={room} />

        <div className="reviews w-75">
          <h3>Reviews:</h3>
          <hr />
          <div className="review-card my-3">
            <div className="rating-outer">
              <div className="rating-inner"></div>
            </div>
            <p className="review_user">by John</p>
            <p className="review_comment">Good Quality</p>

            <hr />
          </div>

          <div className="review-card my-3">
            <div className="rating-outer">
              <div className="rating-inner"></div>
            </div>
            <p className="review_user">by John</p>
            <p className="review_comment">Good Quality</p>

            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomDetails;
