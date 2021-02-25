import React from "react";
import "./App.css"
import "./ani.scss";

class Education extends React.Component {
  onBack = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div
        className="Education"
      >
        <body className="d-flex h-100 text-center text-white">
          <div className="cover-container d-flex vw-100 p-3 mx-auto flex-column">
            <header className="mb-5">
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
            <section className="resume-section" id="education">
            <div className="d-flex flex-column resume-section-content vh-100">
            <div className="container mb-5">
                      <div className="box">
                      <div className="title">
                          <span className="block2"></span>
                          <h1>
                            Eduction<span></span>
                          </h1>
                        </div>
                      </div>
                    </div>
              <div className="flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0">National Taiwan University</h3>
                  <div className="subheading mb-3">Bachelor of Science</div>
                  <div>Civil Engineering</div>
                  <p>GPA: 3.04</p>
                  <p>修習計算機程式、物件導向程式語言、資料科學的工程應用、資料結構、演算法、計算機組織與結構、作業系統</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary">September 2016 - June 2020</span>
                </div>
              </div>
              <div className="flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0">Songshan Senior High School</h3>
                  <div className="subheading mb-3">General Education</div>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary">September 2013 - June 2016</span>
                </div>
              </div>
            </div>
          </section>
          <hr className="m-0" />
          </div>
        </body>
      </div>
    );
  }
}
export default Education;
