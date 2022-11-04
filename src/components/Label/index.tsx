import React, { ReactNode } from 'react';

import styled from 'styled-components';

export interface LabelProps
  extends Omit<React.HTMLAttributes<HTMLLabelElement>, 'className'> {
  size?: 'sm' | 'md' | 'lg';
  children?: ReactNode;
  onClick?: () => void;
}

const StyledLabel = styled.label<{
  size?: 'sm' | 'md' | 'lg';
}>`

  font-weight: 400;
  color: #e1e1e6;

  ${({ size = 'md' }) => {
    switch (size) {
      case 'sm':
        return {
          fontSize: 'var(--font-sm)',
        };
      case 'md':
        return {
          fontSize: 'var(--font-md)',
        };
      case 'lg':
        return {
          fontSize: 'var(--font-lg)',
        }
    }
  }}
`

export const Label = ({ children, size = 'md', ...props }: LabelProps) => {
  return (
    <StyledLabel size={size} {...props}>
      {children}
    </StyledLabel>
  );
};
