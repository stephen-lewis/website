import React from 'react';

const ExperienceItemDetail = ({ children, experienceItem }) => (
  <>
    <div className="row-container spread w50vw">
      <div>
        <h2>{experienceItem.title}</h2>
        <h3>{experienceItem.organization}</h3>
      </div>
      <div>
        <h4 className="date">{experienceItem.date}</h4>
      </div>
    </div>
    <div className="w50vw">{children}</div>
  </>
);

export default ExperienceItemDetail;
