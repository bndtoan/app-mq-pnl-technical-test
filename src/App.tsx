import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

import AppStartup from './AppStartup';
import AppGradientBackground from './components/AppGradientBackground';
import NoteContext from './contexts/NoteContext';
import ToastService from './core/toast';
import Navigation from './navigation';

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
