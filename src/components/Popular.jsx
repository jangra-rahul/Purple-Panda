import React from "react";
import stoner from "../assets/image/png/stoner_img.png";
import atomic_img from "../assets/image/png/atomic_img.png";
import atomic_img1 from "../assets/image/png/atomic_img1.png";
import atomic_img2 from "../assets/image/png/atomic_img1.png";
import pop_sn from "../assets/image/png/pop_sh.png";
import Carousel from "react-bootstrap/Carousel";

function Popular() {
  return (
    <>
      <section className="bg_popular position-relative py-5">
        <img
          className=" start-0 top-0 position-absolute"
          src={pop_sn}
          alt="pop_sn"
        />
        <div className="container py-md-5">
          <h2 className="fs_48 text-center fw_700 ff_phi text-white">
            Most <span className="text_color ff_phi">Popular</span> Items
          </h2>
          <p className=" max_636 mx-auto text-center fs_16 fw_400 color_light_white">
            Pellentesque tincidunt fermentum mauris dignissim quam arcu. A netus
            natoque urna vivamus faucibus. Sollicitudin et nisl.
          </p>
          <div className="row d-sm-flex d-none pt-5">
            <div className="col-md-3 col-sm-6 ">
              <div
                data-aos-duration="1000"
                data-aos="fade-down-left"
                className="box_popular"
              >
                <img className="w-100" src={stoner} alt="stoner" />
                <h2 className="fs_24 fw_400 mb-0 ff_mon color_light_white pt-3">
                  Stoner Patch(500mg)
                </h2>
                <h2 className="fs_24 fw_700 mb-5 ff_mon text_color">$20.00</h2>
                <a
                  className="but fs_20 fw_700 ff_mon color_light_white"
                  href="#"
                >
                  ADD TO CART
                </a>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="box_popular"
              >
                <img className="w-100" src={atomic_img} alt="stoner" />
                <h2 className="fs_24 fw_400 mb-0 ff_mon color_light_white pt-3">
                  Stoner Patch(500mg)
                </h2>
                <h2 className="fs_24 fw_700 mb-5 ff_mon text_color">$20.00</h2>
                <a
                  className="but fs_20 fw_700 ff_mon color_light_white"
                  href="#"
                >
                  ADD TO CART
                </a>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mt-sm-5 mt-md-0">
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="box_popular"
              >
                <img className="w-100" src={atomic_img1} alt="stoner" />
                <h2 className="fs_24 fw_400 mb-0 ff_mon color_light_white pt-3">
                  Stoner Patch(500mg)
                </h2>
                <h2 className="fs_24 fw_700 mb-5 ff_mon text_color">$20.00</h2>
                <a
                  className="but fs_20 fw_700 ff_mon color_light_white"
                  href="#"
                >
                  ADD TO CART
                </a>
              </div>
            </div>
            <div
              data-aos-duration="1000"
              data-aos="fade-down-left"
              className="col-md-3 col-sm-6 mt-sm-5 mt-md-0"
            >
              <div className="box_popular">
                <img className="w-100" src={atomic_img2} alt="stoner" />
                <h2 className="fs_24 fw_400 mb-0 ff_mon color_light_white pt-3">
                  Stoner Patch(500mg)
                </h2>
                <h2 className="fs_24 fw_700 mb-5 ff_mon text_color">$20.00</h2>
                <a
                  className="but fs_20 fw_700 ff_mon color_light_white"
                  href="#"
                >
                  ADD TO CART
                </a>
              </div>
            </div>
          </div>
          <Carousel className="d-sm-none d-flex">
            <Carousel.Item>
              <div className="col-md-3 col-sm-6 ">
                <div className="box_popular">
                  <img className="w-100" src={stoner} alt="stoner" />
                  <h2 className="fs_24 fw_400 mb-0 ff_mon color_light_white pt-3">
                    Stoner Patch(500mg)
                  </h2>
                  <h2 className="fs_24 fw_700 mb-5 ff_mon color_pink">
                    $20.00
                  </h2>
                  <a
                    className="but fs_20 fw_700 ff_mon color_light_white"
                    href="#"
                  >
                    ADD TO CART
                  </a>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="col-md-3 col-sm-6">
                <div className="box_popular">
                  <img className="w-100" src={atomic_img} alt="stoner" />
                  <h2 className="fs_24 fw_400 mb-0 ff_mon color_light_white pt-3">
                    Stoner Patch(500mg)
                  </h2>
                  <h2 className="fs_24 fw_700 mb-5 ff_mon color_pink">
                    $20.00
                  </h2>
                  <a
                    className="but fs_20 fw_700 ff_mon color_light_white"
                    href="#"
                  >
                    ADD TO CART
                  </a>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="col-md-3 col-sm-6 mt-sm-5 mt-md-0">
                <div className="box_popular">
                  <img className="w-100" src={atomic_img1} alt="stoner" />
                  <h2 className="fs_24 fw_400 mb-0 ff_mon color_light_white pt-3">
                    Stoner Patch(500mg)
                  </h2>
                  <h2 className="fs_24 fw_700 mb-5 ff_mon color_pink">
                    $20.00
                  </h2>
                  <a
                    className="but fs_20 fw_700 ff_mon color_light_white"
                    href="#"
                  >
                    ADD TO CART
                  </a>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="col-md-3 col-sm-6 mt-sm-5 mt-md-0">
                <div className="box_popular">
                  <img className="w-100" src={atomic_img2} alt="stoner" />
                  <h2 className="fs_24 fw_400 mb-0 ff_mon color_light_white pt-3">
                    Stoner Patch(500mg)
                  </h2>
                  <h2 className="fs_24 fw_700 mb-5 ff_mon color_pink">
                    $20.00
                  </h2>
                  <a
                    className="but fs_20 fw_700 ff_mon color_light_white"
                    href="#"
                  >
                    ADD TO CART
                  </a>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </>
  );
}

export default Popular;
