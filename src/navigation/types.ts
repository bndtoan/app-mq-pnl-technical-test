export type TabParamTypes = {
  homeTab: undefined;
  summaryTab: undefined;
};

export type RootStackParamList = {
  tabs: undefined;
  newNote: undefined;
  settings: undefined;
  notFound: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}