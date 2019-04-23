import React, { Component } from 'react';


class Template extends Component {
  render() {
    return (
      <main className="d-flex h-100">
        <div className="col-md-12 col-lg-5 col-xl-4 d-flex align-items-center">
          { this.props.children }
        </div>

        <div className="col-6 col-lg-7 col-xl-8 bg-primary w-100 d-none d-lg-flex align-items-center justify-content-center">
          <strong className="text-light">[BeautifulBg]</strong>
        </div>
      </main>
    )
  }
};


export default Template;