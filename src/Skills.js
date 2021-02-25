import React from "react";

class Skills extends React.Component {
  onBack = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div className="Skills">
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
            <div className="d-flex flex-column resume-section-content vh-100">
            <div className="container mb-5">
                      <div className="box">
                        <div className="title">
                          <span className="block4"></span>
                          <h1>
                            Skills<span></span>
                          </h1>
                        </div>
                      </div>
                    </div>
              <div className="flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0">Programming Languages & Tools</h3>
                  <i className="fab fa-python h1 p-3"></i>
                  <i className="fab fa-java h1 p-3"></i>
                  <i className="fab fa-js-square h1 p-3"></i>
                  <i className="fab fa-react h1 p-3"></i>
                  <i className="fab fa-vuejs h1 p-3"></i>
                  <i className="fab fa-node-js h1 p-3"></i>
                  <img src="c-logo.png" className="p-3" style={{width:'67px',height:'80px'}} alt="c#"></img>
                  <img src="c.png" className="h1 p-3" style={{width:'67px',height:'80px'}} alt="c++"></img>
                  <img src="grasshopper.png" className="h1 p-3" style={{width:'67px',height:'80px'}} alt="grasshopper"></img>
                  <img src="pr.png" className="h1 p-3" style={{width:'67px',height:'80px'}} alt="PR"></img>
                  <img src="excel.png" className="h1 p-3" style={{width:'67px',height:'80px'}} alt="excel"></img>
                  <img src="word.png" className="h1 p-3" style={{width:'67px',height:'80px'}} alt="word"></img>
                  <img src="powerpoint.png" className="h1 p-3" style={{width:'67px',height:'80px'}} alt="poewrpoint"></img>
                  <img src="Sketchup-icon.png" className="h1 p-3" style={{width:'67px',height:'80px'}} alt="sketchup"></img>
                  <img src="autodesk.png" className="h1 p-3" style={{width:'67px',height:'80px'}} alt="autocad"></img>
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
export default Skills;
