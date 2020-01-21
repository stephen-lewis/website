import React from 'react';

const ExperienceDetailItem = ({ current, experienceItem, index }) => (
  <>
    <div className={current === index ? 'row-container spread w50vw' : 'hidden'}>
      <div>
        <h2>{experienceItem.title}</h2>
        <h3>{experienceItem.organization}</h3>
      </div>
      <div>
        <h4 className="date">{experienceItem.date}</h4>
      </div>
    </div>
    <div className={current === index ? 'w50vw' : 'hidden'} dangerouslySetInnerHTML={{ __html: experienceItem.detail }}/>
  </>
);

export default ExperienceDetailItem;
