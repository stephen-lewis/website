import React from 'react';

import theme from '../data/theme.json';
import Background from './Background';

const Intro = () => (
  <>
    <section>
      <Background />
      <div className="row">
        <h1>Hello,</h1>
        <h2>
          <span className="first">I&apos;m Steve.</span><br />
          <span className="second">An <strong>engineer</strong>,</span>
          <span className="third"> a <strong>manager</strong></span>
          <span className="fourth">, and a <strong>coder</strong>.</span>
        </h2>
      </div>
      <div className="row">
        <a href="#skills" title="My skills">See my skills</a>
        <a href="#contact" title="Contact me">Get in touch</a>
      </div>
    </section>
    <style jsx>{`
      @keyframes fadein {
        0%   { opacity: 0; }
        15%  { opacity: 0; }
        100% { opacity: 1; }
      }
      @-moz-keyframes fadein {
        0%   { opacity: 0; }
        15%  { opacity: 0; }
        100% { opacity: 1; }
      }
      @-webkit-keyframes fadein {
        0%   { opacity: 0; }
        15%  { opacity: 0; }
        100% { opacity: 1; }
      }
      @-ms-keyframes fadein {
        0%   { opacity: 0; }
        15%  { opacity: 0; }
        100% { opacity: 1; }
      }
      @-o-keyframes fadein {
        0%   { opacity: 0; }
        15%  { opacity: 0; }
        100% { opacity: 1; }
      }

      @keyframes fadein-wait {
        0%   { opacity: 0; }
        50%  { opacity: 0; }
        100% { opacity: 1; }
      }
      @-moz-keyframes fadein-wait {
        0%   { opacity: 0; }
        50%  { opacity: 0; }
        100% { opacity: 1; }
      }
      @-webkit-keyframes fadein-wait {
        0%   { opacity: 0; }
        50%  { opacity: 0; }
        100% { opacity: 1; }
      }
      @-ms-keyframes fadein-wait {
        0%   { opacity: 0; }
        50%  { opacity: 0; }
        100% { opacity: 1; }
      }
      @-o-keyframes fadein-wait {
        0%   { opacity: 0; }
        50%  { opacity: 0; }
        100% { opacity: 1; }
      }

      section {
        display: flex;
        flex-flow: column wrap;
        align-items: center; justify-content: center;
        position: relative;
        height: 100vh; width: 100%;
        margin: 0; padding: 15vh 5vw;
        color: ${theme['primary-dark']};
        background-color: ${theme['background-dark']};
        scroll-snap-align: start; scroll-snap-stop: always;
      }
      
      .row {
        display: flex;
        flex-flow: row wrap;
        align-items: center; justify-content: center;
        width: 100%;        
      }
       
      h1 {
        margin-top: 2rem;
        min-width: 50%;
        text-align: right;
        font-size: 8rem;
        font-weight: 300;
        -webkit-animation: fadein 3s;
        -o-animation: fadein 3s;
        animation: fadein 3s;
        padding: 0 2.5vw;
        z-index: 10;
      }
      
      h2 {
        margin-top: 2rem;
        min-width: 50%;
        font-size: 1.25rem;
        padding: 0 2.5vw;
        z-index: 10;
      }
      
      a {
        display: block;
        margin: 3rem 1rem 0 1rem; padding: 1rem;
        border: 1px solid transparent;
        color: ${theme['primary-dark']};
        text-decoration: none;
        text-transform: uppercase;
        transition: 0.5s;
        z-index: 10;
        -webkit-animation: fadein-wait 10s;
        -o-animation: fadein-wait 10;
        animation: fadein-wait 10s;
      }
      
      a:hover {
        border: 1px solid ${theme['secondary-dark']};
        color: ${theme['neutral-highlight']};
        transition: 0.5s;
      }
      
      .first {
        font-size: 1.5em;
        -webkit-animation: fadein-wait 3s;
        -o-animation: fadein-wait 3s;
        animation: fadein-wait 3s;
        line-height: 2em;
      }
      
      .second {
        -webkit-animation: fadein-wait 5s;
        -o-animation: fadein-wait 5s;
        animation: fadein-wait 5s;
      }
      
      .third {
        -webkit-animation: fadein-wait 6.5s;
        -o-animation: fadein-wait 6.5s;
        animation: fadein-wait 6.5s;
      }
      
      .fourth {
        -webkit-animation: fadein-wait 8s;
        -o-animation: fadein-wait 8s;
        animation: fadein-wait 8s;
      }
    `}
    </style>
  </>
);

export default Intro;
