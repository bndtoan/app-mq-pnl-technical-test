import React from 'react';
import { View, StyleSheet, ViewProps, TouchableOpacity } from 'react-native';
import { metrics, colors, basicStyles } from '../../themes';
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
  style: ViewProps['style'];
  onPress?: () => void;
  children: React.ReactNode;
};

export default function index({ style, onPress, children }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={[styles.container, style]} onPress={onPress}>
      <LinearGradient
        style={StyleSheet.absoluteFill}
        colors={[colors.button1, colors.button2]}
      />
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    ...basicStyles.center,
    borderRadius: metrics.radius24,
    overflow: 'hidden'
  },
});