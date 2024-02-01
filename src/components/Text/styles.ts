import styled from 'styled-components/native';
import {TextComponentProps} from './types';

export const Container = styled.Text<TextComponentProps>`
  font-size: ${({size}) => size}px;
  color: ${({color}) => color};
  ${({isBold}) => isBold && 'font-weight: bold'};
`;
