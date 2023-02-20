import React from "react";
import patch from "../assets/image/png/patch.png";
import patch1 from "../assets/image/png/patch1.png";
import patch2 from "../assets/image/png/patch2.png";
import Carousel from "react-bootstrap/Carousel";

function Latest() {
  return (
    <>
      <section className="bg_latest  py-5">
        <div className="container">
          <h2 className="fs_48 fw_700 ff_phi text-center text-white">
            Latest <span className=" text_color">Blogs</span> And{" "}
            <span className=" text_color">News</span>
          </h2>
          <div
            data-aos-duration="1000"
            data-aos="fade-down-right"
            className="row d-sm-flex d-none justify-content-center pt-3"
          >
            <div className="col-md-4 col-sm-6 mt-sm-3 mt-md-0">
              <div className="box_popular">
                <img className="w-100" src={patch} alt="stoner" />
                <div className="p-2">
                  <h2 className="fs_12 fw_400 mb-0 ff_mon pt-1 color_light_white ">
                    12 Dec 2022
                  </h2>
                  <h2 className="fs_24 fw_600 pt-3 mb-0 ff_mon text-white">
                    Integer vulputate
                  </h2>
                  <p className="fs_16 fw_400 ff_mon mb-4 color_light_white ">
                    Nulla vitae imperdiet molestie pulvinar neque. Urna senectus
                    pharetra odio sed senectus sed morbi suspendisse convallisut
                    purus..{" "}
                  </p>
                  <a className=" fs_14 fw_400 ff_mon  text_color" href="#">
                    READ MORE....
                  </a>
                </div>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="col-md-4 col-sm-6 mt-sm-3 mt-md-0"
            >
              <div className="box_popular">
                <img className="w-100" src={patch1} alt="stoner" />
                <div className="p-2">
                  <h2 className="fs_12 fw_400 mb-0 ff_mon pt-1 color_light_white ">
                    15 Nov 2022
                  </h2>
                  <h2 className="fs_24 fw_600 pt-3 mb-0 ff_mon text-white">
                    Lectus aenean
                  </h2>
                  <p className="fs_16 fw_400 ff_mon mb-4 color_light_white ">
                    Tempor cras et scelerisque bibendum. Sapien proin pharetra
                    iaculis cras massa auctor turpis. Eget massa imperdiet sit
                    massa. Hac sit nec.
                  </p>
                  <a className=" fs_14 fw_400 ff_mon  text_color" href="#">
                    READ MORE....
                  </a>
                </div>
              </div>
            </div>
            <div
              data-aos-duration="1000"
              data-aos="fade-down-left"
              className="col-md-4 col-sm-6 mt-sm-4 mt-md-0"
            >
              <div className="box_popular">
                <img className="w-100" src={patch2} alt="stoner" />
                <div className="p-2">
                  <h2 className="fs_12 fw_400 mb-0 ff_mon pt-1 color_light_white ">
                    22 Dec 2022
                  </h2>
                  <h2 className="fs_24 fw_600 pt-3 mb-0 ff_mon text-white">
                    Egestas odio
                  </h2>
                  <p className="fs_16 fw_400 ff_mon mb-4 color_light_white ">
                    Viverra sit volutpat pulvinar vulputate accumsan sapien.
                    Amet urna etiam curabitur ac in viverra tortor proin. Dui
                    viverra eu tristique in eget ut purus.
                  </p>
                  <a className=" fs_14 fw_400 ff_mon  text_color" href="#">
                    READ MORE....
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Carousel className="d-sm-none d-flex">
            <Carousel.Item>
              <div className="col-md-4 col-sm-6 mt-sm-3 mt-md-0">
                <div className="box_popular">
                  <img className="w-100" src={patch} alt="stoner" />
                  <div className="p-2">
                    <h2 className="fs_12 fw_400 mb-0 ff_mon pt-1 color_light_white ">
                      12 Dec 2022
                    </h2>
                    <h2 className="fs_24 fw_600 pt-3 mb-0 ff_mon text-white">
                      Integer vulputate
                    </h2>
                    <p className="fs_16 fw_400 ff_mon mb-4 color_light_white ">
                      Nulla vitae imperdiet molestie pulvinar neque. Urna
                      senectus pharetra odio sed senectus sed morbi suspendisse
                      convallisut purus..{" "}
                    </p>
                    <a className=" fs_14 fw_400 ff_mon  color_pink" href="#">
                      READ MORE....
                    </a>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="col-md-4 col-sm-6 mt-sm-3 mt-md-0">
                <div className="box_popular">
                  <img className="w-100" src={patch1} alt="stoner" />
                  <div className="p-2">
                    <h2 className="fs_12 fw_400 mb-0 ff_mon pt-1 color_light_white ">
                      15 Nov 2022
                    </h2>
                    <h2 className="fs_24 fw_600 pt-3 mb-0 ff_mon text-white">
                      Lectus aenean
                    </h2>
                    <p className="fs_16 fw_400 ff_mon mb-4 color_light_white ">
                      Tempor cras et scelerisque bibendum. Sapien proin pharetra
                      iaculis cras massa auctor turpis. Eget massa imperdiet sit
                      massa. Hac sit nec.
                    </p>
                    <a className=" fs_14 fw_400 ff_mon  color_pink" href="#">
                      READ MORE....
                    </a>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="col-md-4 col-sm-6 mt-sm-4 mt-md-0">
                <div className="box_popular">
                  <img className="w-100" src={patch2} alt="stoner" />
                  <div className="p-2">
                    <h2 className="fs_12 fw_400 mb-0 ff_mon pt-1 color_light_white ">
                      22 Dec 2022
                    </h2>
                    <h2 className="fs_24 fw_600 pt-3 mb-0 ff_mon text-white">
                      Egestas odio
                    </h2>
                    <p className="fs_16 fw_400 ff_mon mb-4 color_light_white ">
                      Viverra sit volutpat pulvinar vulputate accumsan sapien.
                      Amet urna etiam curabitur ac in viverra tortor proin. Dui
                      viverra eu tristique in eget ut purus.
                    </p>
                    <a className=" fs_14 fw_400 ff_mon  color_pink" href="#">
                      READ MORE....
                    </a>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </>
  );
}

export default Latest;
