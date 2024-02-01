import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {WHITE} from '~/constants/themes';

export const Container = styled.TouchableOpacity`
  background-color: ${WHITE};
  padding: ${RFValue(16)}px;
  border-radius: ${RFValue(30)}px;
`;
