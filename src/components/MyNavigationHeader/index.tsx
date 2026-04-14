import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { basicStyles, colors, imageResources, metrics } from '../../themes';
import { LinearGradient } from 'expo-linear-gradient';
import MyText from '../MyText';
import { useNavigation } from '@react-navigation/native';

type Props = (Omit<NativeStackHeaderProps, 'back'> | BottomTabHeaderProps) & { back?: any }

export default function MyTabBar(props: Props) {
  const insets = useSafeAreaInsets()
  const navigation = useNavigation()

  return (
    <View style={[styles.container, { paddingTop: insets.top + metrics.space16 }]}>
      <LinearGradient
        style={StyleSheet.absoluteFill}
        colors={[colors.header1, colors.header2]}
      />

      {props.back && (
        <TouchableOpacity activeOpacity={0.8} style={styles.backIcon} onPress={() => navigation.goBack()}>
          <Image source={imageResources.icArrowLeft} />
        </TouchableOpacity>
      )}
      <MyText.Bold style={styles.title} size='text24'>{props.options.title || ''}</MyText.Bold>
      {props.options.headerRight?.({ canGoBack: props.navigation.canGoBack() })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...basicStyles.rowAlignCenter,
    borderBottomLeftRadius: metrics.radius20,
    borderBottomRightRadius: metrics.radius20,
    overflow: 'hidden',
    paddingBottom: metrics.space16,
    paddingHorizontal: metrics.space20,
    elevation: 2,
    shadowColor: colors.shadow,
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 4 },
  },
  backIcon: {
    width: metrics.icon24,
    height: metrics.icon24,
    borderRadius: 12,
    marginRight: metrics.space8,
  },
  title: {
    flex: 1,
    marginRight: metrics.space8,
  }
});