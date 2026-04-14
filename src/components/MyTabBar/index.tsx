import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Pressable, Image } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import imageResources from '../../themes/imageResources';
import { basicStyles, colors, metrics } from '../../themes';
import MyText from '../MyText';
import TabBarWrapper from './TabBarWrapper';

export default function MyTabBar(props: BottomTabBarProps) {
  const insets = useSafeAreaInsets()

  const selectedIndex = props.state.index

  return (
    <TabBarWrapper style={basicStyles.rowCenter}>
      <Pressable style={styles.tabButtonContainer} onPress={() => props.navigation.navigate('homeTab')}>
        <Image
          source={selectedIndex === 0 ? imageResources.icHomeActive : imageResources.icHomeInactive}
          style={styles.tabButtonImage}
        />
        <MyText.Medium color={selectedIndex === 0 ? colors.textPink : colors.textWhite}>Home</MyText.Medium>
      </Pressable>

      <Pressable style={styles.newNoteContainer} onPress={() => props.navigation.navigate('newNote')}>
        <Image
          source={imageResources.icNewNote}
          style={styles.newNoteImage}
        />
      </Pressable>

      <Pressable style={styles.tabButtonContainer} onPress={() => props.navigation.navigate('summaryTab')}>
        <Image
          source={selectedIndex === 1 ? imageResources.icSummaryActive : imageResources.icSummaryInactive}
          style={styles.tabButtonImage}
        />
        <MyText.Medium color={selectedIndex === 1 ? colors.textPink : colors.textWhite}>Summary</MyText.Medium>
      </Pressable>
    </TabBarWrapper>
  );
}

const styles = StyleSheet.create({
  tabButtonContainer: {
    height: 100,
    width: 125,
    ...basicStyles.center,
  },
  tabButtonImage: {
    height: 48,
    width: 50,
    marginLeft: 16,
    marginBottom: metrics.space6,
  },
  newNoteContainer: {
    height: 100,
    justifyContent: 'flex-start',
    padding: metrics.space20,
  },
  newNoteImage: {
    width: 36,
    height: 36,
    marginTop: 10,
  }
});