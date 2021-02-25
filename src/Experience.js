import React from "react";

class Experience extends React.Component {
  onBack = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div className="Experience">
        <div className="d-flex h-100 text-center text-white">
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
            <section className="resume-section text-center" id="education">
              <div className="d-flex flex-column resume-section-content vh-100">
                <div className="container mb-5">
                  <div className="box">
                    <div className="title">
                      <span className="block3"></span>
                      <h1>
                        Experience<span></span>
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="d-lg-none d-xl-none">
                  <div className="flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                      <h5 className="card-title">工作經歷</h5>
                      <p className="card-text">
                        學習前端Vue的技術，搭配Wordpress與WooCommmerce架設電商網站;利用Cordova打包Web形成Web
                        APP
                      </p>
                      <a href="https://igcar.com.tw/">前往查看</a>
                      <h5 className="card-title">實習經歷</h5>
                      <p className="card-text">
                        台大土木電腦輔助工程組暑期實習，利用Grasshopper將橋樑快速塑模
                      </p>
                      <h5 className="card-title">競賽經歷</h5>
                      <p className="card-text">
                        法律科技黑客松競賽，利用chatbox將資料送給後端，來判斷適用的法律，以及類似的案例
                      </p>
                      <h5 className="card-title">漂浮水上鞦韆</h5>
                      <p className="card-text">
                        與成大建築、水利系合作，透過MATLAB計算結構、浮力並將成品打造出來
                      </p>
                      <h5 className="card-title">台大男籃</h5>
                      <p className="card-text">
                        參與學校校隊，學習時間管理、團隊精神、紀律，為校爭光
                      </p>
                      <h5 className="card-title">畢業籌辦會</h5>
                      <p className="card-text">
                        擔任活動部員策劃，規劃一系列活動祝福畢業生人生啟航
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column d-none d-lg-block d-xl-block">
                  <div className="d-flex flex-row justify-content-center">
                    <div
                      className="card text-dark text-center mx-2 mb-2"
                      style={{ width: "15rem" }}
                    >
                      <div className="card-body">
                        <h5 className="card-title">工作經歷</h5>
                        <p className="card-text">
                          學習前端Vue的技術，搭配Wordpress與WooCommmerce架設電商網站;利用Cordova打包Web形成Web
                          APP
                        </p>
                        <a href="https://igcar.com.tw/">前往查看</a>
                      </div>
                    </div>
                    <div
                      className="card text-dark text-center mx-2 mb-2"
                      style={{ width: "15rem" }}
                    >
                      <img
                        className="card-img-top d-none d-lg-block d-xl-block"
                        src="IMG_2751.JPG"
                        alt=""
                        style={{ width: "15rem", height: "10rem" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">實習經歷</h5>
                        <p className="card-text">
                          台大土木電腦輔助工程組暑期實習，利用Grasshopper將橋樑快速塑模
                        </p>
                      </div>
                    </div>
                    <div
                      className="card text-dark text-center mx-2 mb-2"
                      style={{ width: "15rem" }}
                    >
                      <img
                        className="card-img-top d-none d-lg-block d-xl-block"
                        src="2.JPG"
                        alt=""
                        style={{ width: "15rem", height: "10rem" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">競賽經歷</h5>
                        <p className="card-text">
                          法律科技黑客松競賽，利用chatbox將資料送給後端，來判斷適用的法律，以及類似的案例
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-center">
                    <div
                      className="card text-dark text-center mx-2 mb-2"
                      style={{ width: "15rem" }}
                    >
                      <img
                        className="card-img-top d-none d-lg-block d-xl-block"
                        src="IMG_2493.JPG"
                        alt=""
                        style={{ width: "15rem", height: "10rem" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">漂浮水上鞦韆</h5>
                        <p className="card-text">
                          與成大建築、水利系合作，透過MATLAB計算結構、浮力並將成品打造出來
                        </p>
                      </div>
                    </div>
                    <div
                      className="card text-dark text-center mx-2 mb-2"
                      style={{ width: "15rem" }}
                    >
                      <img
                        className="card-img-top d-none d-lg-block d-xl-block"
                        src="IMG_1714.JPG"
                        alt=""
                        style={{ width: "15rem", height: "10rem" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">台大男籃</h5>
                        <p className="card-text">
                          參與學校校隊，學習時間管理、團隊精神、紀律，為校爭光
                        </p>
                      </div>
                    </div>
                    <div
                      className="card text-dark text-center mx-2 mb-2"
                      style={{ width: "15rem" }}
                    >
                      <img
                        className="card-img-top d-none d-lg-block d-xl-block"
                        src="IMG_0412.png"
                        alt=""
                        style={{ width: "15rem", height: "10rem" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">畢業籌辦會</h5>
                        <p className="card-text">
                          擔任活動部員策劃，規劃一系列活動祝福畢業生人生啟航
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <hr className="m-0" />
          </div>
        </div>
      </div>
    );
  }
}
export default Experience;
