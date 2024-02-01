import React from 'react';

import {Text} from '../Text';
import {ProductProps} from '../ProductCard/types';
import {Container, Content, ItemInfoContainer, ProductImage} from './styles';
import {Button} from '../Button';
import {Separator} from '../Separator';
import {formatValue} from '~/utils/format';

export const ProductDetailedCard = ({
  titulo,
  imagem,
  preco,
  itemDesc,
  estudio,
}: ProductProps) => {
  return (
    <Container>
      <Content>
        <ItemInfoContainer>
          <Text size={20} isBold>
            {titulo}
          </Text>
          <Text size={16}>{estudio}</Text>
          <Text size={16}>{itemDesc}</Text>
        </ItemInfoContainer>
        <ProductImage resizeMode="contain" source={{uri: imagem}} />
      </Content>
      <Text isBold size={18}>
        {formatValue(preco)}
      </Text>
      <Separator height={10} />
      <Button label="COMPRAR" />
    </Container>
  );
};
