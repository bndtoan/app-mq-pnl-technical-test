import React from 'react';
import { Text, TextProps } from 'react-native';
import { SizeType, StyleType, textLineHeight, textSize, textStyle } from '../../themes/typography';
import { colors } from '../../themes';


function createTextComponent(
  styleConfig: Record<StyleType, string> = textStyle,
  sizeConfig: Record<SizeType, number> = textSize,
  lineHeighConfig: Record<SizeType, number> = textLineHeight
) {
  function createMyText(textStyle: StyleType) {
    type Props = {
      color?: string;
      size: SizeType;
      children: React.ReactNode;
    } & TextProps;

    function MyText(props: Props) {
      const { color = colors.textWhite, size, children, style, ...anyProps } = props;

      return (
        <Text
          {...anyProps}
          style={[
            {
              color,
              fontSize: sizeConfig[size],
              fontFamily: styleConfig[textStyle],
              lineHeight: lineHeighConfig[size],
            },
            style,
          ]}
        >
          {children}
        </Text>
      );
    }
    MyText.defaultProps = { size: 'text14', };
    return MyText;
  }

  return {
    Bold: createMyText('bold'),
    Medium: createMyText('medium'),
    Regular: createMyText('regular'),
  };
}

export default createTextComponent();