import _uniqueId from 'lodash/uniqueId';
import React from 'react';

import styled from 'styled-components';

const emailSvg: React.SVGProps<SVGSVGElement> = (
  <svg
    className="fill-gray-400 stroke-gray-400 w-6"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
  >
    <rect width="256" height="256" fill="none"></rect>
    <path
      d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></path>
    <polyline
      points="224 56 128 144 32 56"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></polyline>
  </svg>
);

const lockSvg: React.SVGProps<SVGSVGElement> = (
  <svg
    className="fill-gray-400 stroke-gray-400 w-6"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
  >
    <rect width="256" height="256" stroke="#00000000" fill="none"></rect>
    <rect
      x="40"
      y="88"
      width="176"
      height="128"
      rx="8"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></rect>
    <path
      d="M92,88V52a36,36,0,0,1,72,0V88"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></path>
    <circle cx="128" cy="152" r="12"></circle>
  </svg>
);

export interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'className' | 'size' | 'type'
  > {
  size?: 'sm' | 'md' | 'lg' | 'full';
  type?: 'email' | 'text' | 'password';
  backgroundColor?: string;
  placeholderColor?: string;
  fontColor?: string;
  onClick?: () => void;
}

const icons: {
  email: React.SVGProps<SVGSVGElement> | null;
  password: React.SVGProps<SVGSVGElement> | null;
  text: React.SVGProps<SVGSVGElement> | null;
} = {
  email: emailSvg,
  text: null,
  password: lockSvg,
};

const StyledDiv = styled.div<{
  size: InputProps['size'];
  backgroundColor?: string;
}>`
  max-width: 400px;

  position: relative;
  display: flex;
  align-items: center;

  background-color: ${({ backgroundColor }) => backgroundColor || '#202024'};

  gap: 0.75rem;

  padding: 0.75rem 0.1rem 0.75rem 1rem;

  border: 1px transparent solid;
  border-radius: 0.25rem;

  &:focus-within {
    border-color: var(--primary);
  }

  &:hover {
    border-color: var(--primary);
  }

  ${({ size }) => {
    switch (size) {
      case 'sm':
        return 'width: 200px;';
      case 'md':
        return 'width: 300px;';
      case 'lg':
        return 'width: 400px;';
      case 'full':
        return 'width: 100%;';
    }
  }}
`;

const StyledInput = styled.input<{
  placeholderColor?: string;
  fontColor?: string;
}>`

  background-color: transparent;
  color: ${({ fontColor }) => fontColor || 'white'};

  user-select: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ placeholderColor }) => placeholderColor || '#7c7c8a'};
  }

  font-weight: 400;
  font-size: var(--font-sm);

  border-radius: 0.25rem;

  width: 100%;
`;

export const Input = ({
  placeholder = 'johndoe@gmail.com',
  size = 'md',
  type = 'text',
  ...props
}: InputProps) => {
  const [id] = React.useState(_uniqueId('input-'));
  return (
    <label htmlFor={id}>
      <StyledDiv size={size} backgroundColor={props.backgroundColor}>
        <>{icons[type]}</>
        <StyledInput
          name="input"
          id={id}
          placeholder={placeholder}
          type={type}
          {...props}
        />
      </StyledDiv>
    </label>
  );
};
