import React from 'react';
import { shallow } from 'enzyme';

import InfoComponent from './info.component';

describe('Info Component', () => {
  let wrapper;

  const infoHelp = {
    title: 'YOU NEED HELP?',
    description: 'Description of Help',
  };

  beforeEach(() => {
    wrapper = shallow(<InfoComponent {...infoHelp} />);
  });

  it('should render Info component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('the title should be "YOU NEED HELP?"', () => {
    const title = wrapper.find('.information__title').text();
    expect(title).toEqual(infoHelp.title);
  });

  it('the description should be "Description of Help"', () => {
    const description = wrapper.find('.information__description').text();
    expect(description).toEqual(infoHelp.description);
  });
});
