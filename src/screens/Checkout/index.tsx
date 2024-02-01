import React, {useContext} from 'react';
import {FlatList, Pressable} from 'react-native';
import {Container, FinishPurchaseContainer} from './styles';
import {Text} from '~/components/Text';
import {DataContext} from '~/context';
import {IContext} from '~/@types/IContext';
import {CheckoutProductCard} from './localComponents/CheckoutProductCard';
import {Separator} from '~/components/Separator';
import {Button} from '~/components/Button';
import {useNavigation} from '@react-navigation/native';
import {formatValue} from '~/utils/format';

export const Checkout: React.FC = () => {
  const {itemsCheckout} = useContext<IContext>(DataContext);
  const {navigate} = useNavigation();

  const handleGoToHome = () => {
    navigate('Home');
  };

  const totalValue = itemsCheckout.reduce(
    (accumulated, actual) => accumulated + actual.quantity * actual.preco,
    0,
  );

  return (
    <Container>
      <Text isBold size={26}>
        Checkout
      </Text>
      <Separator height={20} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={itemsCheckout}
        ItemSeparatorComponent={() => <Separator height={10} />}
        renderItem={({item}) => (
          <CheckoutProductCard
            id={item.id}
            quantidade={item.quantity}
            preco={item.preco}
            titulo={item.titulo}
            imagem={item.imagem}
            estudio={item.estudio}
          />
        )}
      />
      <Separator height={10} />
      <FinishPurchaseContainer>
        <Text size={20} isBold>
          Valor total: {formatValue(totalValue)}
        </Text>
        <Separator height={10} />
        <Button onPress={() => {}} label="FINALIZAR COMPRA" />
        <Separator height={10} />
        <Pressable onPress={handleGoToHome}>
          <Text isBold color="#00adef">
            Continuar comprando
          </Text>
        </Pressable>
      </FinishPurchaseContainer>
    </Container>
  );
};
