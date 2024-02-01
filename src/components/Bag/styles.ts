import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {RED, WHITE} from '~/constants/themes';

export const Container = styled.TouchableOpacity`
  background-color: ${WHITE};
  padding: ${RFValue(16)}px;
  justify-content: center;
  height: ${RFValue(50)};
  border-radius: ${RFValue(30)}px;
`;

export const BadgeContainer = styled.View`
  border-radius: ${RFValue(10)}px;
  justify-content: center;
  align-items: center;
  position: absolute;

  background-color: ${RED};
  width: ${RFValue(16)}px;
  top: ${RFPercentage(4)};
  right: ${RFValue(10)}px;
`;
