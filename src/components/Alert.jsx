import React from "react";
import panda1 from "../assets/image/png/panda1.png";
import badle from "../assets/image/png/badhl.png";
import badle1 from "../assets/image/png/badhl1.png";
import GIF from "../assets/image/png/GIF 1.png";

function Alert() {
  return (
    <>
      <div className=" bg_dark_blue py-5 ">
        <h2 className="fs_48 fw_700 ff_phi text-white text-center mb-0">
          Potent Cannabis <span className="text_color">Alert</span>
          <p className="fs_16 fw_400 ff_mon color_light_white mb-0 text-center pt-3">
            click here to try our most potent hand picked craft cannabis
          </p>
        </h2>
      </div>
      <section className="Alert_bg position-relative overflow-hidden bg_dark_blue pb-md-5">
        <img
          className=" position-absolute-badhl3 animation3 d-sm-block d-none "
          src={badle}
          alt="badle"
        />
        <img
          className=" position-absolute-badhl4 d-sm-block d-none "
          src={badle1}
          alt="badle"
        />
        <div className="container position-relative d-flex justify-content-center">
          <img
            className=" position-absolute animation d-sm-block d-none top-50"
            src={badle}
            alt="badle"
          />
          <img
            className=" position-absolute-badhl animation1 d-sm-block d-none "
            src={badle}
            alt="badle"
          />
          <img
            className=" position-absolute-badhl1 animation2  d-sm-block d-none "
            src={badle}
            alt="badle"
          />
          <img
            className=" position-absolute-badhl2 animation3  d-sm-block d-none "
            src={badle}
            alt="badle"
          />
          <div className=" position-relative col-8">
            <div className=" position-relative">
              <img
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="w-100"
                src={panda1}
                alt="panda1"
              />
              {/* <img className=" position-absolute-five" src={GIF} alt="GIF" /> */}
            </div>
            <a
              className="but1 positionabsolut fs_20 fw_700 ff_mon text-white"
              href="#"
            >
              Take me to space cannabis
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Alert;
