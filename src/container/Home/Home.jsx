import React from 'react'
import './Home.scss';
import { Social } from '../../components';
import { images } from '../../constants';

const Home = () => {
  return (
    <section className="app__home app" id="home">
      <div className="home__profile-img">
        <img src={images.profile} alt="profile image"></img>
      </div>

      <div className="home__info">
        <h4>HELLO, <span>MY NAME IS</span></h4>
        <h1 className="home__title">
          LIM RUI TING <span>VALENCIA</span>
        </h1>
        <h3 className="home__subtitle">Full Stack Developer</h3>
        <p className="home__description">
          I'm a developer from Singapore. I am an undergraduate studying at the National University of Singapore 
          majoring in Computer Science. I have completed my Diploma with Merit in Business and Financial Technology
          at Nanyang Polytechnic. 
        </p>
        < Social />
        <div className="home__btns">
          <a href='/Lim Rui Ting Valencia Resume.pdf' target="_blank" className="btn">Download CV</a>
        </div>
      </div>
    </section>
  )
}

export default Home