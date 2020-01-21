import React from 'react';
import uuid from 'uuid';
import Background from './Background';

import experienceItems from '../data/experience.json';

import theme from '../data/theme.json';
import ExperienceItem from './ExperienceItem';

const Experience = () => {
  const [currentItem, setCurrentItem] = React.useState(0);

  return (
    <>
      <a id="experience" />
      <section>
        <Background opacity="4%" />
        <h2>My Experience &amp; Qualifications</h2>
        <ul>
          {experienceItems.map((item) => (
            <ExperienceItem key={uuid(item)} item={item} />
          ))}
        </ul>
      </section>
      <style jsx>{`
        section {
          display: flex;
          flex-flow: row wrap;
          align-items: flex-start; justify-content: center;
          padding: 10vh 10vw;
          min-height: 100vh; width: 100%;
        }
        
        h2 {
          margin-top: -5vh;
          width: 100%;
          font-size: 4rem;
          text-align: right;
          color: #d0d0d0;   
          z-index: 10;       
        }
        
        ul {
          width: 100%;
          margin: 1rem 0; padding: 0;
          list-style-type: none;
          z-index: 10;
        }
      `}
      </style>
    </>
  );
};

export default Experience;
