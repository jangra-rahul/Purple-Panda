import React, { useState } from "react";
import gift from "../assets/image/png/gift.png";
import img from "../assets/image/png/img.jpg";
import logo from "../assets/image/png/logo.png";
import vector from "../assets/image/png/Vector.png";
import troli from "../assets/image/png/troli.png";
import panda from "../assets/image/png/panda.png";
import shado from "../assets/image/png/shado.png";
import leaves from "../assets/image/png/leaves.png";
import phone from "../assets/image/png/phone.png";
import sms from "../assets/image/png/sms.png";
import footer_img from "../assets/image/png/footer_img.png";

function Contact() {
  const [name, setName] = useState(false);
  if (name) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  return (
    <>
      <section className="bg_img_1 bg_dark_blue d-flex flex-column min_vh_100">
        <div className="bg_b">
          <div className="d-md-flex d-none align-items-center text-center  text-md-start py-2 justify-content-center">
            <img src={gift} alt="gift" />
            <p className="fs_16 fw_300 ff_phi color_light_white mb-0 ps-3">
              <span className="fw_800 ff_mon">Black Friday</span> savings are
              here ,save up to 10% off on coupon code
            </p>
            <div className="">
              <h1 className="fs_16 fw_800 ff_mon text_color mb-0 ps-2">
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
              <li className="">
                <a
                  className="text-decoration-none ff_mon fs_16 fw_400 me-lg-4 pe-lg-2 me-2 before position-relative color_light_white text_h  line "
                  href="#memories"
                >
                  CONTACT
                </a>
              </li>
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
            <h2 className="fs_48 fw_400 ff_phi text-white mb-0 text-center">
              Contact
            </h2>
            <p className="fs_16 fw_400 ff_mon color_light_white  text-center">
              Home Contact
            </p>
          </div>
        </div>
      </section>
      <div className=" bg_dark_blue py-5">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6">
              <img className="w-100" src={leaves} alt="leaves" />
            </div>
            <div className="col-md-6">
              <div className="form_box">
                <h2 className="fs_32 fw_700  text-center text-md-start ff_phi text-white">
                  Feel free to <span className="text_color">contact us</span>{" "}
                  anytime you need our help.
                </h2>
                <p className="fs_16 fw_400 text-center text-md-start  ff_mon color_light_white">
                  We usually reply in 24 hours, if there is an urgent need to
                  reach us. please give us a call at the number below
                </p>
                <div className="row justify-content-between mt-4 align-items-center">
                  <div className="d-flex justify-content-center col-lg-4 align-items-center">
                    <img src={phone} alt="phone" />
                    <p className="fs_16 mb-0 ps-3 fw_700 ff_mon text-white">
                      1-888-726-3219
                    </p>
                  </div>
                  <div className="d-flex justify-content-center col-lg-7 align-items-center">
                    <img src={sms} alt="phone" />
                    <p className="fs_16 mb-0 ps-3 fw_700 ff_mon text-white">
                      purplepandagta.info@proton.me
                    </p>
                  </div>
                </div>
                <form action="">
                  <div className="row mt-5">
                    <div className="col-sm-6">
                      <input
                        className=" fs_16 fw_400 color_light_white inbut_box"
                        type="text"
                        placeholder="First name"
                      />
                    </div>
                    <div className="col-sm-6 mt-3 mt-sm-0">
                      <input
                        className=" fs_16 fw_400 color_light_white inbut_box"
                        type="text"
                        placeholder="Last name"
                      />
                    </div>
                    <div className="col-sm-6 mt-3">
                      <input
                        className=" fs_16 fw_400 color_light_white inbut_box"
                        type="text"
                        placeholder="Email address"
                      />
                    </div>
                    <div className="col-sm-6 mt-3">
                      <input
                        className=" fs_16 fw_400 color_light_white inbut_box"
                        type="text"
                        placeholder="Phone number"
                      />
                    </div>
                  </div>
                  <div className="col-12 mt-3 mb-5">
                    <input
                      className=" h-100 fs_16 fw_400 color_light_white inbut_box1"
                      type="text"
                      placeholder="Message..."
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <a
                      className="but fs_20 fw_700 ff_mon color_light_white"
                      href="#"
                    >
                      SUBMIT
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg_dark_blue py-5">
        <div className="container">
          <h2 className="fs_48 fw_400 ff_phi text-center text-white">
            Store <span className="text_color">Hours</span>
          </h2>
          <div className="d-flex justify-content-center mt-5">
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
      </div>
      <div className="bg_footer pt-5 pb-4">
        {" "}
        <div className="container">
          <div className="d-flex flex-column align-items-center">
            <img src={footer_img} alt="footer_img" />
            <p className="fs_16 fw_400 mx-auto text-center pt-4 mb-0 ff_mon color_light_white max_636">
              Tempor cras et scelerisque bibendum. Sapien proin pharetra iaculis
              cras massa auctor turpis. Eget massa imperdiet sit massa. Hac sit
              nec.
            </p>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <ul className="d-flex ps-0 mb-0 gap-4">
              <li>
                <a
                  className="fs_16 fw_700 ff_mon text-white position-relative line1"
                  href="#"
                >
                  SHOP
                </a>
              </li>
              <li>
                <a
                  className="fs_16 fw_700 ff_mon text-white position-relative line1"
                  href="#"
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  className="fs_16 fw_700 ff_mon text-white position-relative line1"
                  href="#"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-bottom1 mt-5"></div>
        <p className="text-center color_light_white fs_16 mb-0 fw_400  pt-4">
          copyright2022purplepanda
        </p>
      </div>
    </>
  );
}

export default Contact;
