import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const sizeVariables = props => {
  return {
    small: {
      '--border-width': '1px',
      '--font-size': '14px',
      '--icon-padding': '24px',
      '--input-padding': '4px',
    },
    large: {
      '--border-width': '2px',
      '--font-size': '18px',
      '--icon-padding': '36px',
      '--input-padding': '8px',
    }
  }[props.size];
};

const Wrapper = styled.label`
  ${sizeVariables}

  position: relative;
  color: ${COLORS.gray700};
  font-family: Roboto, sans-serif;
  font-size: var(--font-size);
  transition: color 200ms ease-out;

  &:hover {
    color: ${COLORS.black};
  }
`;

const InputWrapper = styled.input`
  width: ${(props) => props.inputWidth}px;
  padding: var(--input-padding);
  padding-left: var(--icon-padding);
  background: transparent;
  border: none;
  border-bottom: var(--border-width) solid ${COLORS.black};
  font-size: inherit;
  font-weight: 700;
  color: inherit;
  outline-offset: 4px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const IconWrapper = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
`;

const iconProps = {
  small: {
    size: 16,
    strokeWidth: 1,
  },
  large: {
    size: 24,
    strokeWidth: 2,
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {

  return (
    <Wrapper size={size}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper id={icon} {...iconProps[size]} />
      <InputWrapper placeholder={placeholder} inputWidth={width} />
    </Wrapper>
  );
};

export default IconInput;
