import React from 'react';
import { StyleSheet, ViewProps, TouchableOpacity } from 'react-native';
import { colors } from '../../themes';

type Props = {
  children: React.ReactNode,
  style: ViewProps['style'],
  onPress?: () => void,
}

export default function WhiteBackgroundView(props: Props) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={[styles.container, props.style]} onPress={props.onPress}>
      {props.children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.borderWhite,
    backgroundColor: colors.backgroundWhite,
  },
});