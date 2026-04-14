import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet } from 'react-native';
import { colors } from '../../themes';

export default function AppGradientBackground() {
  return (
    <LinearGradient
      style={styles.container}
      colors={[colors.background1, colors.background2, colors.background3, colors.background4]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    zIndex: -99,
  },
});