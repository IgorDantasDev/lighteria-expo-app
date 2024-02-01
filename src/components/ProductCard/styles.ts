import styled from 'styled-components/native';
import {Text} from '../Text';
import {RFValue} from 'react-native-responsive-fontsize';
import {WHITE} from '~/constants/themes';

export const Container = styled.TouchableOpacity`
  flex: 1;
  background-color: ${WHITE};
  height: ${RFValue(168)}px;
  border-radius: ${RFValue(10)}px;
  align-items: center;
  justify-content: center;
  margin: ${RFValue(8)}px;
  padding: ${RFValue(16)}px;
  elevation: 1;
`;

export const ProductImage = styled.Image`
  height: ${RFValue(84)}px;
  width: ${RFValue(84)}px;
`;

export const ProductName = styled(Text)`
  color: #848486;
`;
