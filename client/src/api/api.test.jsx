import axios from 'axios';
import api from './api';

jest.mock('axios');
const mockedAxios = axios;

describe('API tests', () => {
  it('should return getHelp data from server', async () => {
    const EXPECTED_DATA = {
      number: '1',
    };

    mockedAxios.get.mockResolvedValue({
      data: EXPECTED_DATA,
    });

    expect(await api.getHelp()).toEqual({
      data: EXPECTED_DATA,
    });

    expect(mockedAxios.get).toHaveBeenCalledWith('GetHelp');
  });
});
