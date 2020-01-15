import styled, { css } from 'styled-components';

import { theme } from '../../global-styles';

const subcolor = theme.colors['abb-grey-line'];

export const GroupContainer = styled.div`
  position: relative;
  width: 90%;
  height: 1.5rem;
  padding: 1.5625rem 0 2.5rem 0;
  display: block;

  .abb-icon {
    position: absolute;
    right: 0.125rem;
    bottom: 1.5625rem;
    font-size: 1rem;
    color: ${subcolor};
  }
`;

export const SearchInputContainer = styled.input`
  border: none;
  border-radius: 0;
  border-bottom: 0.0625rem solid ${subcolor};

  &:focus {
    outline: none;
  }

  width: 100%;
  font-size: 1rem;
  position: relative;
  bottom: 0.1875rem;
  outline: none;
`;

SearchInputContainer.displayName = 'SearchInputContainer';

const shrinkLabelStyles = css`
  top: -2.6875rem;
  font-size: 0.75rem;
  color: ${subcolor};
`;

export const SearchInputLabel = styled.label`
  color: ${subcolor};
  font-size: 1rem;
  font-weight: normal;
  position: relative;
  pointer-events: none;
  bottom: 1.875rem;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabelStyles}
  }
`;

SearchInputLabel.displayName = 'SearchInputLabel';
