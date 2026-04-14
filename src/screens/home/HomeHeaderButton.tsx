import { HeaderButton } from '@react-navigation/elements';
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { imageResources, metrics } from '../../themes';

type Props = {
  onPress: () => void,
};

export default function HomeHeaderButton({ onPress }: Props) {
  return (
    <HeaderButton onPress={onPress}>
      <Image source={imageResources.icSettings} style={styles.settingIcon} />
    </HeaderButton>
  );
}

const styles = StyleSheet.create({
  settingIcon: {
    width: metrics.icon24,
    height: metrics.icon24,
  },
});