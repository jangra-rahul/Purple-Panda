import React from "react";
import dot from "../assets/image/png/dot.png";
import mask3 from "../assets/image/png/Mask3.png";
import mask4 from "../assets/image/png/Mask4.png";
import section_sh from "../assets/image/png/section_sh.png";

function Toronto() {
  return (
    <>
      <section className="bg_dark_blue overflow-hidden position-relative  py-5">
        <img
          className="position-absolute-2 d-md-block d-none"
          src={section_sh}
          alt="section_sh"
        />
        <div className="container">
          <h2 className="fs_24 max_636 text-center mx-auto fw_600 ff_mon text-white">
            We’re based in both the{" "}
            <span className="text_color">Greater Toronto Area</span>, with our
            delivery service covering:
          </h2>
          <p className="fs_16 max_636 text-center mx-auto fw_400 ff_mon color_light_white">
            If you’re in any of these cities and need a little pick me up, you
            know where to go!
          </p>
          <div className="row mt-5">
            <div className="col-md-6 mt-4 position-relative">
              <img
                className=" position-absolute end-0 bottom-0 d-md-block d-none"
                src={mask3}
                alt="mask3"
              />
              {/* <div className="d-flex justify-content-center align-items-center"> */}
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="card_1 d-flex flex-column align-items-center justify-content-center"
              >
                <div>
                  <div className="d-flex  align-items-center ">
                    <img src={dot} alt="dot" />
                    <h2 className="fs_32 mb-0 fw_400 ff_mon text-white ps-3">
                      Mississauga
                    </h2>
                  </div>
                  <div className="d-flex mt-3 align-items-center">
                    <img src={dot} alt="dot" />
                    <h2 className="fs_32 fw_400 ff_mon text-white ps-3">
                      Oakville
                    </h2>
                  </div>
                  <div className="d-flex mt-3 align-items-center ">
                    <img src={dot} alt="dot" />
                    <h2 className="fs_32 fw_400 ff_mon text-white ps-3">
                      Brampton
                    </h2>
                  </div>
                  <div className="d-flex mt-3 align-items-center ">
                    <img src={dot} alt="dot" />
                    <h2 className="fs_32 fw_400 ff_mon text-white ps-3">
                      Etobicoke
                    </h2>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
            <div className="col-md-6 position-relative mt-4">
              <img
                className=" position-abso d-md-block d-none"
                src={mask4}
                alt="mask3"
              />
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="card_1 d-flex justify-content-center flex-column align-items-center"
              >
                <div>
                  <div className="d-flex align-items-center ">
                    <img src={dot} alt="dot" />
                    <h2 className="fs_32  fw_400 ff_mon text-white ps-3">
                      Toronto
                    </h2>
                  </div>
                  <div className="d-flex mr_15 mt-3 align-items-center">
                    <img src={dot} alt="dot" />
                    <h2 className="fs_32 fw_400 ff_mon text-white ps-3">
                      Vaughan
                    </h2>
                  </div>
                  <div className="d-flex mt-3 mr-15 align-items-center ">
                    <img src={dot} alt="dot" />
                    <h2 className="fs_32 fw_400 ff_mon text-white ps-3">
                      Markham
                    </h2>
                  </div>
                  <div className="d-flex mt-3 align-items-center ">
                    <img src={dot} alt="dot" />
                    <h2 className="fs_32 fw_400 ff_mon text-white ps-3">
                      Richmond
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Toronto;
