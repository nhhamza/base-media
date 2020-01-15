import styled, { css } from 'styled-components';
import { theme } from '../../global-styles';

const shrinkLabelStyles = css`
  top: -0.875rem;
  font-size: 0.9rem;
  color: ${theme.colors.greyDarker};
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 2.8rem 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: ${theme.colors.black};
  font-size: 1.1rem;
  padding: 0.6rem 0.6rem 0.6rem 0.3rem;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 0.06rem solid ${theme.colors.greyDarker};
  margin: 1.6rem 0;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

FormInputContainer.displayName = 'FormInputContainer';

export const FormInputLabel = styled.label`
  color: ${theme.colors.greyDarker};
  font-size: 1rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0.3rem;
  top: 0.6rem;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabelStyles}
  }
`;

FormInputLabel.displayName = 'FormInputLabel';
