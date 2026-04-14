import React from 'react';
import NoteContext, { defaultValue } from './contexts/NoteContext';
import asyncStorage from './core/asyncStorage';

export default function AppStartup() {
  const noteContext = NoteContext.useContext()

  React.useEffect(() => {
    (async () => {
      const note = await asyncStorage.get('NOTE') || defaultValue;
      noteContext.setNotes(note);
    })();
  }, []);

  return <></>;
}