import React from "react";
import footer_img from "../assets/image/png/footer_img.png";

function Footer() {
  return (
    <>
      <section className="bg_footer position-relative pt-5 pb-4">
        <div data-aos="zoom-in" data-aos-duration="1000" className="container">
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
      </section>
    </>
  );
}

export default Footer;
