import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import configureStore from 'redux-mock-store';
import HelpPage from './help.component';
import { userDriverBuilder } from '../../shared/fixtures/user';

describe('HelpPage component', () => {
  let wrapper;
  const mockStore = configureStore([]);

  const store = mockStore({
    callCenter: {
      callCenterList: [{ id: '1', name: 'operator1', number: '1111131313' }],
    },
    header: { title: 'Help' },
    user: { currentUser: userDriverBuilder() },
  });

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <HelpPage />
        </BrowserRouter>
      </Provider>
    );
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call updateTitle function with "Help"', () => {
    const updateTitle = jest.fn();
    const textTitle = 'titleMock';
    wrapper.setProps({ updateTitle: updateTitle(textTitle) });

    expect(updateTitle).toHaveBeenCalledWith(textTitle);
  });
});
