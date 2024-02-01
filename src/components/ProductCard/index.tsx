import React from 'react';
import {Container, ProductImage, ProductName} from './styles';
import {type ProductProps} from './types';
import {Separator} from '../Separator';
import {useNavigation} from '@react-navigation/native';

export const ProductCard = ({
  imagem,
  titulo,
  estudio,
  itemDesc,
  preco,
}: ProductProps) => {
  const {navigate} = useNavigation();

  const handleGoToDetails = () =>
    navigate('ProductDetails', {
      preco,
      titulo,
      itemDesc,
      estudio,
      imagem,
    });
  return (
    <Container onPress={handleGoToDetails}>
      <ProductImage resizeMode="contain" source={{uri: imagem}} />
      <Separator height={10} />
      <ProductName>{titulo}</ProductName>
    </Container>
  );
};
