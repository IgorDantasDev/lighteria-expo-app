import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {WHITE} from '~/constants/themes';

export const Container = styled.View`
  width: 100%;
  padding: ${RFValue(16)}px;
  border-radius: ${RFValue(10)}px;
  background-color: ${WHITE};
  elevation: 1;
`;

export const ProductImage = styled.Image`
  height: ${RFValue(60)}px;
  width: ${RFValue(60)}px;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ItemDescriptionContainer = styled.View`
  justify-content: center;
`;

export const ValuesContainer = styled.View`
  align-items: center;
  justify-content: center;
`;
