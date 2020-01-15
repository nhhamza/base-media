import { takeLatest, put, all, call } from 'redux-saga/effects';

import CallCenterActionTypes from './call-center.types';
import api from '../../api/api';
import { callCenterBuilder } from './call-center-builder';

import {
  getCallCenterFailure,
  getCallCenterSuccess,
} from './call-center.actions';

export const isLocalMode = () => process.env.REACT_APP_ENV === 'local';

export function* callCenter({ payload: { personTag } }) {
  try {
    const { data } = yield call(api.getHelp, personTag);
    const CallCenterItems = callCenterBuilder(data);
    yield put(getCallCenterSuccess(CallCenterItems));
  } catch (error) {
    yield put(getCallCenterFailure(error));
  }
}

export function* ongetCallCenterStart() {
  yield takeLatest(CallCenterActionTypes.GET_CALL_CENTER_START, callCenter);
}

export function* callCenterSagas() {
  yield all([call(ongetCallCenterStart)]);
}
