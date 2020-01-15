import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import FormInput from './form-input.component';

describe('FormInput component', () => {
  let wrapper;
  let mockHandleChange;

  beforeEach(() => {
    mockHandleChange = jest.fn();

    const mockProps = {
      label: 'email',
      defaultValue: 'test@gmail.com',
      handleChange: mockHandleChange,
    };

    wrapper = shallow(<FormInput {...mockProps} />);
  });

  it('should render FormInput component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleChange method when input changes', () => {
    wrapper.find('FormInputContainer').simulate('change');

    expect(mockHandleChange).toHaveBeenCalled();
  });

  it('should render FormInputLabel if there is a label', () => {
    expect(wrapper.exists('FormInputLabel')).toBeTruthy();
  });

  it('should not render FormInputLabel if there is no label', () => {
    const mockNewProps = {
      label: '',
      defaultValue: 'test@gmail.com',
      handleChange: mockHandleChange,
    };

    const newWrapper = shallow(<FormInput {...mockNewProps} />);

    expect(newWrapper.exists('FormInputLabel')).toBe(false);
  });

  it('should not shrink when no value', () => {
    const mockNewProps = {
      label: 'email',
      defaultValue: '',
      handleChange: mockHandleChange,
    };

    const newWrapper = shallow(<FormInput {...mockNewProps} />);

    expect(newWrapper.exists('FormInputLabel')).toBe(true);
    expect(newWrapper.find('FormInputLabel').hasClass('shrink')).toBeFalsy();
  });
});
