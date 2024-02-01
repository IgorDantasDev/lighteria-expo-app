import React from 'react';
import {Container, HeaderContainer, TextContainer} from './styles';
import {Text} from '~/components/Text';
import {Divider} from '~/components/Divider';
import {Separator} from '~/components/Separator';
import {ProductsFlatlist} from '~/components/ProductsFlatlist';
import {Bag} from '~/components/Bag';

export const Home: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <Text size={28} isBold>
          Lighteria
        </Text>
        <Bag />
      </HeaderContainer>
      <Separator height={10} />
      <Divider />
      <TextContainer>
        <Text color="#A1A5AA" size={16}>
          Categorias
        </Text>
      </TextContainer>
      <Separator height={10} />
      <ProductsFlatlist />
    </Container>
  );
};
