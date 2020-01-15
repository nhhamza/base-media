import { combineReducers } from 'redux';

import callCenterReducer from './call-center/call-center.reducer';

const rootReducer = combineReducers({
  callCenter: callCenterReducer,
});

export default rootReducer;
