import React from "react";
import { Container } from "./styles";
import { DividerProps } from "./types";

export const Divider = ({ color = "black", width = "100%" }: DividerProps) => {
  return <Container width={width} color={color} />;
};
