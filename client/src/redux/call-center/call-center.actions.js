import CallCenterActionTypes from './call-center.types';

export const getCallCenterStart = personTag => ({
  type: CallCenterActionTypes.GET_CALL_CENTER_START,
  payload: personTag,
});

export const getCallCenterSuccess = callCenter => ({
  type: CallCenterActionTypes.GET_CALL_CENTER_SUCCESS,
  payload: callCenter,
});

export const getCallCenterFailure = error => ({
  type: CallCenterActionTypes.GET_CALL_CENTER_FAILURE,
  payload: error,
});
