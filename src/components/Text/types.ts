import {TextProps} from 'react-native';

export interface TextComponentProps extends TextProps {
  size?: number;
  color?: string;
  isBold?: boolean;
}
