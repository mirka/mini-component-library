import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Wrapper = styled.div`
  position: relative;
  display: inline-box;
  padding: 12px 54px 12px 16px;
  border-radius: 8px;
  background: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-family: Roboto, sans-serif;
  font-size: 1rem;
  transition: color 200ms ease-out;

  &:hover {
    color: ${COLORS.black};
  }
`;

const SelectWrapper = styled.select`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  appearance: none;
  width: 100%;
  background: transparent;
  border: none;
  color: transparent;
`;

const IconWrapper = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 8px;
  margin: auto 0;
  pointer-events: none;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectWrapper value={value} onChange={onChange} aria-label={label}>
        {children}
      </SelectWrapper>
      <span aria-hidden="true">
        {displayedValue}
      </span>
      <IconWrapper id="chevron-down" size={24} strokeWidth={2} />
    </Wrapper>
  );
};

export default Select;
