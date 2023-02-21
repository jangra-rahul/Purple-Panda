import React, { useState } from "react";
import gift from "../assets/image/png/gift.png";
import img from "../assets/image/png/img.png";
import logo from "../assets/image/png/logo.png";
import vector from "../assets/image/png/Vector.png";
import troli from "../assets/image/png/troli.png";
import panda from "../assets/image/png/panda.png";
import shado from "../assets/image/png/shado.png";
import { Link } from "react-router-dom";

function Header() {
  const [name, setName] = useState(false);
  if (name) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  return (
    <>
      <section className="bg_img bg_dark_blue d-flex flex-column min_vh_100">
        <div className="bg_b">
          <div className="d-md-flex d-none align-items-center text-center  text-md-start py-2 justify-content-center">
            <img src={gift} alt="gift" />
            <p className="fs_16 fw_300 ff_phi color_light_white mb-0 ps-3">
              <span className="fw_800 ff_mon text-white">Black Friday</span>{" "}
              savings are here ,save up to 10% off on coupon code
            </p>
            <div className="">
              <h1 className="fs_16 fw_800 ff_mon color_pink mb-0 ps-2">
                Shop Now
              </h1>
            </div>
          </div>
        </div>{" "}
        <div className="container ">
          <div className="d-flex pt-4 pb-0 align-items-center justify-content-between">
            <a
              data-aos="fade-up-right"
              data-aos-duration="1000"
              className="d-flex align-items-center"
              href="#"
            >
              <img src={logo} alt="nav" />
            </a>
            <div
              onClick={() => setName(true)}
              className="navdot d-md-none pt-2"
            >
              <div className="navmanu"></div>
              <div className="navmanu my-2"></div>
              <div className="navmanu"></div>
            </div>
            <ul
              data-aos-duration="1000"
              data-aos="fade-down-left"
              className="d-md-flex d-none align-items-center ps-0 mb-0"
            >
              <li className="">
                <a
                  className="text-decoration-none ff_mon fs_16 fw_400 me-lg-4 pe-lg-2 me-2 before position-relative color_light_white text_h   line"
                  href="#home"
                >
                  HOME
                </a>
              </li>
              <li className="">
                <a
                  className="text-decoration-none ff_mon fs_16 fw_400 me-lg-4 pe-lg-2 me-2 before position-relative color_light_white text_h  line"
                  href="#popular"
                >
                  SHOP
                </a>
              </li>
              <li className="">
                <a
                  className="text-decoration-none ff_mon fs_16 fw_400 me-lg-4 pe-lg-2 me-2 before position-relative color_light_white text_h  line "
                  href="#travelaes"
                >
                  ABOUT
                </a>
              </li>
              <Link to="/Contact">
                {" "}
                <li className="">
                  <a
                    className="text-decoration-none ff_mon fs_16 fw_400 me-lg-4 pe-lg-2 me-2 before position-relative color_light_white text_h  line "
                    href="#memories"
                  >
                    CONTACT
                  </a>
                </li>
              </Link>
              <li className="">
                <a
                  className="text-decoration-none ff_mon fs_16 fw_404 pe-lg-2 me-3 before position-relative color_light_white text_h  line "
                  href="#memories"
                >
                  FAQ
                </a>
              </li>
              <div className="d-flex align-items-center justify-content-between bg me-4">
                <input
                  className="fs_16 input fw_400 ff_mon color_light_white"
                  type="text"
                  placeholder="Search here.."
                />
                <img src={vector} alt="vector" />
              </div>
              <a href="#">
                <img className="me-4 scle" src={troli} alt="troli" />
              </a>
              <a className="but fs_20 fw_700 ff_mon color_light_white" href="#">
                SIGN IN
              </a>
            </ul>
          </div>

          <div className={`${name ? "show" : "hide"}`}>
            <a
              onClick={() => setName(false)}
              className="d-md-none text-decoration-none d-flex justify-content-end me-3 "
              href="#"
            >
              <img className="position-absolute1" src={img} alt="img" />
            </a>

            <ul className="d-md-none d-flex flex-column justify-content-center min-vh-100 align-items-center ps-0 mb-0 gap-4">
              <li className="">
                <a
                  onClick={() => setName(false)}
                  className="text-decoration-none ff_mon fs_16 fw_400 color_light_white  position-relative line d-inline "
                  href="#"
                >
                  HOME
                </a>
              </li>
              <li className="">
                <a
                  onClick={() => setName(false)}
                  className="text-decoration-none ff_mon fs_16 fw_400 color_light_white  position-relative line d-inline "
                  href="#"
                >
                  SHOP
                </a>
              </li>
              <li className="">
                <a
                  onClick={() => setName(false)}
                  className="text-decoration-none ff_mon fs_16 fw_400 color_light_white  position-relative line d-inline"
                  href="#"
                >
                  ABOUT
                </a>
              </li>
              <li className="">
                <a
                  onClick={() => setName(false)}
                  className="text-decoration-none ff_mon fs_16 fw_400 color_light_white  position-relative line d-inline "
                  href="#"
                >
                  CONTACT
                </a>
              </li>
              <li className="">
                <a
                  onClick={() => setName(false)}
                  className="text-decoration-none ff_mon fs_16 fw_400 color_light_white  position-relative line d-inline "
                  href="#"
                >
                  FAQ
                </a>
              </li>
              <a className="but fs_20 fw_700 ff_mon text-white" href="#">
                SIGN IN
              </a>
            </ul>
          </div>
          <div className="border-bootom mt-2"></div>
        </div>
        <div className="d-flex flex-column flex-grow-1 justify-content-center py-md-5 py-3">
          <div className="container">
            <div className="row align-items-center">
              <div
                data-aos="fade-up-right"
                data-aos-duration="1000"
                className="col-md-6 text-center text-md-start mt-3 mt-md-0"
              >
                <h2 className="fs_80 fw_700 ff_phi text-white">
                  Setting a{" "}
                  <span className="fs_400 text_color ff_phi">‘High’</span>{" "}
                  Standard
                </h2>
                <p className="fs_16 fw_400 ff_mon color_light_white pt-2 mb-md-5 mb-4 pb-3">
                  We at Purple Panda are passionate about becoming the best
                  online weed dispensary Canada has ever seen. We believe in
                  good products, fair pricing, and top-notch customer service
                </p>
                <a
                  className="but fs_20 fw_700 ff_mon color_light_white"
                  href="#"
                >
                  SIGN IN
                </a>
              </div>
              <div
                data-aos-duration="1000"
                data-aos="fade-down-left"
                className="col-md-5 ms-md-5 mt-4 mt-md-0 position-relative"
              >
                <img className="w-100" src={panda} alt="panda" />
                <img
                  className="w-100 position_absolute"
                  src={shado}
                  alt="shado"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
