import { NewNoteScreen, NotFoundScreen, SettingsScreen } from "../screens";
import { strings } from "../themes";
import TabsNavigator from "./tabsNavigator";
import { ConfigsType, RootStackParamList } from "./types";

export const screenConfig: ConfigsType<RootStackParamList> = [
  {
    name: 'tabs',
    component: TabsNavigator,
    options: { headerShown: false },
  },
  {
    name: 'newNote',
    component: NewNoteScreen,
    options: { title: strings.newNote }
  },
  {
    name: 'settings',
    component: SettingsScreen,
    options: { title: strings.settings }
  },
  {
    name: 'notFound',
    component: NotFoundScreen,
    options: { title: '404' },
  },
]