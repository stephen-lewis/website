import React from 'react';

const Intro = () => (
  <>
    <a id="top" />
    <section className="intro">
      <img className="background" alt="" src="images/bg.png" />
      <h1>Hello,</h1>
      <div className="tag">
        <h2 className="first">I&apos;m Steve.</h2><br />
        <h2>
          <span className="second">An <strong>engineer</strong>,</span>
          <span className="third"> a <strong>manager</strong></span>
          <span className="fourth">, and a <strong>coder</strong>.</span>
        </h2>
      </div>
    </section>
  </>
);

export default Intro;
