import { hasOwnProperty } from '../../utils/validations';

export function validateRawCallCenterData(data) {
  if (!data.every(callItem => hasOwnProperty(callItem, 'name'))) {
    throw new Error('User must have a name');
  }

  if (!data.every(callItem => hasOwnProperty(callItem, 'phone'))) {
    throw new Error('User must have a phone');
  }
}

export function callCenterBuilder(data) {
  validateRawCallCenterData(data);
  return data.map(CallItem => {
    return {
      fullName: CallItem.name,
      phone: CallItem.phone,
    };
  });
}
