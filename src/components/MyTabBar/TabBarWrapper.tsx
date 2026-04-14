import React from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, metrics } from '../../themes';
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
  style: ViewProps['style'];
  children: React.ReactNode;
}

export default function TabBarWrapper({ style, children }: Props) {
  const insets = useSafeAreaInsets()

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }, style]}>
      <LinearGradient
        style={StyleSheet.absoluteFill}
        colors={[colors.tabbar1, colors.tabbar2]}
      />

      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: metrics.radius20,
    borderTopRightRadius: metrics.radius20,
    overflow: 'hidden',
  },
});