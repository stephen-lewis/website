import React from 'react';

import theme from '../data/theme.json';

const Menu = () => (
  <>
    <nav className="menu">
      <a href="#about" className="scroll" title="About Me">About</a>
      <a href="#skills" className="scroll" title="My Skills">Skills</a>
      <a href="#experience" className="scroll" title="My Experience">Experience</a>
    </nav>
    <style jsx>{`
      nav {
        display: flex;
        flex-flow: row nowrap;
        align-items: center; justify-content: space-evenly;
        position: fixed;
        bottom: 2vh; right: 2vw;
        min-width: 20vw;
        mix-blend-mode: difference;
        z-index: 1000;
        -webkit-animation: fadein-wait 3s;
        -o-animation: fadein-wait 3s;
        animation: fadein-wait 3s;
      }
      
      a {
        display: block;
        padding: 1rem;
        border: 1px solid ${theme['secondary-light']};
        color: ${theme['primary-dark']};
        text-decoration: none;
        text-transform: uppercase;
        transition: 0.5s;
      }
      
      a:hover {
        border: 1px solid ${theme['secondary-dark']};
        color: ${theme['neutral-highlight']};
        transition: 0.5s;
      }
    `}
    </style>
  </>
);

export default Menu;
