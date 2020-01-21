import React from 'react';

const ExperienceListItem = ({
  current, experienceItem, handler, index,
}) => (
  <div className={current === index ? 'job active' : 'job'} onClick={handler}>
    <div className="row-container spread">
      <div>
        <h3>{experienceItem.title}</h3>
        <h4>{experienceItem.organization}</h4>
      </div>
      <div>
        <h4 className="date">{experienceItem.date}</h4>
      </div>
    </div>
  </div>
);

export default ExperienceListItem;
