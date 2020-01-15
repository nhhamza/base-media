import styled from 'styled-components';

export const PageInfoContainer = styled.div`
  padding: 0.2rem 1rem;
`;

PageInfoContainer.displayName = 'PageInfoContainer';

export const TitlePageInfo = styled.h2`
  ::before {
    content: '\\2014';
    font-size: 2.25rem;
    color: #ff000f;
    display: block;
  }
`;

TitlePageInfo.displayName = 'TitlePageInfo';
