import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { basicStyles, colors, metrics, strings } from '../../themes';
import WhiteBackgroundView from '../../components/WhiteBackgroundView';
import { MyButton, MyText, MyTextInput } from '../../components';
import TabBarWrapper from '../../components/MyTabBar/TabBarWrapper';
import CategoryPicker from './CategoryPicker';
import NoteContext, { NoteType } from '../../contexts/NoteContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { showToast } from '../../core/toast';

export default function NewNoteScreen() {
  const navigation = useNavigation()
  const insets = useSafeAreaInsets()
  const noteContext = NoteContext.useContext()

  const [category, setCategory] = useState<NoteType>()
  const noteContentRef = React.useRef<string>('');

  const onSave = React.useCallback(() => {
    if (!category || !noteContentRef.current.length) {
      showToast(strings.invalidInput)
      return
    }
    noteContext.addNote(category, noteContentRef.current);
    navigation.goBack();
  }, [category])

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={-insets.bottom}
      style={basicStyles.flex}
    >
      <ScrollView style={basicStyles.flex} contentContainerStyle={styles.contentContainer}>
        <CategoryPicker category={category} onSelectCategory={setCategory} />
        <WhiteBackgroundView style={styles.noteInputContainer}>
          <MyTextInput
            style={styles.noteInput}
            maxLength={200}
            multiline
            placeholder={strings.pleaseInputNote}
            placeholderTextColor={colors.textWhite}
            verticalAlign='top'
            textAlignVertical='top'
            onChangeText={(text) => { noteContentRef.current = text }}
          />
        </WhiteBackgroundView>
      </ScrollView>

      <TabBarWrapper style={basicStyles.center}>
        <MyButton style={styles.saveButton} onPress={onSave}>
          <MyText.Bold>{strings.save}</MyText.Bold>
        </MyButton>
      </TabBarWrapper>
    </KeyboardAvoidingView>
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
    justifyContent: 'flex-start'
  },
  noteInput: {
    padding: metrics.space16,
  },
  saveButton: {
    ...basicStyles.center,
    width: 200,
    paddingVertical: metrics.space8,
  }
});
