import { takeLatest, put, select, call, all } from 'redux-saga/effects';

import CallCenterActionTypes from './call-center.types';

import {
  getCallCenterFailure,
  getCallCenterStart,
  getCallCenterSuccess,
} from './call-center.actions';

import {
  callCenter,
  ongetCallCenterStart,
  callCenterSagas,
} from './call-center.sagas';
import { callCenterResponseBuilder } from '../../shared/fixtures/call-center-response';

const PERSON_TAG_OBJECT = { payload: { personTag: '12345' } };

describe('on call center start saga', () => {
  it('should trigger on GET_CALL_CENTER_START', () => {
    const generator = ongetCallCenterStart();
    expect(generator.next().value).toEqual(
      takeLatest(CallCenterActionTypes.GET_CALL_CENTER_START, callCenter)
    );
  });
});

describe('on call center saga', () => {
  const generator = callCenter(PERSON_TAG_OBJECT);
  //todo amartinez deuda tecnica.
  xit('should call getCallCenterSuccess', () => {
    generator.next();
    expect(generator.next().value).toEqual(
      put(getCallCenterSuccess(callCenterResponseBuilder()))
    );
  });

  it('should call getCallCenterFailure on error', () => {
    const newGenerator = callCenter(PERSON_TAG_OBJECT);
    newGenerator.next();
    expect(newGenerator.throw('error').value).toEqual(
      put(getCallCenterFailure('error'))
    );
  });
});

describe('callCenterSagas', () => {
  it('calls `all()` with the correct functions', () => {
    const generator = callCenterSagas();
    expect(generator.next().value).toEqual(all([call(ongetCallCenterStart)]));
  });
});
