import React from 'react'
import './Skills.scss';
import skills from '../../skills.js';

const Skills = () => {
  return (
    <section className="app__skills app" id="skills">
      <h2 className="section__title head-text">Skills</h2>
      <span className="section__subtitle p-text">My Technical Skills</span>
      <div className="app__skills-list">
      {skills.map((skill) => (
        <div className="app__skills-item app__flex" key={skill.title}>
          <div className="app__flex">
            <img src={skill.img}></img>
          </div>
          <p className="p-text">{skill.title}</p>
        </div>
      ))}
      </div>
    </section>
  )
}

export default Skills