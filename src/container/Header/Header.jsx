import React, { useState } from 'react'
import './Header.scss';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineHome, AiOutlineFolderOpen } from 'react-icons/ai';
import { BsPerson, BsSend } from 'react-icons/bs'
import { SiSkillshare } from 'react-icons/si'
import { Navbar } from '../../components';

const Header = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <header>
      <Navbar />
      <div className="app__navbar-menu">
          <HiMenu onClick={() => setToggle(!toggle)} />
          {toggle && (
              <ul>
                <li>
                  < a href="#home"><AiOutlineHome /></a>
                </li>
                <li>
                  < a href="#about"><BsPerson /></a>
                </li>
                <li>
                  < a href="#skills"><SiSkillshare /></a>
                </li>
                <li>
                  < a href="#projects"><AiOutlineFolderOpen /></a>
                </li>
                <li>
                  < a href="#contact"><BsSend /></a>
                </li>
              </ul>
          )}
      </div>
    </header>
  )
}

export default Header