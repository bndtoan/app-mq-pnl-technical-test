import React from 'react';
import { View, StyleSheet, ImageSourcePropType, Image } from 'react-native';
import { metrics, colors, basicStyles, strings } from '../../themes';
import { MyButton, MyText } from '../../components';
import WhiteBackgroundView from '../../components/WhiteBackgroundView';

type Props = {
  icon: ImageSourcePropType;
  title: string;
  noteCount: number;
  onPressDetail?: () => void;
};

export default function SummarySection({ icon, title, noteCount, onPressDetail }: Props) {
  return (
    <>
      <View style={basicStyles.rowAlignCenter}>
        <Image source={icon} style={styles.icon} />
        <MyText.Regular style={basicStyles.flex} size='text16'>
          {title}
        </MyText.Regular>
        <MyButton style={styles.detailButton} onPress={onPressDetail}>
          <MyText.Bold>{strings.detail}</MyText.Bold>
        </MyButton>
      </View>

      <WhiteBackgroundView style={styles.summaryContainer}>
        <MyText.Regular color={colors.textWhiteLight}>{`This topic has a total of ${noteCount} records.`}</MyText.Regular>
      </WhiteBackgroundView>
    </>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: metrics.icon48,
    height: metrics.icon48,
    marginRight: metrics.space4,
  },
  detailButton: {
    paddingVertical: metrics.space8,
    paddingHorizontal: metrics.space16,
  },
  summaryContainer: {
    padding: metrics.space16,
    marginTop: metrics.space12,
    marginBottom: metrics.space24,
  }
});