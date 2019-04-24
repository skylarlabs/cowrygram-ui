import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { cls } from '../util';
import User from './user';
import Logo from '../../../assets/img/logo.png';


const links = [
  { name: 'Send money', path: '/send' },
  { name: 'Recipients', path: '/recipients' },
  { name: 'Transfers',  path: '/transfers' },
];


const NavItem = ({ link }) => (
  <li className="nav-item align-items-center d-flex">
    <NavLink to={ link.path } className="nav-link" activeClassName="badge badge-primary px-3 py-2">{ link.name }</NavLink>
  </li>
)


class Header extends Component {
  state = {
    showNav: false
  };

  toggle = () => this.setState({ showNav: !this.state.showNav });

  render() {
    const { showNav } = this.state;

    return (
      <nav className="navbar navbar-expand-md navbar-light nav--main py-3 bg-white border-bottom border-primary">
        <div className="container-fluid px-5">
          <NavLink className="navbar-brand" to="/app">
            <img src={ Logo } height="30"/>
          </NavLink>

          <div className={ cls('collapse navbar-collapse', showNav && 'show') }>
            <ul className="nav flex-column flex-md-row mt-3 mt-md-0 mx-auto">
              { links.map((link, index) => ( <NavItem link={ link } key={`nav-${index}`} /> )) }
            </ul>
          </div>

          <div className="ml-auto">
            <User />
            <button className="navbar-toggler" type="button" onClick={ this.toggle }>
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;