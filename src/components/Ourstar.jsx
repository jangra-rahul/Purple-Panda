import React from "react";
import star2 from "../assets/image/png/2start.png";
import star3 from "../assets/image/png/3start.png";
import star4 from "../assets/image/png/4start.png";
import star5 from "../assets/image/png/5start.png";

function Ourstar() {
  return (
    <>
      <section className="bg_image py-5 bg_dark_blue">
        <div className="container">
          <div className="col-md-6">
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="our_box"
            >
              <h2 className="fs_48 fw_700 ff_phi text-white">
                Our <span className="text_color ff_phi">Classifications</span>
              </h2>
              <p className="fs_16 fw_400 ff_mon color_light_white">
                We’re proud of all our weed, but we still classify it based on
                quality and price, with our levels classed at:
              </p>
              <img className="pt-2" src={star2} alt="star2" />
              <h4 className="fs_24 fw_600 ff_mon text-white pt-1 mb-1">
                2- Star
              </h4>
              <p className="fs_16 fw_400 ff_mon color_light_white">
                Very affordable , entry level quality
              </p>
              <img className="pt-2" src={star3} alt="star2" />
              <h4 className="fs_24 fw_600 ff_mon text-white pt-1 mb-1">
                2- Star
              </h4>
              <p className="fs_16 fw_400 ff_mon color_light_white">
                Very affordable , entry level quality
              </p>
              <img className="pt-2" src={star4} alt="star2" />
              <h4 className="fs_24 fw_600 ff_mon text-white pt-1 mb-1">
                2- Star
              </h4>
              <p className="fs_16 fw_400 ff_mon color_light_white">
                Very affordable , entry level quality
              </p>
              <img className="pt-2" src={star5} alt="star2" />
              <h4 className="fs_24 fw_600 ff_mon text-white pt-1 mb-1">
                2- Star
              </h4>
              <p className="fs_16 fw_400 mb-5 ff_mon color_light_white">
                Very affordable , entry level quality
              </p>
              <a className="but fs_20 fw_700 ff_mon text-white" href="#">
                TRY PURPLE PANDA TODAY
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ourstar;
