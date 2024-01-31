import React from "react";
import { Container } from "./styles";
import { TextComponentProps } from "./types";

export const Text = ({
  children,
  color = "black",
  isBold,
  size = 14,
  textAlign,
}: TextComponentProps) => {
  return (
    <Container color={color} size={size} isBold={isBold} textAlign={textAlign}>
      {children}
    </Container>
  );
};
