import {RFValue} from 'react-native-responsive-fontsize';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {ACTIONBUTTON, BACKGROUNDCOLOR} from '~/constants/themes';

export const Container = styled(SafeAreaView)`
  background-color: ${BACKGROUNDCOLOR};
  flex: 1;
  padding: ${RFValue(16)}px;
`;

export const FinishPurchaseContainer = styled.View`
  align-items: center;
  justify-content: center;
`;
