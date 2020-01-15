import styled from 'styled-components';

export const ButtonContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-self: center;
`;

ButtonContainer.displayName = 'ButtonContainer';

export const CallCenterItemContainer = styled.div`
  display: flex;
  border-bottom: solid 1px gray;
  padding: 0.5rem 1rem;
`;

CallCenterItemContainer.displayName = 'CallCenterItemContainer';

export const CallCenterItemName = styled.p`
  text-transform: capitalize;
`;

CallCenterItemName.displayName = 'CallCenterItemName';
