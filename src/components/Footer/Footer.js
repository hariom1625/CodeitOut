import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer className="new_footer_area bg_color">
          <div className="new_footer_top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div
                    className="f_widget company_widget wow fadeInLeft"
                    data-wow-delay="0.2s"
                  >
                    <form
                      action="#"
                      className="f_subscribe_two mailchimp"
                      method="post"
                      noValidate={true}
                      _lpchecked="1"
                    >
                      <p className="mchimp-errmessage"></p>
                      <p className="mchimp-sucmessage"></p>
                    </form>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="f_widget about-widget pl_70 wow fadeInLeft"
                    data-wow-delay="0.4s"
                  >
                    <ul className="list-unstyled f_list"></ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="f_widget about-widget pl_70 wow fadeInLeft"
                    data-wow-delay="0.6s"
                  >
                    <ul className="list-unstyled f_list"></ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="f_widget social-widget pl_70 wow fadeInLeft"
                    data-wow-delay="0.8s"
                  >
                    <div className="f_social_icon">
                      <a
                        href="mailto:hariomyadav16383@gmail.com"
                        className="fas fa-envelope"
                      >
                        {" "}
                      </a>
                      <a
                        href="https://www.linkedin.com/in/hari-om-yadav-ab923a195/"
                        className="fab fa-linkedin"
                      >
                        {" "}
                      </a>
                      <a
                        href="https://github.com/hariom1625/CodeitOut"
                        className="fab fa-github"
                      >
                        {" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer_bg">
              <div className="footer_bg_one"></div>
              <div className="footer_bg_two"></div>
            </div>
          </div>
          <div className="footer_bottom">
            <div className="container">
              <div className=" align-items-center">
                <p className="github-prof foot-note">
                  Made with 💚 by{" "}
                  <a
                    className="github-prof"
                    href="https://github.com/hariom1625"
                  >
                    Hari Om{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
