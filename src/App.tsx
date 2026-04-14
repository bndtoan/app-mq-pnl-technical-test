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
import AppStartup from './AppStartup';
import ToastService from './core/toast';

Asset.loadAsync(NavigationAssets);

SplashScreen.preventAutoHideAsync();

export function App() {
  const noteContextValue = NoteContext.createContextValue();

  return (
    <NoteContext.Provider value={noteContextValue}>
      <AppStartup />
      <AppGradientBackground />
      <Navigation
        onReady={() => { SplashScreen.hideAsync(); }}
      />
      <ToastService />
    </NoteContext.Provider>
  );
}
