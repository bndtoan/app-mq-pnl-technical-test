import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function AppGradientBackground() {
  const targetRef = React.useRef<View | null>(null);

  return (
    <LinearGradient style={styles.container} colors={['#1B284F', '#351159', '#421C45', '#3B184E']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} />
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    zIndex: -99,
  },
});