import React from "react";
import {
  Container,
  HeaderContainer,
  IconCircle,
  TextContainer,
} from "./styles";
import { Text } from "~/components/Text";
import { Icon } from "~/components/Icon";
import { Divider } from "~/components/Divider";
import { Separator } from "~/components/Separator";
import { ProductsFlatlist } from "~/components/ProductsFlatlist";

export const Home: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <Text size={28} isBold>
          Lighteria
        </Text>
        <IconCircle>
          <Icon color="black" size={20} icon="bag" />
        </IconCircle>
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
