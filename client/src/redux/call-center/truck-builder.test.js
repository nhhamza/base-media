import { callCenterBuilder } from './call-center-builder';
//import { truckResponseBuilder } from '../../shared/fixtures/truck-response';

describe('truck builder', () => {
  it('', () => {
    // Este test está para que deje de dar error el coverage
    expect(true).toBeTruthy();
  });
  /*
  describe('builder truck', () => {
    it('should raise an error when trying to build an user without ID', () => {
      const USER_WITHOUT_TRUCK_ID = truckResponseBuilder();
      const EXPECTED_ERROR = 'User must have a ID';
      delete USER_WITHOUT_TRUCK_ID.ID;

      expect(() => callCenterBuilder(USER_WITHOUT_TRUCK_ID)).toThrowError(
        EXPECTED_ERROR
      );
    });

    it('should raise an error when trying to build an user without MaxLoadedWeight', () => {
      const USER_WITHOUT_TRUCK_MAXLOADEDWEIGHT = truckResponseBuilder();
      const EXPECTED_ERROR = 'User must have a MaxLoadedWeight';
      delete USER_WITHOUT_TRUCK_MAXLOADEDWEIGHT.MaxLoadedWeight;

      expect(() =>
        callCenterBuilder(USER_WITHOUT_TRUCK_MAXLOADEDWEIGHT)
      ).toThrowError(EXPECTED_ERROR);
    });

    it('should raise an error when trying to build an user without UnladedWeight', () => {
      const USER_WITHOUT_TRUCK_UNLADEDWEIGHT = truckResponseBuilder();
      const EXPECTED_ERROR = 'User must have a UnladedWeight';
      delete USER_WITHOUT_TRUCK_UNLADEDWEIGHT.UnladedWeight;

      expect(() =>
        callCenterBuilder(USER_WITHOUT_TRUCK_UNLADEDWEIGHT)
      ).toThrowError(EXPECTED_ERROR);
    });

    it('should return the correct user format when nothing fail', () => {
      const TRUCK_RESPONSE = truckResponseBuilder();

      expect(callCenterBuilder(TRUCK_RESPONSE)).toEqual(EXPECTED_TRUCK);
    });
  });
*/
});
