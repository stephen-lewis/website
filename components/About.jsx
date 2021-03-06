import React from 'react';

import theme from '../data/theme.json';
import Background from './Background';

const About = () => (
  <>
    <a id="about" />
    <section>
      <Background opacity="4%" />
      <h2>About Me</h2>
      <h3>I have always enjoyed solving puzzles and problems</h3>
      <p>
        <strong>Engineering design</strong>, <strong>computer programming</strong>,
        and <strong>management</strong> all offer continual challenges to find solutions to often
        complex problems.
      </p>
      <p>
        I have made a career as a <strong>systems engineer</strong> and a
        <strong> mechanical design engineer</strong>, developing bespoke equipment. I started on the
        workshop floor, and now, as <strong>engineering manager</strong>, I now lead a
        multidisciplinary team of engineers developing the best solutions for our customers at the
        highest quality.
      </p>
      <p>
        I have always had an <strong>affinity for computers</strong>. I learnt to program at a very
        young age and have found both joy and many practical uses working with computers. This has
        allowed me to develop a secondary set of skills that complement my engineering abilities,
        offering alternative ways to
        improve <strong>quality</strong> and <strong>efficiency</strong>.
      </p>
      <p className="last">
        I enjoy <strong>running</strong> and <strong>hiking</strong>. At the moment much of my spare
        time is spent working on renovating our house. I&apos;m aiming to do as much as possible
        myself which is proving to be an interesting challenge!
      </p>
    </section>
    <style jsx>{`
      section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        min-height: 100vh; width: 100%;
        padding: 10vh 10vw;
        color: ${theme['primary-light']};
        scroll-snap-align: start; scroll-snap-stop: always;
      }
      
      h2 {
        margin-top: -10vh;
        font-size: 5rem;
        color: #c0c0c0;
        text-align: right;
        z-index: 10;
      }
      
      h3 {
        font-size: 2rem;
        padding-bottom: 3rem;
        z-index: 10;
      }
      
      p {
        font-size: 1.25rem;
        padding-bottom: 2rem;
        z-index: 10;
      }
      
      p.last {
        padding-bottom: 0;      
      }
    `}
    </style>
  </>
);

export default About;
