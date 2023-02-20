import React from "react";
import container_sh from "../assets/image/png/container_sh.png";
import crad_1img from "../assets/image/png/crad_1img.png";
import crad_1img1 from "../assets/image/png/crad_img1.png";
import crad_1img2 from "../assets/image/png/crad_img2.png";
import crad_sh from "../assets/image/png/crad_sh.png";
import con_sh from "../assets/image/png/can_sh.png";
import Carousel from "react-bootstrap/Carousel";

function Canada() {
  return (
    <>
      <section className="bg_canda  position-relative bg_dark_blue py-5">
        <img
          className="w-100 position-overlay"
          src={container_sh}
          alt="container_sh"
        />
        <img
          className=" position-absolute top-0 bottom-0 end-0"
          src={con_sh}
          alt="container_sh"
        />
        <div className="container py-lg-5">
          <h2 className="fs_48 fw_700 ff_phi text-white position-relative max_900 mx-auto text-center  z_index">
            Canada Wide <span className="text_color">Mail Orders</span>
          </h2>
          <p className="fs_16 fw_400 ff_mon color_light_white max_900 mx-auto text-center ">
            Purple Panda offers discreet mail orders to all provinces in Canada,
            we have new list of products everyday to serve your needs whether
            its recreational or medinical use. We ship the next business day
            from Monday-Thursdays, EMT payment is required for all mail orders
          </p>
          <div className="row d-sm-flex d-none justify-content-center mt-5 pt-5">
            <div
              data-aos-duration="1000"
              data-aos="fade-down-right"
              className="col-md-4 col-sm-6 my-lg-4"
            >
              <div className="card_2  position-relative">
                {/* <div className="overlay"></div> */}
                <img
                  className=" position-absolute-4 d-md-flex d-none"
                  src={crad_sh}
                  alt="crad_sh"
                />
                <div className="goll_box position-absolute_2">
                  <h2 className="fs_32 fw_600 ff_mon color_pink mb-0">01</h2>
                </div>
                <img
                  className=" position-relative z_index"
                  src={crad_1img}
                  alt="crad_1img"
                />
                <p className="fs_16 position-relative z_index fw_400 ff_mon color_light_white pt-3">
                  Register for an account first, then head on other to our shop
                  selection
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="col-md-4 col-sm-6 my-lg-4"
            >
              <div className="card_2 position-relative">
                <img
                  className=" position-absolute-4 d-md-flex d-none"
                  src={crad_sh}
                  alt="crad_sh"
                />
                <div className="goll_box position-absolute_2">
                  <h2 className="fs_32 fw_600 ff_mon color_pink mb-0">02</h2>
                </div>
                <img
                  className=" position-relative z_index"
                  src={crad_1img1}
                  alt="crad_1img"
                />
                <p className="fs_16 fw_400 ff_mon color_light_white position-relative z_index pt-3">
                  Register for an account first, then head on other to our shop
                  selection
                </p>
              </div>
            </div>
            <div
              data-aos-duration="1000"
              data-aos="fade-down-left"
              className="col-md-4 col-sm-6 my-lg-4 mt-5 mt-md-0"
            >
              {/* <img src={crad_sh} alt="" /> */}
              <div className="card_2 position-relative">
                <img
                  className=" position-absolute-4 d-md-flex d-none"
                  src={crad_sh}
                  alt="crad_sh"
                />
                <div className="goll_box position-absolute_2">
                  <h2 className="fs_32 fw_600 ff_mon color_pink mb-0">03</h2>
                </div>
                <img
                  className=" position-relative z_index"
                  src={crad_1img2}
                  alt="crad_1img"
                />
                <p className="fs_16 fw_400 ff_mon color_light_white position-relative z_index pt-3">
                  Register for an account first, then head on other to our shop
                  selection
                </p>
              </div>
            </div>
          </div>
          <Carousel className="d-sm-none d-flex">
            <Carousel.Item>
              <div className="col-md-4 col-sm-6 mt-5 pt-3">
                <div className="card_2 position-relative">
                  {/* <img src={crad_sh} alt="" /> */}
                  <div className="goll_box position-absolute_2">
                    <h2 className="fs_32 fw_600 ff_mon color_pink mb-0">01</h2>
                  </div>
                  <img src={crad_1img} alt="crad_1img" />
                  <p className="fs_16 fw_400 ff_mon color_light_white pt-3">
                    Register for an account first, then head on other to our
                    shop selection
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="col-md-4 col-sm-6  mt-5 pt-3">
                <div className="card_2 position-relative">
                  <div className="goll_box position-absolute_2">
                    <h2 className="fs_32 fw_600 ff_mon color_pink mb-0">02</h2>
                  </div>
                  <img src={crad_1img} alt="crad_1img" />
                  <p className="fs_16 fw_400 ff_mon color_light_white pt-3">
                    Register for an account first, then head on other to our
                    shop selection
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="col-md-4 col-sm-6 my-lg-4  mt-5 pt-3">
                {/* <img src={crad_sh} alt="" /> */}
                <div className="card_2 position-relative">
                  <div className="goll_box position-absolute_2">
                    <h2 className="fs_32 fw_600 ff_mon color_pink mb-0">03</h2>
                  </div>
                  <img src={crad_1img} alt="crad_1img" />
                  <p className="fs_16 fw_400 ff_mon color_light_white pt-3">
                    Register for an account first, then head on other to our
                    shop selection
                  </p>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </>
  );
}

export default Canada;
