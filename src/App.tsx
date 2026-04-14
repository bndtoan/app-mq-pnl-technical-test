import { Assets as NavigationAssets } from '@react-navigation/elements';
import { DarkTheme } from '@react-navigation/native';
import { Asset } from 'expo-asset';
import { createURL } from 'expo-linking';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

import { Navigation } from './navigation';
import AppGradientBackground from './components/AppGradientBackground';

Asset.loadAsync(NavigationAssets);

SplashScreen.preventAutoHideAsync();

const prefix = createURL('/');

export function App() {
  return (
    <>
      <AppGradientBackground />
      <Navigation
        theme={{ ...DarkTheme, colors: { ...DarkTheme.colors, background: 'transparent' } }}
        linking={{
          enabled: 'auto',
          prefixes: [prefix],
        }}
        onReady={() => {
          SplashScreen.hideAsync();
        }}
      />
    </>
  );
}
