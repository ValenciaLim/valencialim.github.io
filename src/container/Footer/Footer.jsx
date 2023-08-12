import React from 'react'
import './Footer.scss';
import { images } from '../../constants';

const Footer = () => {
  return (
    <section className="app__footer" id="contact">
      <h2 className="section__title head-text">Take a Coffee & Chat With Me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:hello@micael.com" className="p-text">valencialimrt@u.nus.edu</a>
        </div>
        <div className="app__footer-card">
          <img src={images.whatsapp} alt="phone" />
          <a href="tel:+65 91764296" className="p-text">+65 9176 4296</a>
        </div>
        <div className="copyright">
          <p>@lim rui ting valencia</p>
        </div>
      </div>
    </section>
  )
}

export default Footer