import React, {useContext} from 'react';
import {BadgeContainer, Container} from './styles';
import {Icon} from '../Icon';
import {useNavigation} from '@react-navigation/native';
import {DataContext} from '~/context';
import {Text} from '../Text';

export const Bag: React.FC = () => {
  const {navigate} = useNavigation();
  const handleGoToCheckout = () => {
    navigate('Checkout');
  };

  const {itemsCheckout} = useContext(DataContext);
  return (
    <Container onPress={handleGoToCheckout}>
      <Icon color="black" size={20} icon="bag" />
      {itemsCheckout.length > 0 ? (
        <BadgeContainer>
          <Text isBold size={12} color="white">
            {itemsCheckout.reduce(
              (accumulated, actualValue) => actualValue.quantity + accumulated,
              0,
            )}
          </Text>
        </BadgeContainer>
      ) : null}
    </Container>
  );
};
