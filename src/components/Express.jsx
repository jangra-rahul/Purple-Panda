import React from "react";
import leaves from "../assets/image/png/leaves.png";
import exp_img from "../assets/image/png/exp_sh.png";

function Express() {
  return (
    <>
      <section className="py-5 bg_dark_blue position-relative">
        <img
          className=" position-absolute end-0 top-0"
          src={exp_img}
          alt="exp_img"
        />
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6">
              <img
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="w-100"
                src={leaves}
                alt="leaves"
              />
            </div>
            <div className="col-md-6">
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="box position-relative text-center text-md-start"
              >
                <h2 className="fs_48 fw_400 ff_phi text-white">
                  <span className="text_color"> Express</span> Cannabis Delivery{" "}
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Express;
