import { Assets as NavigationAssets } from '@react-navigation/elements';
import { DarkTheme } from '@react-navigation/native';
import { Asset } from 'expo-asset';
import { createURL } from 'expo-linking';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

import Navigation from './navigation';
import AppGradientBackground from './components/AppGradientBackground';
import NoteContext from './contexts/NoteContext';
import { useFonts } from 'expo-font';

Asset.loadAsync(NavigationAssets);

SplashScreen.preventAutoHideAsync();

export function App() {
  const noteContextValue = NoteContext.createContextValue();
  useFonts({
    'PingFang-Regular': require('../assets/fonts/PingFang-Regular.ttf'),
    'PingFang-Medium': require('../assets/fonts/PingFang-Medium.ttf'),
    'PingFang-Bold': require('../assets/fonts/PingFang-Bold.ttf'),
  })

  return (
    <NoteContext.Provider value={noteContextValue}>
      <AppGradientBackground />
      <Navigation
        onReady={() => { SplashScreen.hideAsync(); }}
      />
    </NoteContext.Provider>
  );
}
