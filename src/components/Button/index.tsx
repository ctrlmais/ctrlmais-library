import React from 'react';
import styled from 'styled-components';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
  onClick?: () => void;
  backgroundColor?: string;
  textColor?: string;
  fontSize?: string;
  fontWeight?: string;
  hoverColor?: string;
}

const StyledButton = styled.button<{
  backgroundColor?: string;
  textColor?: string;
  fontSize?: string;
  fontWeight?: string;
  hoverColor?: string;
  size?: 'sm' | 'md' | 'lg';
}>`
  border: 0;
  border-radius: 0.250rem;

  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'var(--primary)'};
  color: ${({ textColor }) => textColor || 'var(--dark-text)'};

  max-width: 400px;

  font-weight: ${({ fontWeight }) => fontWeight || '600'};
  font-size: ${({ fontSize }) => fontSize || '1rem'};

  &:hover {
    outline: 0;
    ${({ hoverColor }) =>
      hoverColor ? { background: hoverColor } : { filter: 'brightness(0.95)' }}
  }

  ${({ size = 'md' }) => {
    switch (size) {
      case 'sm':
        return {
          padding: '0.5rem 1rem',
          fontSize: '14px',
        };
      case 'md':
        return {
          padding: '0.5rem 4rem',
          fontSize: '16px',
        };
      case 'lg':
        return {
          padding: '0.5rem 6rem',
          fontSize: '16px',
        };
    }
  }}

  &:focus {
    outline: 0;
  }

  &:active {
    filter: brightness(1);
  }
`;

export const Button = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
