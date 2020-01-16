import React from 'react';
import './info.styles.scss';

const Info = ({ title, description }) => {
  return (
    <div className="information">
      <h2 className="information__title">{title}</h2>
      <p className="information__description">{description}</p>
    </div>
  );
};

export default Info;
