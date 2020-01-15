import { createSelector } from 'reselect';

const selectCallCenter = state => state.callCenter;

export const selectCallCenterList = createSelector(
  [selectCallCenter],
  callCenter => callCenter
);
