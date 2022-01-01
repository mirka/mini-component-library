/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

const sizeVariables = props => {
  return {
    large: {
      '--height': '24px',
      '--border-radius': '8px',
    },
    medium: {
      '--height': '12px',
      '--border-radius': '4px',
    },
    small: {
      '--height': '8px',
      '--border-radius': '4px',
    }
  }[props.size]
}
const Wrapper = styled.div`
  ${sizeVariables}

  position: relative;
  display: block;
  height: var(--height);
  border-radius: var(--border-radius);
  background: ${COLORS.transparentGray15};
  box-shadow: 0px 2px 4px 0px ${COLORS.transparentGray35} inset;

  &::after {
    --progress-width: ${(props) => props["aria-valuenow"]}%;
    --padding: ${(props) => props.size === "large" ? "4px" : 0};

    content: '';
    position: absolute;
    left: var(--padding);
    right: var(--padding);
    top: var(--padding);
    bottom: var(--padding);
    display: block;
    width: calc(100% - var(--padding) * 2);
    height: calc(100% - var(--padding) * 2);
    background: linear-gradient(
      to right,
      ${COLORS.primary} 0%,
      ${COLORS.primary} var(--progress-width),
      transparent var(--progress-width),
      transparent 100%
      );
    border-radius: 4px;
`;

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={Math.min(Math.max(0, value), 100)}
      aria-valuemin="0"
      aria-valuemax="100"
      size={size}
    />
  );
};

export default ProgressBar;
