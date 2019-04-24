import React, { Component } from 'react';

import Header from './header';


class Template extends Component {
  render() {
    return (
      <main>
        <Header />
        { this.props.children }
      </main>
    )
  }
};

export default Template