import React from 'react';
import { View, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import { metrics, colors, basicStyles, strings, imageResources } from '../../themes';
import { MyText } from '../../components';
import WhiteBackgroundView from '../../components/WhiteBackgroundView';
import { showUnimplementedToast } from '../../core/toast';
import { NoteType } from '../../contexts/NoteContext';

type Props = {
  type: NoteType;
  icon: ImageSourcePropType;
  title: string;
  notes: string[];
};

export default function NoteSection({ type, icon, title, notes }: Props) {
  return (
    <>
      <View style={styles.titleRow}>
        <Image source={icon} style={styles.icon} />
        <MyText.Regular style={basicStyles.flex} size='text16'>
          {title}
        </MyText.Regular>
      </View>
      {!notes.length
        ? <MyText.Regular style={styles.textNoNote} color={colors.textWhiteLight}>{strings.noNote}</MyText.Regular>
        : notes.map((note, index) => (
          <WhiteBackgroundView key={`${type}_${index}`} style={styles.noteItem} onPress={showUnimplementedToast}>
            <MyText.Regular style={basicStyles.flex}>
              {`${note.slice(0, 20)}${note.length > 20 ? '...' : ''}`}
            </MyText.Regular>
            <Image source={imageResources.icArrowRight} style={styles.iconArrow} />
          </WhiteBackgroundView>
        ))}
    </>
  );
}

const styles = StyleSheet.create({
  titleRow: {
    ...basicStyles.rowAlignCenter,
    marginTop: metrics.space28,
  },
  icon: {
    width: metrics.icon20,
    height: metrics.icon20,
    marginRight: metrics.space8,
  },
  noteItem: {
    marginTop: metrics.space12,
    padding: metrics.space16,
    ...basicStyles.rowAlignCenter,
  },
  iconArrow: {
    width: metrics.icon20,
    height: metrics.icon20,
    marginLeft: metrics.space12,
  },
  textNoNote: {
    alignSelf: 'center',
    marginTop: metrics.space12,
  }
});