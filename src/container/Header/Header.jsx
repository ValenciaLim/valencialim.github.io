import React, { useState } from 'react'
import './Header.scss';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineHome } from 'react-icons/ai';
import { BsSend } from 'react-icons/bs'
import { IoIosCodeWorking } from 'react-icons/io';
import { MdWorkOutline } from 'react-icons/md';
import { SiSkillshare } from 'react-icons/si'
import { Navbar, NavigationDots } from '../../components';

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
                  < a href="#skills"><SiSkillshare /></a>
                </li>
                <li>
                  < a href="#experience"><MdWorkOutline /></a>
                </li>
                <li>
                  < a href="#portfolio"><IoIosCodeWorking /></a>
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