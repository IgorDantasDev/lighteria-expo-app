import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {BACKGROUNDCOLOR, WHITE} from '~/constants/themes';

export const Container = styled.View`
  border-radius: ${RFValue(10)}px;
  background-color: ${WHITE};
  justify-content: center;
  padding: ${RFValue(16)}px;
  margin-top: ${RFValue(-48)}px;
  width: 100%;
  align-items: center;
`;

export const ItemInfoContainer = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductImage = styled.Image`
  height: ${RFValue(80)}px;
  width: ${RFValue(80)}px;
`;
