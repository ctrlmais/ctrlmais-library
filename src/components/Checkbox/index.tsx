import React, { useState } from 'react';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import _uniqueId from 'lodash/uniqueId';
import { Check } from 'phosphor-react';

import styled from 'styled-components';

export interface CheckboxProps {
  children: React.ReactNode;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  backgroundColor?: string;
  indicatorColor?: string;
  labelColor?: string;
}

const StyledRoot = styled(CheckboxPrimitive.Root)<{
  backgroundColor?: string;
}>`
  padding: 2px;
  margin: 0;

  width: 1.5rem;
  height: 1.5rem;

  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'var(--dark-theme)'};

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.25rem;
`;

const StyledIndicator = styled(CheckboxPrimitive.Indicator)<{
  indicatorColor?: string;
}>`
  color: ${({ indicatorColor }) => indicatorColor || 'var(--primary)'};
`;

const StyledLabel = styled.label<{
  fontSize?: string;
  fontColor?: string;
}>`
  user-select: none;
  cursor: pointer;

  margin-left: 8px;

  color: ${({ fontColor }) => fontColor || '#C4C4CC'};
  font-size: ${({ fontSize }) => fontSize || 'var(--font-sm)'};
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 1rem;
`;

export const Checkbox = ({
  children = 'Default checkbox',
  checked = false,
  onCheckedChange,
  backgroundColor,
  indicatorColor,
  labelColor,
}: CheckboxProps) => {
  const [id] = useState(_uniqueId('input-'));

  return (
    <StyledContainer>
      <StyledRoot
        backgroundColor={backgroundColor}
        checked={checked}
        onCheckedChange={onCheckedChange}
        id={id}
      >
        <StyledIndicator indicatorColor={indicatorColor}>
          <Check size={18} />
        </StyledIndicator>
      </StyledRoot>
      <StyledLabel fontColor={labelColor} htmlFor={id}>
        {children}
      </StyledLabel>
    </StyledContainer>
  );
};