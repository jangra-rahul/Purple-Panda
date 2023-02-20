import React from "react";
import img1 from "../assets/image/png/img1.png";
import musrom_img from "../assets/image/png/msrom_sh.png";

function Prices() {
  return (
    <>
      <section className=" py-lg-5 pb-0 bg_dark_blue">
        <div className="container">
          <div className="prices_box">
            <div className="row  justify-content-between">
              <div
                data-aos-duration="1000"
                data-aos="fade-down-right"
                className="col-md-6 text-center text-md-start py-lg-5 py-0"
              >
                <h2 className="fs_48 fw_700 ff_phi text-white">
                  High <span className="text_color">Thoughts</span>, Low{" "}
                  <span className="text_color">Prices</span>
                </h2>
                <p className="fs_16 fw_400 ff_mon color_light_white pt-2 mb-lg-5 mb-4 pb-md-3">
                  We pride ourselves on supplying premium, top-shelf weed
                  without the top-shelf markups. Some dispensaries will charge
                  an arm and a leg for the newest “flavors”, but we believe in
                  fair, affordable prices for good products at every level of
                  quality and breed.
                </p>
                <a className="but fs_20 fw_700 ff_mon text-white" href="#">
                  GIVE PURPLE PANDA A GO
                </a>
              </div>
              <div className="col-md-5 position-relative mt-md-0 mt-md-0">
                <img
                  className="w-75 top-0 position-absolute"
                  src={musrom_img}
                  alt="musrom_img"
                />
                <img
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className="w-100 position-absolute_4 trans "
                  src={img1}
                  alt="img1"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Prices;
