import asyncStorage from "../core/asyncStorage";
import { createContext } from "../core/context";

export type NoteType = 'work' | 'life' | 'health'

type ContextValueType = Record<NoteType, string[]> & { initDone: boolean };

type ContextActionType = {
  setNotes: (data: any) => void,
  addNote: (type: NoteType, note: string) => void;
};

export const defaultValue: ContextValueType = {
  initDone: false,
  work: [],
  life: [],
  health: [],
};

export default createContext<ContextValueType, ContextActionType>(
  defaultValue,
  () => ({
    setNotes: (_, data) => ({ ...data, initDone: true }),
    addNote: (state, type, note) => {
      const newState = {
        ...state,
        [type]: [note, ...state[type]]
      }
      asyncStorage.set('NOTE', newState);
      return newState;
    },
  }),
);
