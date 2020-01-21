import React from 'react';
import uuid from 'uuid';

import ExperienceDetail from './ExperienceDetail';
import ExperienceDetailItem from './ExperienceDetailItem';
import ExperienceList from './ExperienceList';
import ExperienceListItem from './ExperienceListItem';

import experienceItems from '../data/experience.json';

/*
 * Here, turn 'experienceItems' into JSON objects; supply an array of them to ExperienceDetail
 * and ExperienceList, along with 'currentItem' (and for the list 'setCurrentItem') and handle logic
 * for interactivity. I should them be able to load the items from a file.
 */

const Experience = () => {
  const [currentItem, setCurrentItem] = React.useState(0);

  return (
    <section className="experience">
      <ExperienceDetail current={currentItem}>
        {experienceItems.map((item, index) => (
          <ExperienceDetailItem
            key={uuid(item)}
            experienceItem={item}
            current={currentItem}
            index={index}
          />
        ))}
      </ExperienceDetail>
      <ExperienceList current={currentItem} handleChange={setCurrentItem}>
        {experienceItems.map((item, index) => (
          <ExperienceListItem
            key={uuid(item)}
            experienceItem={item}
            current={currentItem}
            index={index}
            handler={() => { setCurrentItem(index); }}
          />
        ))}
      </ExperienceList>
      <h2 className="title">My Experience</h2>
    </section>
  );
};

export default Experience;
