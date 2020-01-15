import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';

import AppConnected from './App';
import { mount } from 'enzyme';

const mockStore = configureStore([]);

jest.mock('react-qr-reader');

describe('App component', () => {
  const generateElement = (store, route) => {
    return mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`${route}`]}>
          <AppConnected />
        </MemoryRouter>
      </Provider>
    );
  };

  describe('Authenticated', () => {
    let MOCK_STORE;

    const getMockStoreFromUser = () =>
      mockStore({
        callCenter: {
          callCenterList: [
            { id: '1', name: 'operator1', number: '1111131313' },
          ],
          error: null,
        },
      });

    beforeEach(() => {
      MOCK_STORE = getMockStoreFromUser({
        error: null,
      });
    });

    describe('/no-real-route route', () => {
      it('renders properly', () => {
        expect(generateElement(MOCK_STORE, '/no-real-route')).toMatchSnapshot();
      });
    });

    describe('/ route', () => {
      it('renders properly', () => {
        expect(generateElement(MOCK_STORE, '/')).toMatchSnapshot();
      });
    });

    /*describe('/help route', () => {
      it('renders properly', () => {
        expect(generateElement(MOCK_STORE, '/help')).toMatchSnapshot();
      });
    });*/
  });
});
