import React from 'react';

import theme from '../data/theme.json';

const Footer = () => (
  <>
    <footer>
      Copyright &copy; 2020 Stephen Lewis |
      Powered by <a href="https://nextjs.org/" title="Next.js">Next.js</a> &amp;&nbsp;
      <a href="https://reactjs.org/" title="React">React</a>
    </footer>
    <style jsx>{`
      footer {
        padding: 2.5rem;
        width: 100%;
        color: ${theme.neutral};
        font-size: 0.65rem;
        font-weight: 300;
        text-align: center;
      }
    `}
    </style>
  </>
);

export default Footer;
