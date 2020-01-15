import CallCenterActionTypes from './call-center.types';

const INITIAL_STATE = {
  callCenterList: [],
  error: null,
};

const callCenterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CallCenterActionTypes.GET_CALL_CENTER_SUCCESS:
      return {
        ...state,
        callCenterList: action.payload,
        error: null,
      };
    case CallCenterActionTypes.GET_CALL_CENTER_FAILURE:
      return {
        ...state,
        callCenterList: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default callCenterReducer;
