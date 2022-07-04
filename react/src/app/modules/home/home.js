import React from 'react';
import { Link } from "react-router-dom";

import './home.css';

class Home extends React.Component {

  constructor(props) {
    super(props);
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
