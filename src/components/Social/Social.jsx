import React from 'react'
import './Social.scss';
import { AiFillGithub, AiOutlineLinkedin } from 'react-icons/ai';

const Social = () => {
  return (
    <div className="app__social">
      <ul className="app__social-links">
        <li>
          < a href="https://github.com/ValenciaLim" target="_blank"><AiFillGithub /></a>
        </li>
        <li>
          < a href="https://www.linkedin.com/in/valencia-lim-7a5498205/" target="_blank"><AiOutlineLinkedin /></a>
        </li>
      </ul>
    </div>
  )
}

export default Social
