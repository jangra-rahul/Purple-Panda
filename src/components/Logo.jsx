import React from "react";
import image from "../assets/image/png/image.png";
import image1 from "../assets/image/png/image1.png";
import image2 from "../assets/image/png/image2.png";
import image3 from "../assets/image/png/image3.png";
import image4 from "../assets/image/png/image4.png";
import image5 from "../assets/image/png/image5.png";
import image6 from "../assets/image/png/image6.png";
import section_sh from "../assets/image/png/section_sh.png";
import Carousel from "react-bootstrap/Carousel";

function Logo() {
  return (
    <>
      <section className="bg_dark_blue py-5 position-relative">
        <img
          className="position-absolute-1 d-md-block d-none"
          src={section_sh}
          alt="section_sh"
        />
        <div className="container">
          <div className="row d-sm-flex d-none justify-content-between justify-content-center">
            <div
              data-aos-duration="1000"
              data-aos="fade-down-left"
              className="my-col position-relative z_index"
            >
              <div className="p-1">
                <img className="w-100" src={image} alt="image" />
                <h2 className="fs_24 fw_700 ff_phi text-white pt-3 text-center">
                  Mushrooms
                </h2>
              </div>
            </div>
            <div
              data-aos-duration="1000"
              data-aos="fade-up-left"
              className="my-col"
            >
              <div className="p-1">
                <img className="w-100" src={image1} alt="image" />
                <h2 className="fs_24 fw_700 ff_phi text-white pt-3 text-center">
                  Extracts
                </h2>
              </div>
            </div>
            <div
              data-aos-duration="1000"
              data-aos="fade-down-left"
              className="my-col"
            >
              <div className="p-1">
                <img className="w-100" src={image2} alt="image" />
                <h2 className="fs_24 fw_700 ff_phi text-white pt-3 text-center">
                  Vapes & Accessories
                </h2>
              </div>
            </div>
            <div
              data-aos-duration="1000"
              data-aos="fade-up-left"
              className="my-col"
            >
              <div className="p-1">
                <img className="w-100" src={image3} alt="image" />
                <h2 className="fs_24 fw_700 ff_phi text-white pt-3 text-center">
                  CBD
                </h2>
              </div>
            </div>
            <div
              data-aos-duration="1000"
              data-aos="fade-down-left"
              className="my-col"
            >
              <div className="p-1">
                <img className="w-100" src={image4} alt="image" />
                <h2 className="fs_24 fw_700 ff_phi text-white pt-3 text-center">
                  Edibles
                </h2>
              </div>
            </div>
            <div
              data-aos-duration="1000"
              data-aos="fade-up-left"
              className="my-col"
            >
              <img className="w-100" src={image5} alt="image" />
              <h2 className="fs_24 fw_700 ff_phi text-white pt-3 text-center">
                Cannabis
              </h2>
            </div>
            <div
              data-aos-duration="1000"
              data-aos="fade-down-left"
              className="my-col"
            >
              <img className="w-100" src={image6} alt="image" />
              <h2 className="fs_24 fw_700 ff_phi text-white pt-3 text-center">
                Bulk Orders
              </h2>
            </div>
          </div>
          <Carousel className="d-sm-none d-flex ">
            <Carousel.Item>
              <div className="  d-flex justify-content-center">
                <div className="my-col">
                  <div className="p-1">
                    <img className="w-100" src={image} alt="image" />
                    <h2 className="fs_24 fw_700 ff_p text-white pt-3 text-center">
                      Mushrooms
                    </h2>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="  d-flex justify-content-center">
                <div className="my-col">
                  <div className="p-1">
                    <img className="w-100" src={image1} alt="image" />
                    <h2 className="fs_24 fw_700 ff_p text-white pt-3 text-center">
                      Extracts
                    </h2>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="  d-flex justify-content-center">
                <div className="my-col">
                  <div className="p-1">
                    <img className="w-100" src={image2} alt="image" />
                    <h2 className="fs_24 fw_700 ff_p text-white pt-3 text-center">
                      Mushrooms
                    </h2>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="  d-flex justify-content-center">
                <div className="my-col">
                  <div className="p-1">
                    <img className="w-100" src={image3} alt="image" />
                    <h2 className="fs_24 fw_700 ff_p text-white pt-3 text-center">
                      CBD
                    </h2>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="  d-flex justify-content-center">
                <div className="my-col">
                  <div className="p-1">
                    <img className="w-100" src={image4} alt="image" />
                    <h2 className="fs_24 fw_700 ff_p text-white pt-3 text-center">
                      Edibles
                    </h2>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="  d-flex justify-content-center">
                <div className="my-col">
                  <div className="p-1">
                    <img className="w-100" src={image5} alt="image" />
                    <h2 className="fs_24 fw_700 ff_p text-white pt-3 text-center">
                      Cannabis
                    </h2>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="  d-flex justify-content-center">
                <div className="my-col">
                  <div className="p-1">
                    <img className="w-100" src={image6} alt="image" />
                    <h2 className="fs_24 fw_700 ff_p text-white pt-3 text-center">
                      Bulk Orders
                    </h2>
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

export default Logo;
