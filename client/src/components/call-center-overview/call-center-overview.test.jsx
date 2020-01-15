import React from 'react';

import { shallow } from 'enzyme';

import CallCenterOverview from './call-center-overview.component';

describe('CallCenterOverview', () => {
  let wrapper;

  const callCenterData = [
    {
      id: '1',
      name: 'operator1',
      number: '1',
    },
    {
      id: '2',
      name: 'operator2',
      number: '2',
    },
  ];

  beforeEach(() => {
    wrapper = shallow(<CallCenterOverview callCenter={callCenterData} />);
  });

  it('should render CallCenterOverview component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the number of items that arrives', () => {
    const numberOfItems = callCenterData.length;
    expect(numberOfItems).toEqual(2);
  });
});
