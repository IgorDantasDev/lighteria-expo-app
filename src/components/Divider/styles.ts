import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { DividerProps } from "./types";

export const Container = styled.View<DividerProps>`
  width: ${({ width }) => RFValue(width)}px;
  height: ${RFValue(1)}px;
  background-color: ${({ color }) => color};
`;
