import React from 'react';
import { Link } from "react-router-dom";

import './home.css';
import { environment } from '../../../environments/environment';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.name = environment.application.name;
    this.version = environment.application.version;
    this.bootstrap = environment.application.bootstrap;
  }

  render() {

    return (
      <main className="container">
        <div className="p-5">
          <h1>Example</h1>
          <ul>
            <li>
              <Link to="/example">
                example
              </Link>
            </li>
          </ul>
        </div>
      </main>
    )
  }

}

export default Home; 
