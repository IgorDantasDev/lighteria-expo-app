import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #f4f0f4;
  padding: ${RFValue(16)}px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const IconCircle = styled.View`
  background-color: #ffffff;
  padding: ${RFValue(16)}px;
  border-radius: ${RFValue(30)}px;
`;

export const TextContainer = styled.View`
  justify-content: center;
  align-self: center;
  align-items: center;
  width: 100;
  height: 30;
  background-color: #f4f0f4;
  margin-top: ${RFValue(-14)}px;
`;
