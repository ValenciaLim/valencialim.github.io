import React from 'react'
import './Experience.scss';
import companies from '../../companies.js';

const Experience = () => {
  return (
    <section className='app__projects app' id="experience">
      <h2 className="section__title head-text">Experiences</h2>
      <span className="section__subtitle p-text">My Work Experiences</span>
      <div className="app__projects-list">
      {companies.map((company) => (
        <div className="app__projects-item" key={company.name}>
          <div className="project__company app__flex">
            <img src={company.logo}></img>
          </div>
          <div className="projects__info">
            <h3>{company.position}</h3>
            <p>{company.name}</p>
            <p>{company.period}</p>
            <ul className="company__jobscope">
            {company.jobscope.map((scope) => (
              <li className="p-text">
                {scope}
              </li>
            ))}
            </ul>
          </div>
        </div>
      ))}          
      </div>
    </section>
  )
}

export default Experience