import React from 'react';

import {useNavigation, useRoute} from '@react-navigation/native';

import {Background} from '~/components/Background';

import {Container, Content} from './styles';
import {ProductDetailedCard} from '~/components/ProductDetailedCard';

export const ProductDetails = ({route}) => {
  const {titulo, preco, estudio, itemDesc, imagem} = route.params;
  console.log(titulo);
  console.log(preco);
  return (
    <Container>
      <Background />
      <Content>
        <ProductDetailedCard
          estudio={estudio}
          itemDesc={itemDesc}
          preco={preco}
          imagem={imagem}
          titulo={titulo}
        />
      </Content>
    </Container>
  );
};
