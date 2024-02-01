import React from 'react';
import {Container, ProductImage, ProductName} from './styles';
import {Separator} from '../Separator';
import {useNavigation} from '@react-navigation/native';
import {IProduct} from '~/@types/IProduct';

export const ProductCard = ({
  imagem,
  titulo,
  estudio,
  itemDesc,
  preco,
  id,
  quantity,
}: IProduct) => {
  const {navigate} = useNavigation();

  const handleGoToDetails = () =>
    navigate('ProductDetails', {
      imagem,
      titulo,
      estudio,
      itemDesc,
      preco,
      id,
      quantity,
    });
  return (
    <Container onPress={handleGoToDetails}>
      <ProductImage resizeMode="contain" source={{uri: imagem}} />
      <Separator height={10} />
      <ProductName>{titulo}</ProductName>
    </Container>
  );
};
