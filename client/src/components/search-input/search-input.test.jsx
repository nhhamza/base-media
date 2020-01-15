import React from 'react';
import { shallow } from 'enzyme';

import SearchInput from './search-input.component';

describe('UnloadOrder component', () => {
  let wrapper;
  let mockHandleChange;

  beforeEach(() => {
    mockHandleChange = jest.fn();

    const mockProps = {
      searchTerm: '123',
      handleChange: mockHandleChange,
    };

    wrapper = shallow(<SearchInput {...mockProps} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleChange method when input changes', () => {
    wrapper.find('SearchInputContainer').simulate('change');

    expect(mockHandleChange).toHaveBeenCalled();
  });

  it('should render SearchInputLabel if there is a label', () => {
    expect(wrapper.exists('SearchInputLabel')).toBeTruthy();
  });

  it('should not shrink when no value', () => {
    const mockNewProps = {
      searchTerm: '',
      handleChange: mockHandleChange,
    };

    const newWrapper = shallow(<SearchInput {...mockNewProps} />);

    expect(newWrapper.exists('SearchInputLabel')).toBe(true);
    expect(newWrapper.find('SearchInputLabel').hasClass('shrink')).toBeFalsy();
  });
});
