import React from 'react';
import { PageInfoContainer, TitlePageInfo } from './info.styles';

const Info = ({ title, description }) => {
  return (
    <PageInfoContainer>
      <TitlePageInfo>{title}</TitlePageInfo>
      <p>{description}</p>
    </PageInfoContainer>
  );
};

export default Info;
