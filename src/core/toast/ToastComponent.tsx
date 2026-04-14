import React from 'react';
import { View, StyleSheet } from 'react-native';
import { metrics, colors, basicStyles } from '../../themes';
import { MyText } from '../../components';
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
  message: string;
};

export default function ToastComponent({ message }: Props) {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={StyleSheet.absoluteFill}
        colors={[colors.popout1, colors.popout2]}
      />
      <MyText.Regular style={basicStyles.textAlignCenter} size='text16'>{message}</MyText.Regular>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: metrics.space20,
    paddingHorizontal: metrics.space32,
    borderRadius: metrics.radius20,
    overflow: 'hidden',
    ...basicStyles.center,
  },
});