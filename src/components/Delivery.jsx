import React from "react";
import group from "../assets/image/png/group.png";
import icon from "../assets/image/png/loke.png";
import icon1 from "../assets/image/png/loke1.png";
import icon2 from "../assets/image/png/loke2.png";
import icon3 from "../assets/image/png/loke3.png";
import icon4 from "../assets/image/png/loke4.png";
import icon5 from "../assets/image/png/loke5.png";
import icon6 from "../assets/image/png/loke6.png";
import img_sh from "../assets/image/png/img_sh.png";

function Delivery() {
  return (
    <>
      <section className="py-5 bg_dark_blue">
        <div className="container py-md-5">
          <div className="row justify-content-between">
            <div
              data-aos-duration="1000"
              data-aos="fade-down-right"
              className="col-md-4 mt-4 position-relative"
            >
              <img className=" position-abso1" src={img_sh} alt="img_sh" />
              <img className="w-100" src={group} alt="group" />
            </div>
            <div
              data-aos-duration="1000"
              data-aos="fade-down-right"
              className="col-md-3 mt-4 col-6"
            >
              <div className="d-flex align-items-center">
                <img src={icon1} alt="icon" />
                <h2 className="fs_16 ps-sm-3 pe-2 fw_600 ff_mon text-white">
                  Same Day Delivery
                </h2>
              </div>
              <div className="d-flex mt-3 align-items-center">
                <img src={icon} alt="icon" />
                <h2 className="fs_16 ps-sm-3 pe-2 fw_600 ff_mon text-white">
                  Same Day Delivery
                </h2>
              </div>
              <div className="d-flex mt-3 align-items-center">
                <img src={icon3} alt="icon" />
                <h2 className="fs_16 ps-sm-3 pe-2 fw_600 ff_mon text-white">
                  Premium Marijuana Buds
                </h2>
              </div>
              <div className="d-flex mt-3 align-items-center">
                <img src={icon2} alt="icon" />
                <h2 className="fs_16 ps-sm-3 pe-2 fw_600 ff_mon text-white">
                  Collect Rewards
                </h2>
              </div>
            </div>
            <div
              data-aos-duration="1000"
              data-aos="fade-down-right"
              className="col-md-3 mt-4 col-6"
            >
              <div className="d-flex align-items-center">
                <img src={icon4} alt="icon" />
                <h2 className="fs_16 ps-sm-3 pe-2 fw_600 ff_mon text-white">
                  Canada Wide Mail Orders
                </h2>
              </div>
              <div className="d-flex mt-3 align-items-center">
                <img src={icon5} alt="icon" />
                <h2 className="fs_16 ps-sm-3 pe-2 fw_600 ff_mon text-white">
                  19+
                </h2>
              </div>
              <div className="d-flex mt-3 align-items-center">
                <img src={icon6} alt="icon" />
                <h2 className="fs_16 ps-sm-3 pe-2 fw_600 ff_mon text-white">
                  Secure Transactions
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Delivery;
