import * as React from 'react';
import { Text as BaseText, TextProps } from 'rebass';

interface Props extends TextProps {
  children: React.ReactChild;
}

export const Header1 = ({ children, ...rest }: Props) => (
  <BaseText
    fontFamily="proxima-nova"
    fontSize={5}
    fontWeight="1"
    color="near-black"
    {...rest}
  >
    {children}
  </BaseText>
);

export const Header2 = ({ children, ...rest }: Props) => (
  <BaseText
    fontFamily="proxima-nova"
    fontSize={3}
    fontWeight="1"
    color="near-black"
    {...rest}
  >
    {children}
  </BaseText>
);

export const Text = ({ children, ...rest }: Props) => (
  <BaseText fontFamily="proxima-nova" fontSize={1} fontWeight="0" {...rest}>
    {children}
  </BaseText>
);

export const Muted = ({ children, ...rest }: Props) => (
  <BaseText
    fontFamily="proxima-nova"
    fontSize={0}
    fontWeight="0"
    color="gray"
    {...rest}
  >
    {children}
  </BaseText>
);

export const FormLabel = ({ children, ...rest }: Props) => (
  <BaseText
    fontFamily="proxima-nova"
    fontSize={1}
    fontWeight="1"
    color="near-black"
    {...rest}
  >
    {children}
  </BaseText>
);

export const FormError = ({ children, ...rest }: Props) => (
  <BaseText
    fontFamily="proxima-nova"
    fontSize={1}
    fontWeight="1"
    color="text-warning"
    {...rest}
  >
    {children}
  </BaseText>
);

export const ButtonText = ({ children, ...rest }: Props) => (
  <BaseText fontFamily="proxima-nova" fontSize={2} fontWeight="1" {...rest}>
    {children}
  </BaseText>
);
