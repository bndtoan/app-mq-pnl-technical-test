import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';

import TabsNavigator from './tabsNavigator';
import { RootStackParamList } from './types';
import { NewNoteScreen, NotFoundScreen, SettingsScreen } from '../screens';

export const RootStack = createNativeStackNavigator<RootStackParamList>({
  screens: {
    tabs: {
      screen: TabsNavigator,
      options: { headerShown: false },
    },
    newNote: {
      screen: NewNoteScreen,
    },
    settings: {
      screen: SettingsScreen,
    },
    notFound: {
      screen: NotFoundScreen,
      options: { title: '404' },
      linking: { path: '*' },
    },
  },
  screenOptions: {
    header: () => <View />
  },
});

export const Navigation = createStaticNavigation(RootStack);
