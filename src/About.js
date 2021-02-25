import React from "react";
import pic from "./IMG_5139.jpg";
import "./App.css";
import "./ani.scss";

class About extends React.Component {
  onBack = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div className="About">
        <div className="d-flex vh-100 text-center text-white">
          <div className="lightbox-content p-3">
            <header className="mb-auto">
              <div>
                <nav className="nav nav-masthead justify-content-end float-md-end">
                  <button
                    className="btn btn-outline-light"
                    onClick={this.onBack}
                  >
                    X
                  </button>
                </nav>
              </div>
            </header>
            <div className="info-section single-section">
              <div className="row">
                <div className="col-12">
                  <div className="section-heading page-heading">
                    <div className="container">
                      <div className="box">
                        <div className="title">
                          <span className="block1"></span>
                          <h1>
                            About Me<span></span>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center vw-100">
                <div className="col-12 col-lg-5 info-img d-none d-lg-block d-xl-block">
                  <img className="customImg" src={pic} alt="" />
                </div>

                <div className="col-12 col-lg-7 info-content">
                  <div className="content-block">
                    <h2 className="content-subtitle">Who am i?</h2>
                    <div className="content-description">
                      <h3>我是馬子恆，工程師</h3>
                      <p>
                        在大學求學的過程中，透過課程的修習，慢慢了解到自己想要從事資工的行業，所以去修資工系的課程，往自己想要的領域發展，同時我熱愛生活、喜歡挑戰自己，透過不斷的思考來解決問題。
                      </p>
                    </div>
                    <address className="content-info">
                      <div className="row">
                        <div className="col-12 col-md-6 single-info">
                          <span>Name:</span>
                          <p>馬子恆</p>
                        </div>
                        <div className="col-12 col-md-6 single-info">
                          <span>Email:</span>
                          <p>ffmkx215@gmail.com</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-md-6 single-info">
                          <span>Age:</span>
                          <p>23</p>
                        </div>
                        <div className="col-12 col-md-6 single-info">
                          <span>From:</span>
                          <p>Taipei, Taiwan</p>
                        </div>
                      </div>
                    </address>
                    <div className="d-block d-sm-flex justify-content-center">
                      <ul className="list-unstyled list-inline content-follow">
                        <li className="list-inline-item">
                          <a
                            className="customBtn"
                            href="https://www.facebook.com/ffmkx/"
                            data-mdb-toggle="animation"
                          >
                            <i className="fab fa-facebook h4"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            className="customBtn"
                            href="https://www.instagram.com/ponymichael/"
                          >
                            <i className="fab fa-instagram h4"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            className="customBtn"
                            href="https://www.linkedin.com/in/%E5%AD%90%E6%81%86-%E9%A6%AC-778b2b1b1/"
                          >
                            <i className="fab fa-linkedin h4"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            className="customBtn"
                            href="https://github.com/ffmkx215"
                          >
                            <i className="fab fa-github h4"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            className="customBtn"
                            href="https://twitter.com/D18iohned4N9DF4"
                          >
                            <i className="fab fa-twitter h4"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
