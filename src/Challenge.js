import React from "react";
import "./App.css";

class Interests extends React.Component {
  onBack = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div
        className=""
        style={{
          left: 0,
          top: 0,
          width: "100vw",
          height: "100vh",
        }}
      >
        <div className="d-flex h-100 text-center text-white">
          <div className="cover-container d-flex vw-100 p-3 mx-auto flex-column">
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
            <section className="resume-section" id="education">
              <div className="resume-section-content vh-100">
                <div className="container d-flex flex-column">
                  <div className="box">
                    <div className="title mb-5">
                      <span className="block5"></span>
                      <h1>
                        Challenges<span></span>
                      </h1>
                    </div>
                  </div>

                  <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark bg" style={{backgroundImage:'url(together.JPG)'}}>
                    <div className="col-md-6 px-0" style={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
                      <h1 className="display-4 fst-italic">
                        籃球教會我什麼是團隊
                      </h1>
                      <p className="lead my-3">
                        籃球是五個人的運動，要每個人互相的配合才能找到最好的出手位置，整個球隊進步才能前進，在場上要把團隊的勝負放在個人之前，保持高張力的專注度，隨時修正上一個play的錯誤，球隊的大家就是家人，彼此鼓勵，互相照應。
                      </p>
                    </div>
                  </div>

                  <div className="row mb-2">
                    <div className="col-md-6 d-none d-lg-block d-xl-block">
                      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                          <strong className="d-inline-block mb-2 text-primary">
                            人生感悟
                          </strong>
                          <h3 className="mb-0">重裝爬山</h3>
                          <div className="mb-1 text-muted">May 15,2020</div>
                          <p className="card-text mb-auto">
                          人生或許非常不公平，但唯獨爬山這件事例外，大家在山的面前都是平等的，只有一步步往前踏出才能收穫那山頂無盡的美景。
                          </p>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                          <img className="bd-placeholder-img"
                            width="200"
                            height="300"
                            src="IMG_3832.JPG" alt=""></img>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 d-none d-lg-block d-xl-block">
                      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                          <strong className="d-inline-block mb-2 text-success">
                            國家大事
                          </strong>
                          <h3 className="mb-0">當兵生活</h3>
                          <div className="mb-1 text-muted">Jan 20,2021</div>
                          <p className="mb-auto">
                            當兵的四個月，有最多時間思考未來的每一步，更加確定了往資工走的決定。
                          </p>
                        </div>
                        <div className="col-auto d-none d-lg-block d-none d-lg-block d-xl-block">
                          <img
                            className="bd-placeholder-img"
                            width="200"
                            height="300"
                            src="IMG_4866.JPG"
                            alt=""
                          >
                          </img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
export default Interests;
