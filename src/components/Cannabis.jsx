import React from "react";
import box6_img from "../assets/image/png/box6_img.png";
import box7_img from "../assets/image/png/box7_img.png";
import box8_img from "../assets/image/png/box8_img.png";
import box9_img from "../assets/image/png/box9_img.png";
import box10_img from "../assets/image/png/box10_img.png";

function Cannabis() {
  return (
    <>
      <section className="about_bg  pt-md-0 pb-5">
        <div className="container">
          <h2 className="fs_48 fw_700 ff_phi text-white text-center">
            Cannabis
          </h2>
          <p className=" max_703 mx-auto fs_16 fw_400 text-center ff_mon color_light_white">
            While we stock all sorts of products to make you feel great, we’re
            experts and lovers of cannabis at heart. We offer a wide range of
            buds each with different highs, flavors, and aromas, so you can find
            the perfect joint-filler, bowl-packer, or pipe clearer to suit your
            tastes
          </p>
          <div className="row align-items-center mt-5">
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="col-md-6"
            >
              <div className="box position-relative text-center text-md-start">
                <h2 className="fs_48 fw_400 ff_phi text-white">
                  Strain <span className=" text_color">Families</span>
                </h2>
                <p className="fs_16 fw_400 ff_mon color_light_white pt-2">
                  We stock the three main families of cannabis at Purple Panda,
                  each of which has its own qualities.
                </p>
                <div className="d-flex align-items-center mt-4">
                  <h2 className="fs_24 fw_600 text-white ff_mon">Indica:</h2>
                  <p className="fs_16 fw_400 ff_mon color_light_white mb-0  ps-3">
                    These are your bedtime buds, great for relaxing at the end
                    of the day and for treating stress and anxiety.
                  </p>
                </div>
                <div className="d-flex align-items-center mt-4">
                  <h2 className="fs_24 fw_600 text-white ff_mon">Sativa::</h2>
                  <p className="fs_16 fw_400 ff_mon color_light_white mb-0  ps-3">
                    Smoke up some Sativa for a boost of energy and creativity,
                    perfect for a sunny summer’s day with friends!
                  </p>
                </div>
                <div className="d-flex align-items-center mt-4">
                  <h2 className="fs_24 fw_600 text-white ff_mon">Hybrid:</h2>
                  <p className="fs_16 fw_400 ff_mon color_light_white mb-0  ps-3">
                    Get the best of both worlds with our Hybrid range, bringing
                    together the sensations and flavors of Indica and Sativa for
                    something totally unique.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <div className="d-grid">
                <div className="box_1 mt-md-4">
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    className="w_100 h_100"
                    src={box6_img}
                    alt="box1_img"
                  />
                </div>
                <div className="box_2">
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    className="w_100"
                    src={box7_img}
                    alt="box1_img"
                  />
                </div>
                <div className="box_3">
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    className="w-100"
                    src={box8_img}
                    alt="box1_img"
                  />
                </div>
                <div className="box_4">
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    className="w_100"
                    src={box9_img}
                    alt="box1_img"
                  />
                </div>
                <div className="box_5">
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    className="w_100"
                    src={box10_img}
                    alt="box1_img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cannabis;
