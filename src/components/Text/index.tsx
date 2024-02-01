import React from 'react';
import {Container} from './styles';
import {type TextComponentProps} from './types';

export const Text = ({
  children,
  color = 'black',
  isBold,
  size = 14,
}: TextComponentProps) => {
  return (
    <Container color={color} size={size} isBold={isBold}>
      {children}
    </Container>
  );
};
