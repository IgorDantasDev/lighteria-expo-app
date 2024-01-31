import React from "react";
import { Container, ProductImage, ProductName } from "./styles";
import { ProductProps } from "./types";
import { Separator } from "../Separator";

export const ProductContainer = ({ imagem, titulo }: ProductProps) => {
  return (
    <Container>
      <ProductImage resizeMode="contain" source={{ uri: imagem }} />
      <Separator height={10} />
      <ProductName>{titulo}</ProductName>
    </Container>
  );
};
