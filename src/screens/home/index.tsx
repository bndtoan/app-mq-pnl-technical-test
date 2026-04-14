import { ActivityIndicator, Image, ScrollView, StyleSheet, View } from 'react-native';
import { basicStyles, colors, imageResources, metrics, strings } from '../../themes';
import NoteContext from '../../contexts/NoteContext';
import { MyText } from '../../components';
import NoteSection from './NoteSection';

export default function HomeScreen() {
  const noteContext = NoteContext.useContext()

  if (!noteContext.initDone) {
    return <ActivityIndicator style={basicStyles.flexCenter} />
  }

  return (
    <ScrollView style={basicStyles.flex} contentContainerStyle={styles.contentContainer}>
      <View style={basicStyles.rowAlignCenter}>
        <Image source={imageResources.icClock} style={styles.icon} />
        <MyText.Regular style={basicStyles.flex} size='text16' color={colors.textWhiteLight}>
          {strings.recentNotes}
        </MyText.Regular>
      </View>

      <NoteSection icon={imageResources.icWork} title={strings.catWork} notes={noteContext.work} />
      <NoteSection icon={imageResources.icLife} title={strings.catLife} notes={noteContext.life} />
      <NoteSection icon={imageResources.icHealth} title={strings.catHealth} notes={noteContext.health} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    padding: metrics.space20
  },
  icon: {
    width: metrics.icon20,
    height: metrics.icon20,
    marginRight: metrics.space8,
  },
});
