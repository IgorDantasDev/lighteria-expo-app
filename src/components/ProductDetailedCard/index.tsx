import React, {useContext} from 'react';

import {Text} from '../Text';
import {Container, Content, ItemInfoContainer, ProductImage} from './styles';
import {Button} from '../Button';
import {Separator} from '../Separator';
import {formatValue} from '~/utils/format';
import {DataContext} from '~/context';
import {useNavigation} from '@react-navigation/native';
import {IProduct} from '~/@types/IProduct';

export const ProductDetailedCard = ({
  titulo,
  imagem,
  estudio,
  itemDesc,
  preco,
  id,
  quantity,
}: IProduct) => {
  const {addItem} = useContext(DataContext);

  const {navigate} = useNavigation();

  const handleBuyButton = () => {
    addItem({
      titulo,
      imagem,
      estudio,
      itemDesc,
      preco,
      id,
      quantity,
    });
    navigate('Checkout');
  };

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
      <Button label="COMPRAR" onPress={handleBuyButton} />
    </Container>
  );
};
