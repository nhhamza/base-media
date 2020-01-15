import React from 'react';

import {
  GroupContainer,
  SearchInputContainer,
  SearchInputLabel,
} from './search-input.style';

const SearchInput = ({ searchTerm, handleChange, ...props }) => (
  <GroupContainer>
    <SearchInputContainer
      value={searchTerm}
      onChange={handleChange}
      {...props}
    />
    <SearchInputLabel className={searchTerm.length ? 'shrink' : ''}>
      Search for an order
    </SearchInputLabel>
    <span className="abb-icon icon-abb_zoom-in_32"></span>
  </GroupContainer>
);

export default SearchInput;
