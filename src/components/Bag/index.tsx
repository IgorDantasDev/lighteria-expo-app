import React from 'react';
import {Container} from './styles';
import {Icon} from '../Icon';
import {useNavigation} from '@react-navigation/native';

export const Bag: React.FC = () => {
  const {navigate} = useNavigation();
  const handleGoToCheckout = () => {
    navigate('Checkout');
  };

  return (
    <Container onPress={handleGoToCheckout}>
      <Icon color="black" size={20} icon="bag" />
    </Container>
  );
};
