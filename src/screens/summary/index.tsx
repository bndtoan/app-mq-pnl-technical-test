import { Text, Button } from '@react-navigation/elements';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, imageResources, metrics, strings } from '../../themes';
import { MyText } from '../../components';
import SummarySection from './SummarySection';
import NoteContext from '../../contexts/NoteContext';

export default function SummaryScreen() {
  const noteContext = NoteContext.useContext();
  const insets = useSafeAreaInsets()

  // image height: title space + safe area top
  // image width: calculated base on image's dimension
  const imageHeight = 118 + insets.top
  const imageWidth = imageHeight * 229 / 185

  return (
    <View style={styles.container}>
      <View style={{ height: imageHeight }}>
        <Image
          source={imageResources.bgSummary}
          style={[styles.backgroundImage, { height: imageHeight, width: imageWidth }]}
          resizeMode='contain' />
        <MyText.Bold size='text24' style={[styles.title, { marginTop: insets.top + metrics.space16 }]}>
          {strings.summary}
        </MyText.Bold>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
        <SummarySection icon={imageResources.icAvatarWork} title={strings.catWork} noteCount={noteContext.work.length} />
        <SummarySection icon={imageResources.icAvatarLife} title={strings.catLife} noteCount={noteContext.life.length} />
        <SummarySection icon={imageResources.icAvatarHealth} title={strings.catHealth} noteCount={noteContext.health.length} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  title: {
    marginHorizontal: metrics.space20,
  },
  scrollView: {
    flex: 1,
    backgroundColor: colors.backgroundWhite,
    borderTopLeftRadius: metrics.radius20,
    borderTopRightRadius: metrics.radius20,
  },
  scrollViewContent: {
    padding: metrics.space20,
  }
});
