import React from "react";
import can_sh from "../assets/image/png/can_sh.png";

function Store() {
  return (
    <div>
      <section className=" position-relative bg_dark_blue py-5">
        <img
          className=" w-100 position-absolute-11 end-0 bottom-0"
          src={can_sh}
          alt="can_sh"
        />
        <div className="container">
          <h2 className="fs_48 fw_400 ff_phi text-center text-white">
            Store <span className="text_color">Hours</span>
          </h2>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="d-flex justify-content-center mt-5"
          >
            <div className="max_272 ">
              <div className="max_272">
                <h2 className="fs_24 fw_600 ff_mon text-center text-white  ">
                  Mon : 10am-8pm{" "}
                </h2>
                <div className="border_bottom mt-2"></div>
              </div>
              <div className="max_272 pt-4 mt-2">
                <h2 className="fs_24 fw_600 ff_mon text-center text-white  ">
                  Wed : 10am-8pm
                </h2>
                <div className="border_bottom mt-2"></div>
              </div>
              <div className="max_272 pt-4 mt-2">
                <h2 className="fs_24 fw_600 ff_mon text-center text-white  ">
                  Fri : 10am-8pm
                </h2>
                <div className="border_bottom mt-2"></div>
              </div>
            </div>
            <div className="ms-5 max_272">
              <div className="max_272">
                <h2 className="fs_24 fw_600 ff_mon text-center text-white  ">
                  Mon : 10am-8pm{" "}
                </h2>
                <div className="border_bottom mt-2"></div>
              </div>
              <div className="max_272 pt-4 mt-2">
                <h2 className="fs_24 fw_600 ff_mon text-center text-white  ">
                  Wed : 10am-8pm
                </h2>
                <div className="border_bottom mt-2"></div>
              </div>
              <div className="max_272 pt-4 mt-2">
                <h2 className="fs_24 fw_600 ff_mon text-center text-white  ">
                  Fri : 10am-8pm
                </h2>
                <div className="border_bottom mt-2"></div>
              </div>
            </div>
          </div>
          <div className="d-flex max_272 mx-auto justify-content-center">
            <div className=" pt-4 mt-2">
              <h2 className="fs_24 fw_600 ff_mon text-center text-white  ">
                Fri : 10am-8pm
              </h2>
              <div className="border_bottom mt-2 max_272"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Store;
