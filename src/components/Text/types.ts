import {TextProps} from 'react-native';

export type TextAlignOptions = 'end' | 'justify' | 'center' | 'start';

export interface TextComponentProps extends TextProps {
  size?: number;
  color?: string;
  isBold?: boolean;
  textAlign?: TextAlignOptions;
}
