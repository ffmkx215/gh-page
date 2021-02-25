import "./App.css";
import "./ani.scss"
import React from "react";

class App extends React.Component {
  goToPage(pathname) {
    this.props.history.push({ pathname });
  }

  goToAboutPage = () => {
    this.goToPage("/profile/about");
  };

  goToEducationPage = () => {
    this.goToPage("/profile/education");
  };

  goToExperiencePage = () => {
    this.goToPage("/profile/experience");
  };

  goToSkillsPage = () => {
    this.goToPage("/profile/skills");
  };

  goToChallengePage = () => {
    this.goToPage("/profile/challenge");
  };

//   componentDidMount() {
//     // 监听路由的变化,如果路由发生变化则进行相应操作
//     this.props.history.listen(location => {
//         // 最新路由的 location 对象，可以通过比较 pathname 是否相同来判断路由的变化情况
//         if (this.props.location.pathname !== location.pathname && location.pathname !=='/') {
//           document.getElementsByTagName('body')[0].style.overflow='auto';
//         }
//         else {
//           document.getElementsByTagName('body')[0].style.overflow='hidden';
//         }
//     })
// }
  render() {
    return (
      <section className="App">
        <div className="d-flex h-100 text-center text-white">
          <div
            className="element-cover-bg home-area"
            style={{backgroundImage:'URL(profile/IMG_4692.jpg)'}}
          >
            <div className="cover-container d-flex vw-100 p-3 mx-auto flex-column home-area">
              <header className="mb-auto">
                <div>
                  <nav className="nav nav-masthead justify-content-center float-md-end">
                    <button
                      type="button"
                      className="customBtn"
                      onClick={this.goToAboutPage}
                    >
                      About
                    </button>
                    <button
                      type="button"
                      className="customBtn"
                      onClick={this.goToEducationPage}
                    >
                      Education
                    </button>
                    <button
                      type="button"
                      className="customBtn"
                      onClick={this.goToExperiencePage}
                    >
                      Experience
                    </button>
                    <button
                      type="button"
                      className="customBtn"
                      onClick={this.goToSkillsPage}
                    >
                      Skills
                    </button>
                    <button
                      type="button"
                      className="customBtn"
                      onClick={this.goToChallengePage}
                    >
                      Challenges
                    </button>
                  </nav>
                </div>
              </header>

              <main className="px-3 d-flex flex-column">
                <h1>ZIH-HENG,MA</h1>
                <div className="d-flex justify-content-center">
                  <h4 className="wordCarousel">
                    Im a
                    <div>
                      <p className="flip2">
                        <span>Engineer</span>
                        <span>Basketball Player</span>
                      </p>
                    </div>
                  </h4>
                </div>
              </main>

              <footer className="mt-auto">
                <a
                  className="customBtn"
                  href="https://www.facebook.com/ffmkx/"
                  data-mdb-toggle="animation"
                >
                  <i className="fab fa-facebook h4"></i>
                </a>
                <a
                  className="customBtn"
                  href="https://www.instagram.com/ponymichael/"
                >
                  <i className="fab fa-instagram h4"></i>
                </a>
                <a
                  className="customBtn"
                  href="https://www.linkedin.com/in/%E5%AD%90%E6%81%86-%E9%A6%AC-778b2b1b1/"
                >
                  <i className="fab fa-linkedin h4"></i>
                </a>
                <a className="customBtn" href="https://github.com/ffmkx215">
                  <i className="fab fa-github h4"></i>
                </a>
                <a
                  className="customBtn"
                  href="https://twitter.com/D18iohned4N9DF4"
                >
                  <i className="fab fa-twitter h4"></i>
                </a>
              </footer>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
