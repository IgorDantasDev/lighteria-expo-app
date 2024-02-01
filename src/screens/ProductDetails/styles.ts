import {RFValue} from 'react-native-responsive-fontsize';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {BACKGROUNDCOLOR} from '~/constants/themes';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${BACKGROUNDCOLOR};
`;

export const Content = styled.View`
  align-items: center;
  flex: 4;
  padding: ${RFValue(16)}px;
  background-color: ${BACKGROUNDCOLOR};
`;
