import React from 'react';
import './Navbar.scss';
import { images } from '../../constants';
import Scrollspy from 'react-scrollspy';

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo"></img>
      </div>
      <div className="app__navbar-links">
        <Scrollspy items={['home', 'skills', 'experiences', 'contact']} currentClassName="is-current">
        {['home', 'skills', 'experiences', 'contact'].map((item) => (
            <li className="app__flex p-text" key="{'link-${item}'}">
              < a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </Scrollspy>
      </div>
    </nav>
  )
}

export default Navbar