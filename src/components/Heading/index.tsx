import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  fontColor?: string;
  onClick?: () => void;
}

const StyledHeading = styled.h1<{
  size?: 'sm' | 'md' | 'lg';
  fontColor?: string;
}>`
  font-weight: 700;
  color: ${({ fontColor }) => fontColor || '#e1e1e6'};

  ${({ size = 'md' }) => {
    switch (size) {
      case 'sm':
        return {
          fontSize: 'var(--heading-sm)',
        };
      case 'md':
        return {
          fontSize: 'var(--heading-md)',
        };
      case 'lg':
        return {
          fontSize: 'var(--heading-lg)',
        }
    }
  }}
`;

export const Heading = ({ children, size = 'md', ...props }: HeadingProps) => {
  return (
    <StyledHeading size={size} {...props}>
      {children}
    </StyledHeading>
  );
};
