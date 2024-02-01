import React, {useContext, useMemo} from 'react';
import {View} from 'react-native';
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
import {DataContext} from '~/context';
import {IContext} from '~/@types/IContext';
import {formatValue} from '~/utils/format';

export const CheckoutProductCard = ({
  imagem,
  preco,
  titulo,
  estudio,
  quantidade,
  id,
}: CheckoutProductCardProps) => {
  const {itemsCheckout} = useContext<IContext>(DataContext);

  const currentItemQuantity = useMemo(() => {
    return itemsCheckout.find(e => {
      e.id === id;
    });
  }, [itemsCheckout, preco]);

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
