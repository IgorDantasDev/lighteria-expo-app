import React from 'react';
import {Container, ProductImage, ProductName} from './styles';
import {Separator} from '../Separator';
import {IProduct} from '~/@types/IProduct';

export const ProductContainer = ({imagem, titulo}: IProduct) => {
  return (
    <Container>
      <ProductImage resizeMode="contain" source={{uri: imagem}} />
      <Separator height={10} />
      <ProductName>{titulo}</ProductName>
    </Container>
  );
};
