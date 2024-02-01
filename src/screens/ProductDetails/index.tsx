import React from 'react';

import {useNavigation, useRoute} from '@react-navigation/native';

import {Background} from '~/components/Background';

import {Container, Content} from './styles';
import {ProductDetailedCard} from '~/components/ProductDetailedCard';
import {StatusBar} from 'expo-status-bar';

export const ProductDetails = ({route}) => {
  const product = route.params;

  return (
    <Container>
      <StatusBar hidden />
      <Background />
      <Content>
        <ProductDetailedCard {...product} />
      </Content>
    </Container>
  );
};
