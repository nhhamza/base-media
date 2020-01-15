import axios from 'axios';
import api from './api';
import { userDriverBuilder } from '../shared/fixtures/user';
import { unloadOrdersBuilder } from '../shared/fixtures/unload-response';
import { truckResponseBuilder } from '../shared/fixtures/truck-response';
import { documentsMockBuilder } from '../shared/fixtures/documents';

jest.mock('axios');
const mockedAxios = axios;

describe('API tests', () => {
  it('should return expected values on getLoggedUser', async () => {
    const EXPECTED_USER = userDriverBuilder();
    mockedAxios.get.mockResolvedValue({
      data: EXPECTED_USER,
    });

    expect(await api.getLoggedUser('1')).toEqual({
      data: EXPECTED_USER,
    });
  });

  it('should return expected values on GetUserByEmail', async () => {
    const EXPECTED_USER = userDriverBuilder();
    mockedAxios.get.mockResolvedValue({
      data: EXPECTED_USER,
    });

    expect(await api.getLoggedUserByEmail()).toEqual({
      data: EXPECTED_USER,
    });
  });

  it('should return expected values on getUnloadOrders', async () => {
    const mockedAnotherAxios = axios;
    const EXPECTED_ORDERS = unloadOrdersBuilder();
    const USER_ID = '123456';

    mockedAnotherAxios.get.mockResolvedValue({
      data: EXPECTED_ORDERS,
    });

    expect(await api.getUnloadOrders(USER_ID)).toEqual({
      data: EXPECTED_ORDERS,
    });
    expect(mockedAnotherAxios.get).toHaveBeenCalledWith(
      `unload/orders/${USER_ID}`
    );
  });

  it('should return expected values on getTruck', async () => {
    const mockedAnotherAxios = axios;
    const EXPECTED_TRUCK = truckResponseBuilder();
    const TRUCK_ID = 12;

    mockedAnotherAxios.get.mockResolvedValue({
      data: EXPECTED_TRUCK,
    });

    expect(await api.getTruckById(TRUCK_ID)).toEqual({
      data: EXPECTED_TRUCK,
    });
    expect(mockedAnotherAxios.get).toHaveBeenCalledWith(`truck/${TRUCK_ID}`);
  });

  it('should return expected values on postQREncode', async () => {
    const EXPECTED_QR = encodeURIComponent('aabb');

    mockedAxios.get.mockResolvedValue({
      data: EXPECTED_QR,
    });

    expect(await api.getDriverHash('aabb')).toEqual({
      data: EXPECTED_QR,
    });
  });

  it('should return a confirm message on postQRDecode', async () => {
    const EXPECTED_DATA = {
      message: 'ok',
    };

    const dataMock = {
      userTag: 'test',
      hash: '1234',
    };

    mockedAxios.post.mockResolvedValue({
      data: EXPECTED_DATA,
    });

    expect(await api.postQRDecode(dataMock)).toEqual({
      data: EXPECTED_DATA,
    });
  });

  it('should return BOL List on getUserBolList', async () => {
    const mockedDriverId = '123456';
    const expectedBOLList = documentsMockBuilder();

    mockedAxios.get.mockResolvedValue({
      data: expectedBOLList,
    });

    expect(await api.getUserBolList(mockedDriverId)).toEqual({
      data: expectedBOLList,
    });
    expect(mockedAxios.get).toHaveBeenCalledWith(
      `getUserBolList/${mockedDriverId}`
    );
  });

  it('should return Truck List on getUserTruckList', async () => {
    const mockedDriverId = '123456';
    const expectedTruckList = documentsMockBuilder();

    mockedAxios.get.mockResolvedValue({
      data: expectedTruckList,
    });

    expect(await api.getUserTruckList(mockedDriverId)).toEqual({
      data: expectedTruckList,
    });
    expect(mockedAxios.get).toHaveBeenCalledWith(
      `getUserTruckList/${mockedDriverId}`
    );
  });

  it('should return visit number and terminal number on getEntryRequest', async () => {
    const EXPECTED_DATA = {
      visitNumber: '1',
      terminalName: 'test',
    };

    const dataMock = {
      userTag: 'test',
      hash: '1234',
    };

    mockedAxios.post.mockResolvedValue({
      data: EXPECTED_DATA,
    });

    expect(await api.postEntryRequest(dataMock)).toEqual({
      data: EXPECTED_DATA,
    });
  });

  it('should return the base url on getEntry', async () => {
    const mockedGetEntryAxios = axios;
    const EXPECTED_DATA = {
      basePath: 'test_path',
    };

    const PARAM_DATA = 'test_hash';

    mockedGetEntryAxios.get.mockResolvedValue({
      data: EXPECTED_DATA,
    });

    expect(await api.getEntry(PARAM_DATA)).toEqual({
      data: EXPECTED_DATA,
    });

    expect(mockedGetEntryAxios.get).toHaveBeenCalledWith('GetEntry', {
      params: { hash: PARAM_DATA },
    });
  });
});
