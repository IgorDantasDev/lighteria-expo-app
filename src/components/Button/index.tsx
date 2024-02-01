import React from 'react';
import {Container} from './styles';
import {Text} from '../Text';
import {ButtonProps} from './types';

export const Button = ({label}: ButtonProps) => {
  return (
    <Container>
      <Text size={16} color="white">
        {label}
      </Text>
    </Container>
  );
};
