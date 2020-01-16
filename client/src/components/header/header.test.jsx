import React from 'react';
import { shallow } from 'enzyme';

import Header from './header.component';

describe('Header component (disconnected)', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
