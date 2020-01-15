import React from 'react';
import { shallow, ShallowWrapper, mount } from 'enzyme';
import { Provider } from 'react-redux';

import ConnectedHeader, { Header } from './header.component';
import CustomButton from '../custom-button/custom-button.component';
import Authorization from '../../auth/auth.service';
import Global from '../../shared/global-functions';

let global;

describe('Header component (disconnected)', () => {
  let wrapper;
  let mockHistory;
  let mockLogout;

  beforeEach(() => {
    global.cordova = {
      InAppBrowser: {
        open: jest.fn(() => {
          return {
            addEventListener: jest.fn(),
            close: jest.fn(),
            removeEventListener: jest.fn(),
          };
        }),
      },
    };

    mockHistory = { goBack: jest.fn() };
    mockLogout = jest.fn();

    const mockProps = {
      title: 'Header test',
      closeButton: { display: true },
      displayLogoutButton: true,
      displayBackButton: true,
      history: mockHistory,
      logout: mockLogout,
    };

    wrapper = shallow(<Header {...mockProps} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should hide back button', () => {
    wrapper.setProps({ displayBackButton: false });

    expect(wrapper.find('.go-back').length).toEqual(0);
  });

  it('should display log-out button', () => {
    wrapper.setProps({ displayLogoutButton: true, displayBackButton: false });

    expect(wrapper.find(CustomButton).length).toEqual(1);
  });

  it('should go back on history on go back click', () => {
    wrapper
      .find('.go-back')
      .at(0)
      .simulate('click');

    expect(mockHistory.goBack).toHaveBeenCalled();
  });
});

import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

describe('Header component (connected)', () => {
  const mockStore = configureStore([]);
  const MOCK_STORE = mockStore({
    header: {
      title: null,
      displayBackButton: false,
      displayLogoutButton: true,
      closeButton: {
        display: false,
        redirectTo: null,
      },
    },
    user: {},
  });
  let wrapper;

  const spy = jest.spyOn(MOCK_STORE, 'dispatch');

  beforeEach(() => {
    Global.isMobileDevice = jest.fn().mockReturnValue(true);
    wrapper = mount(
      <Provider store={MOCK_STORE}>
        <BrowserRouter>
          <ConnectedHeader />
        </BrowserRouter>
      </Provider>
    );
  });

  it('should dispatch logout', async () => {
    const inAppBrowser = () => {
      return {
        addEventListener: jest.fn(
          (event, callback) => event === 'exit' && callback()
        ),
        removeEventListener: jest.fn(),
      };
    };
    global.cordova.InAppBrowser.open = jest.fn(inAppBrowser);

    wrapper
      .find('.log-out')
      .first()
      .simulate('click');

    expect(spy).toHaveBeenCalledWith({ type: 'SIGN_OUT_START' });
  });

  it('should call logout function', async () => {
    const logOutSpy = spyOn(Authorization, 'logout');
    wrapper
      .find('.log-out')
      .first()
      .simulate('click');

    expect(logOutSpy).toHaveBeenCalled();
  });
});
