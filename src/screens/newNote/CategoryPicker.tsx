import React, { useState } from 'react';
import { Image, Modal, Pressable, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { basicStyles, colors, imageResources, metrics, strings } from '../../themes';
import WhiteBackgroundView from '../../components/WhiteBackgroundView';
import { MyText } from '../../components';
import { NoteType } from '../../contexts/NoteContext';

const PICKER_VALUE: Record<NoteType, string> = {
  work: strings.catWork,
  life: strings.catLife,
  health: strings.catHealth,
}

type Props = {
  category: NoteType | undefined;
  onSelectCategory: (category: NoteType) => void;
}

export default function CategoryPicker({ category, onSelectCategory }: Props) {
  const [pickerVisible, setPickerVisible] = useState(false);

  const onPressCategory = (value: NoteType) => {
    onSelectCategory(value);
    setPickerVisible(false)
  }

  return (
    <>
      <WhiteBackgroundView style={styles.categoryContainer} onPress={() => setPickerVisible(true)}>
        <MyText.Regular style={basicStyles.flex}>
          {category ? PICKER_VALUE[category] : strings.chooseCategory}
        </MyText.Regular>
        <Image source={imageResources.icArrowDown} style={styles.icon} />
      </WhiteBackgroundView>

      <Modal
        animationType="fade"
        transparent={true}
        visible={pickerVisible}
        onRequestClose={() => {
          setPickerVisible(!pickerVisible);
        }}>
        <TouchableWithoutFeedback onPress={() => setPickerVisible(false)}>
          <View style={styles.pickerBackground}>
            <View style={styles.pickerView}>
              {Object.entries(PICKER_VALUE).map(([value, label], index) => (
                <Pressable
                  style={[styles.pickerItem, index != 0 && { borderTopWidth: 1 }]}
                  onPress={() => onPressCategory(value as NoteType)}
                >
                  <MyText.Regular>{label}</MyText.Regular>
                </Pressable>
              ))}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    ...basicStyles.rowAlignCenter,
    padding: metrics.space16,
    paddingRight: metrics.space8,
  },
  icon: {
    width: metrics.icon24,
    height: metrics.icon24,
    marginLeft: metrics.space8,
  },
  pickerBackground: {
    ...basicStyles.flexCenter,
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },
  pickerView: {
    margin: metrics.space20,
    backgroundColor: colors.tabbar1,
    borderRadius: metrics.radius16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  pickerItem: {
    padding: metrics.space16,
    borderColor: colors.borderWhite,
  }
});
