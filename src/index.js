import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import About from "./About";
import Education from './Education';
import Experience from './Experience';
import Challenge from './Challenge';
import Skills from './Skills';

import '@fortawesome/fontawesome-free/css/all.css'


import reportWebVitals from "./reportWebVitals";


import { BrowserRouter , Switch, Route, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ANIMATION_MAP = {
  PUSH: 'forward',
  POP: 'back'
}

const Routes = withRouter(({location, history}) => (
  <TransitionGroup
    className={'router-wrapper'}
    childFactory={child => React.cloneElement(
      child,
      {classNames: ANIMATION_MAP[history.action]}
    )}
  >
    <CSSTransition
      timeout={500}
      key={location.pathname}
    >
      <Switch location={location}>
        <Route exact path={'/gh-page'} component={App} />
        <Route exact path={'/gh-page/about'} component={About} />
        <Route exact path={'/gh-page/education'} component={Education} />
        <Route exact path={'/gh-page/experience'} component={Experience} />
        <Route exact path={'/gh-page/challenge'} component={Challenge} />
        <Route exact path={'/gh-page/skills'} component={Skills} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
