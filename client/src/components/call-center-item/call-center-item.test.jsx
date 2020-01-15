import React from 'react';

import { shallow } from 'enzyme';
import { Button } from '@abb/abb-common-ux-react/components/Button';

import CallCenterItem from './call-center-item.component';
import { CallNumber } from '../../utils/cordova-functions/call-number';

jest.mock('../../utils/cordova-functions/call-number', () => ({
  CallNumber: jest.fn(),
}));

describe('CallCenterItem', () => {
  const callCenterItemProps = {
    name: 'test',
    number: '123456789',
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CallCenterItem {...callCenterItemProps} />);
  });

  it('should render CallCenterItem component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the function "CallNumber" when the user clicks on the button', () => {
    wrapper
      .find(Button)
      .first()
      .simulate('click');
    expect(CallNumber).toHaveBeenCalledWith(callCenterItemProps.number, true);
  });
});
