import React from "react";
import Mask2 from "../assets/image/png/Mask2.png";
import Mask1 from "../assets/image/png/Mask1.png";

function Our() {
  return (
    <>
      <section className="py-5 bg_dark_blue">
        <div className="container position-relative">
          <img
            className="position-absolute bottom-0 d-md-block d-none start-0"
            src={Mask2}
            alt="Mask2"
          />
          <img
            className="position-absolute top-0 d-md-block d-none end-0"
            src={Mask1}
            alt="Mask2"
          />
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="overlay_box py-5"
          >
            <h2 className="fs_48 fw_700 ff_phi text-center text-white">
              Our <span className="text_color">Range</span>
            </h2>
            <p className="fs_16 fw_400 ff_mon mx-auto pt-4 text-center color_light_white max_703">
              We have a variety of different recreational and medicinal items in
              our range, including cannabis, vapes, edibles, magic mushrooms,
              extracts, and CBD products, to help you unwind, have fun, and even
              do some valuable soul searching.
            </p>
            <p className="fs_16 fw_400 ff_mon mx-auto pt-2 mb-0 mb-3 text-center color_light_white max_703">
              Whether you’re looking to order edibles online or browse for your
              new favorite strain, Purple Panda has got you covered.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Our;
