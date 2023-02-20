import React from "react";
import box1_img from "../assets/image/png/box1_img.png";
import box2_img from "../assets/image/png/box2_img.png";
import box3_img from "../assets/image/png/box3_img.png";
import box4_img from "../assets/image/png/box4_img.png";
import box5_img from "../assets/image/png/box5_img.png";

function About() {
  return (
    <>
      <section className="about_bg py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="box position-relative text-center text-md-start"
              >
                <h2 className="fs_48 fw_400 ff_phi text-white">
                  About <span className=" text_color">Us</span>
                </h2>
                <p className="fs_16 fw_400 ff_mon color_light_white mb-5 pt-2">
                  Purple Panda is a Canadian online cannabis dispensary with a
                  passion for good weed and even better customer service. We all
                  remember the days of waiting for scary strangers on street
                  corners, but thankfully those days are over. Now, we’re proud
                  of how we provide an easy, convenient, and user-friendly
                  experience to our clients. We specialize in high-quality
                  cannabis for both recreational and medical purposes, while
                  also making sure that you’re getting the best bud for your
                  buck! Along with all the different strains of cannabis that we
                  stock, you can also get your fill of edibles, vapes, CBD,
                  extracts, and even buy magic mushrooms online from our store.
                </p>
                <a
                  className="but fs_20 fw_700 ff_mon color_light_white"
                  href="#"
                >
                  READ MORE
                </a>
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <div className="d-grid">
                <div className="box_1 mt-md-4">
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    className="w_100 h_100"
                    src={box1_img}
                    alt="box1_img"
                  />
                </div>
                <div className="box_2">
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    className="w_100"
                    src={box2_img}
                    alt="box1_img"
                  />
                </div>
                <div className="box_3">
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    className="w-100"
                    src={box3_img}
                    alt="box1_img"
                  />
                </div>
                <div className="box_4">
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    className="w_100"
                    src={box4_img}
                    alt="box1_img"
                  />
                </div>
                <div className="box_5">
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    className="w_100"
                    src={box5_img}
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

export default About;
