import { all, call } from 'redux-saga/effects';

import { callCenterSagas } from './call-center/call-center.sagas';

export default function* rootSaga() {
  yield all([call(callCenterSagas)]);
}
