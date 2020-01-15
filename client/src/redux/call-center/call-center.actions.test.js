import CallCenterActionTypes from './call-center.types';

import {
  getCallCenterStart,
  getCallCenterSuccess,
  getCallCenterFailure,
} from './call-center.actions';

describe('getCallCenterStart action', () => {
  it('should be created', () => {
    const action = getCallCenterStart();
    expect(action.type).toEqual(CallCenterActionTypes.GET_CALL_CENTER_START);
  });
});

describe('getCallCenterSuccess action', () => {
  it('should be created', () => {
    const payload = { id: '1', name: 'callCenterItem 1', number: '1' };
    const action = getCallCenterSuccess(payload);

    expect(action.type).toEqual(CallCenterActionTypes.GET_CALL_CENTER_SUCCESS);
    expect(action.payload).toEqual(action.payload);
  });
});

describe('getCallCenterFailure action', () => {
  it('should be created', () => {
    const errorValue = { message: 'error getCallCenterFailure' };
    const action = getCallCenterFailure(errorValue);

    expect(action.type).toEqual(CallCenterActionTypes.GET_CALL_CENTER_FAILURE);
    expect(action.payload).toEqual(errorValue);
  });
});
