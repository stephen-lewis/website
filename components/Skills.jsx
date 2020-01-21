import React from 'react';

import theme from '../data/theme.json';
import Background from './Background';

const Skills = () => (
  <>
    <a id="skills" />
    <section>
      <Background />
      <h2>My Skills</h2>
      <div className="category">
        <h3>Management</h3>
        <ul>
          <li>Design project management</li>
          <li>Quality process design and implementation</li>
          <li>&quot;Man-management&quot; of a multidisciplinary team</li>
          <li>Health and safety management</li>
        </ul>
        <br />
        <h3>Miscellaneous</h3>
        <ul>
          <li>First Aid at Work trained</li>
          <li>Full and clean UK/EU driving license</li>
        </ul>
      </div>
      <div className="category">
        <h3>Engineering</h3>
        <ul>
          <li>Masters Degree in Space Systems Engineering</li>
          <li>Mechanical engineering design experience in space-science, automation, food
            production, and
            explosives industries
          </li>
          <li>3D CAD modelling with Autodesk Inventor</li>
          <li>Additive manufacturing (3D printing) with metals</li>
          <li>Metallurgy and mechanical testing</li>
          <li>CE marking, product safety, and regulatory compliance</li>
          <li>Product documentation</li>
        </ul>
      </div>
      <div className="category">
        <h3>Computing</h3>
        <ul>
          <li>PHP backend development with Symfony 4 and 5</li>
          <li>JS, HTML5, CSS frontend development with Twig and React</li>
          <li>Good understanding of C/C++</li>
          <li>Working knowledge of Git source control system</li>
          <li>Open source project contributor</li>
          <li>Experienced Microsoft Windows network administrator</li>
          <li>Linux system administration</li>
          <li>Familiar with Java, Python, and VB.net languages</li>
        </ul>
      </div>
    </section>
    <style jsx>{`
      section {
        display: flex;
        flex-flow: row wrap;
        align-items: flex-start; justify-content: space-evenly;
        position: relative;
        min-height: 100vh; width: 100%;
        padding: 10vh 10vw;
        background-color: ${theme['background-dark']}; 
        color: ${theme['primary-dark']};
        scroll-snap-align: start; scroll-snap-stop: always;
      }
      
      h2 {
        width: 100%;
        font-size: 5rem;
        color: #666666;
        text-align: right;
        z-index: 10;
      }
      
      h3 {
        padding: 0 0 1rem 2rem;
        font-size: 1.5rem;
      }
      
      li {
        padding: 0.4rem 0;
      }
      
      .category {
        margin: 1rem; padding: 1rem;
        min-width: 300px; max-width: 20vw;
        z-index: 10;
      }
    `}
    </style>
  </>
);

export default Skills;
