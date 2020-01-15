import React from 'react';

import CallCenterItem from '../call-center-item/call-center-item.component';
import { CallCenterOverviewContainer } from './call-center-overview.styles';

const CallCenterOverview = ({ callCenter }) => {
  return (
    <CallCenterOverviewContainer>
      {callCenter.map(({ id, ...props }) => (
        <CallCenterItem key={id} {...props} />
      ))}
    </CallCenterOverviewContainer>
  );
};

export default CallCenterOverview;
