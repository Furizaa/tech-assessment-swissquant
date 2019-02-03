import * as React from 'react';
import { Button as BaseButton, ButtonProps } from 'rebass';
import styled from 'styled-components';

const StyledButton = styled(BaseButton)`
  // @ts-ignore
  cursor: ${p => (p.disabled ? 'default' : 'pointer')};
`;

interface Props extends ButtonProps {
  children: React.ReactChild;
  onClick: () => void | undefined;
}

export const Button = ({ children, onClick, ...rest }: Props) => (
  // @ts-ignore
  <StyledButton onClick={onClick} borderRadius={1} {...rest}>
    {children}
  </StyledButton>
);
