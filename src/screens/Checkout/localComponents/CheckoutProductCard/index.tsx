import React, {useContext} from 'react';
import {
  Container,
  Content,
  ItemDescriptionContainer,
  ProductImage,
  ValuesContainer,
} from './styles';
import {CheckoutProductCardProps} from './types';
import {Text} from '~/components/Text';
import {Separator} from '~/components/Separator';
import {formatValue} from '~/utils/format';

export const CheckoutProductCard = ({
  imagem,
  preco,
  titulo,
  estudio,
  quantidade,
}: CheckoutProductCardProps) => {
  return (
    <Container>
      <Content>
        <ProductImage resizeMode="contain" source={{uri: imagem}} />
        <Separator width={10} />
        <ItemDescriptionContainer>
          <Text>{titulo}</Text>
          <Text color="grey">{estudio}</Text>
        </ItemDescriptionContainer>
        <ValuesContainer>
          <Text>{formatValue(preco * quantidade)}</Text>
          <Text>Qtd: {quantidade}</Text>
        </ValuesContainer>
      </Content>
    </Container>
  );
};
