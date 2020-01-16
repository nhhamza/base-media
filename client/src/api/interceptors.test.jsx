import axios from 'axios';
it('', () => {
  // lo mismo que en truck.test.builder
  expect(true).toBeTruthy();
});
/*import api from './api';
import { unloadOrdersBuilder } from '../shared/fixtures/unload-response';
import * as interceptors from './interceptors';

// TODO amartinez falta testear los interceptores.
jest.mock('axios');
describe('interceptors', () => {
  const mockedAnotherAxios = axios as jest.Mocked<typeof axios>;
  xit('should return the config with the token', async () => {
    const EXPECTED_ORDERS = unloadOrdersBuilder();
    mockedAnotherAxios.get.mockResolvedValue({
      data: EXPECTED_ORDERS,
    });
    await api.getUnloadOrders('1');
    const spy = spyOn(interceptors, 'setToken');
    expect(spy).toHaveBeenCalled();
    expect(true).toBeTruthy();
  });
});
*/
