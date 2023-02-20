import React from "react";
import panda_1 from "../assets/image/png/panda_1.png";
import panda_2 from "../assets/image/png/panda_2.png";
import panda_3 from "../assets/image/png/panda_3.png";
import Carousel from "react-bootstrap/Carousel";

function Customers() {
  return (
    <>
      <section className="bg_img1 bg_dark_blue py-5">
        <div className="container py-md-5">
          <div className="row d-sm-flex d-none justify-content-center pt-md-5">
            <div
              data-aos-duration="1000"
              data-aos="fade-down-right"
              className="col-md-4 col-sm-6 mt-3 mt-md-0"
            >
              <img className="w-100" src={panda_1} alt="panda_1" />
              <h2 className="fs_32 fw_700 ff_phi text-center pt-4 text-white">
                <span className="text_color ">20% Off</span> For First Time
                Customers
              </h2>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="col-md-4 col-sm-6 mt-sm-3 mt-md-0"
            >
              <img className="w-100" src={panda_2} alt="panda_1" />
              <h2 className="fs_32 fw_700 ff_phi text-center pt-4 text-white">
                Purple Panda’s{" "}
                <span className=" text_color"> Picks Of The week</span>
              </h2>
            </div>
            <div
              data-aos-duration="1000"
              data-aos="fade-down-left"
              className="col-md-4 col-sm-6 mt-sm-3 mt-md-0"
            >
              <img className="w-100" src={panda_3} alt="panda_1" />
              <h2 className="fs_32 fw_700 ff_phi text-center pt-4 text-white">
                <span className="text_color">Collect rewards</span> points every
                time you purchase
              </h2>
            </div>
          </div>
          <Carousel className="d-sm-none d-flex">
            <Carousel.Item>
              <div className="col-md-4 col-sm-6 mt-3 mt-md-0">
                <img className="w-100" src={panda_1} alt="panda_1" />
                <h2 className="fs_32 fw_700 ff_phi text-center pt-4 text-white">
                  <span className="text_color ">20% Off</span> For First Time
                  Customers
                </h2>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="col-md-4 col-sm-6 mt-3 mt-md-0">
                <img className="w-100" src={panda_2} alt="panda_1" />
                <h2 className="fs_32 fw_700 ff_phi text-center pt-4 text-white">
                  Purple Panda’s{" "}
                  <span className=" text_color"> Picks Of The week</span>
                </h2>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="col-md-4 col-sm-6 mt-3 mt-md-0">
                <img className="w-100" src={panda_3} alt="panda_1" />
                <h2 className="fs_32 fw_700 ff_phi text-center pt-4 text-white">
                  <span className="text_color">Collect rewards</span> points
                  every time you purchase
                </h2>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </>
  );
}

export default Customers;
