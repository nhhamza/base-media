import styled from 'styled-components';

import { theme } from '../../global-styles';

export const HeaderContainer = styled.div`
  position: fixed;
  background-color: ${theme.colors.white};
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  height: ${theme.sizes.header};
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  z-index: ${theme.zIndex.header};
  box-shadow: 0 1px 3px 0 ${theme.colors.greyLight};

  .log-out {
    position: absolute;
    right: 0;
  }

  .go-back {
    position: absolute;
    left: 0;
  }
`;

HeaderContainer.displayName = 'HeaderContainer';

export const TitleContainer = styled.h1`
  text-transform: uppercase;
  font-family: ${theme.fonts.ABBVoiceBold};
  font-size: 0.875rem;
  width: 75%;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

TitleContainer.displayName = 'TitleContainer';
