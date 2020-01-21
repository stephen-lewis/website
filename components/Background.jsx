import React from 'react';

const Background = ({ opacity }) => {
  let opacityValue = opacity;

  if (typeof opacity === 'undefined') {
    opacityValue = '3%';
  }

  return (
    <>
      <img className="background" alt="" src="images/bg.png" />
      <style jsx>{`
      .background {
        position: absolute;
        top: 0; left: 0;
        height: 100%; width: 100%;
        opacity: ${opacityValue};
        z-index: 1;
      }
    `}
      </style>
    </>
  );
};

export default Background;
