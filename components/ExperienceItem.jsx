import React from 'react';

import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import uuid from 'uuid';

const ExperienceItem = ({ item }) => {
  const [open, setOpen] = React.useState(false);

  const toggle = open ? <FaChevronUp /> : <FaChevronDown />;

  return (
    <>
      <li key={uuid(item)}>
        <div className="experience-header" onClick={() => setOpen(!open)}>
          <div className="experience-title">
            <div>
              <h3>{item.title}</h3>
              <h4>{item.organization}</h4>
            </div>
            <h5>{item.date}</h5>
          </div>
          <div className="experience-toggle">
            {toggle}
          </div>
        </div>
        <div
          className={open ? 'experience-content shown' : 'hidden'}
          dangerouslySetInnerHTML={{ __html: item.detail }}
        />
      </li>
      <style jsx>{`
        li {
          display: flex;
          flex-direction: column;
          align-items: center; justify-content: space-between;
          width: 100%;
          margin: 1rem 0; padding: 0;
          box-shadow: 0 0 3px #666666;
        }
        
        .experience-header {
          display: flex;
          flex-flow: row nowrap;
          align-items: center; justify-content: space-between;
          width: 100%;
          background-color: #e0e0e0;
        }
        
        .experience-title {
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
          padding: 1rem;
          width: calc(100% - 3rem);
        }
        
        .experience-title h3 {
          font-weight: bold;
        }
        
        .experience-title h5 {
        padding-right: 1rem;
          text-align: right;
          font-size: 1.25rem;
        }
        
        .experience-toggle {
          height: 100%; width: 3rem;
          padding: 2rem 2rem 1.5rem 1rem;
          text-align: center;
          border-left: 1px solid #d0d0d0;
        }
        
        .experience-header:hover {
          background-color: #e6e6e6;
          cursor: pointer;
        }
        
        .experience-content {
          width: 100%;
          padding: 0.5rem 1rem;
          overflow-x: hidden;
          border-top: 1px solid #d0d0d0;
          background-color: #f0f0f0;
        }
        
        .shown {
          max-height: 50vh;
          overflow-y: auto;
          transition: max-height 0.5s ease-out;
        }
        
        .hidden {
          max-height: 0;
          overflow-y: hidden;
          transition: max-height 0.5s ease-out;
        }
    `}
      </style>
    </>
  );
};

export default ExperienceItem;
