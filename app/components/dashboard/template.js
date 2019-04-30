import React, { Component } from 'react';

import Header from './header';


class Template extends Component {
  render() {
    return (
      <main className="d-flex flex-column h-100 bg-light">
        <Header />

        <div className="container flex-grow-1 mx-auto p-md-5">
          <div className="card h-100">
            { this.props.children }
          </div>
        </div>
      </main>
    )
  }
};

export default Template