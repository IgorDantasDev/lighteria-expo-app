import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 6;
`;

export const BackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const Header = styled.View`
  flex-direction: row;
  padding: ${RFValue(16)}px;
  justify-content: space-between;
  align-items: center;
`;
