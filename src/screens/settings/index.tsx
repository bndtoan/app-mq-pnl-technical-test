import { Text, Button } from '@react-navigation/elements';
import { Image, ImageSourcePropType, ScrollView, StyleSheet, View } from 'react-native';
import * as Linking from 'expo-linking';

import { basicStyles, imageResources, metrics, strings } from '../../themes';
import WhiteBackgroundView from '../../components/WhiteBackgroundView';
import { MyButton, MyText } from '../../components';
import TabBarWrapper from '../../components/MyTabBar/TabBarWrapper';
import NoteContext from '../../contexts/NoteContext';
import { showToast } from '../../core/toast';

const SETTING_CONFIGS: { icon: ImageSourcePropType, label: string, url: string }[] = [
  { icon: imageResources.icOnlineCustomer, label: strings.onlineCustomer, url: 'https://www.google.com/' },
  { icon: imageResources.icUserAgreement, label: strings.userAgreement, url: 'https://www.google.com/' },
  { icon: imageResources.icPrivacyPolicy, label: strings.privacyPolicy, url: 'https://www.google.com/' },
  { icon: imageResources.icAboutUs, label: strings.aboutUs, url: 'https://www.google.com/' },
]

export default function SettingsScreen() {
  const noteContext = NoteContext.useContext()

  const onDeleteAllNote = () => {
    noteContext.deleteAll();
    showToast(strings.deleteAllNotesMessage);
  }

  return (
    <View style={styles.container}>
      <ScrollView style={basicStyles.flex} contentContainerStyle={styles.contentContainer}>
        {SETTING_CONFIGS.map((config, index) => (
          <WhiteBackgroundView key={index} style={styles.settingItem} onPress={() => Linking.openURL(config.url)}>
            <Image source={config.icon} style={styles.icon} />
            <MyText.Regular style={basicStyles.flex} size='text16'>
              {config.label}
            </MyText.Regular>
            <Image source={imageResources.icArrowRight} style={styles.iconArrow} />
          </WhiteBackgroundView>
        ))}
      </ScrollView>

      <TabBarWrapper style={basicStyles.center}>
        <MyButton style={styles.deleteButton} onPress={onDeleteAllNote}>
          <MyText.Bold>{strings.deleteAllNotes}</MyText.Bold>
        </MyButton>
      </TabBarWrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: metrics.space20,
    paddingVertical: metrics.space24,
  },
  settingItem: {
    marginBottom: metrics.space16,
    padding: metrics.space16,
    ...basicStyles.rowAlignCenter,
  },
  icon: {
    width: metrics.icon20,
    height: metrics.icon20,
    marginRight: metrics.space8,
  },
  iconArrow: {
    width: metrics.icon24,
    height: metrics.icon24,
    marginLeft: metrics.space8,
  },
  deleteButton: {
    ...basicStyles.center,
    width: 200,
    paddingVertical: metrics.space8,
  }
});
