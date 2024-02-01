import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BACKGROUNDCOLOR, WHITE} from '~/constants/themes';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${BACKGROUNDCOLOR};
  padding: ${RFValue(16)}px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const IconCircle = styled.View`
  background-color: ${WHITE};
  padding: ${RFValue(16)}px;
  border-radius: ${RFValue(30)}px;
`;

export const TextContainer = styled.View`
  justify-content: center;
  align-self: center;
  align-items: center;
  width: 100;
  height: 30;
  background-color: ${BACKGROUNDCOLOR};
  margin-top: ${RFValue(-14)}px;
`;
