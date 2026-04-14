import React from 'react';
import { View, StyleSheet, Pressable, ViewProps, Platform } from 'react-native';
import { colors } from '../../themes';

type Props = {
  children: React.ReactNode,
  style: ViewProps['style'],
  onPress?: () => void,
}

export default function WhiteBackgroundView(props: Props) {
  return (
    <Pressable style={[styles.container, props.style]} onPress={props.onPress}>
      {props.children}
    </Pressable>
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