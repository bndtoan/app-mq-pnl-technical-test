import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { basicStyles, metrics, strings } from '../../themes';
import WhiteBackgroundView from '../../components/WhiteBackgroundView';
import { MyButton, MyText, MyTextInput } from '../../components';
import TabBarWrapper from '../../components/MyTabBar/TabBarWrapper';
import CategoryPicker from './CategoryPicker';
import NoteContext, { NoteType } from '../../contexts/NoteContext';

export default function NewNoteScreen() {
  const navigation = useNavigation()
  const noteContext = NoteContext.useContext()

  const [category, setCategory] = useState<NoteType>()
  const noteContentRef = React.useRef<string>('');

  const onSave = React.useCallback(() => {
    if (category && noteContentRef.current.length) {
      noteContext.addNote(category, noteContentRef.current);
      navigation.goBack();
    }
  }, [category])

  return (
    <View style={basicStyles.flex}>
      <ScrollView style={basicStyles.flex} contentContainerStyle={styles.contentContainer}>
        <CategoryPicker category={category} onSelectCategory={setCategory} />
        <WhiteBackgroundView style={styles.noteInputContainer}>
          <MyTextInput
            style={styles.noteInput}
            maxLength={200}
            multiline
            placeholder={strings.pleaseInputNote}
            onChangeText={(text) => { noteContentRef.current = text }}
          />
        </WhiteBackgroundView>
      </ScrollView>

      <TabBarWrapper style={basicStyles.center}>
        <MyButton style={styles.saveButton} onPress={onSave}>
          <MyText.Bold>{strings.save}</MyText.Bold>
        </MyButton>
      </TabBarWrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: metrics.space20,
    paddingVertical: metrics.space24,
  },
  noteInputContainer: {
    height: 260,
    marginTop: metrics.radius16,
  },
  noteInput: {
    flex: 1,
    padding: metrics.space16,
  },
  saveButton: {
    ...basicStyles.center,
    width: 200,
    paddingVertical: metrics.space8,
  }
});
