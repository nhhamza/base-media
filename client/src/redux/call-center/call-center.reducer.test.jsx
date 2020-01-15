import CallCenterActionTypes from './call-center.types';
import callCenterReducer from './call-center.reducer';

const initialState = {
  callCenterList: [],
  error: null,
};

describe('callCenterReducer', () => {
  it('should return initial state', () => {
    expect(callCenterReducer(undefined, {})).toEqual(initialState);
  });

  it('should set the callCenterOperatorList to payload on getCallCenterStart action', () => {
    const mockCallCenterList = { id: '1', name: 'test', number: '222' };
    expect(
      callCenterReducer(initialState, {
        type: CallCenterActionTypes.GET_CALL_CENTER_SUCCESS,
        payload: mockCallCenterList,
      }).callCenterList
    ).toEqual(mockCallCenterList);
  });

  it('should set errorMessage to payload on getCallCenterFailure', () => {
    const mockError = {
      message: 'error',
      code: 404,
    };
    expect(
      callCenterReducer(initialState, {
        type: CallCenterActionTypes.GET_CALL_CENTER_FAILURE,
        payload: mockError,
      }).error
    ).toBe(mockError);
  });
});
