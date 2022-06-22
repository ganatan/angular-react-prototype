
import React from 'react';
import { NavLink } from "react-router-dom";

import AppRouting from './app-routing';

import './app.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.title = 'react-bootstrap';
    this.footerUrl = 'https://www.ganatan.com';
    this.footerLink = 'www.ganatan.com';
  }

  componentDidMount() {
    const navMain = document.getElementById('navbarCollapse');
    if (navMain) {
      navMain.onclick = function onClick() {
        if (navMain) {
          navMain.classList.remove("show");
        }
      }
    }
  }

  render() {
    return (
      <div >
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              <span className="nga-logo mx-1">React</span>
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mx-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <main>
          <AppRouting />
        </main>
      </div >

    )
  }

}

export default App;