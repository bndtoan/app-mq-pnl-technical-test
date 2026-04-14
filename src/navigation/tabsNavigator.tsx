import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderButton } from '@react-navigation/elements';
import { Text } from 'react-native';

import { TabParamTypes } from './types';
import MyTabBar from '../components/MyTabBar';
import { HomeScreen, SummaryScreen } from '../screens';

const Tab = createBottomTabNavigator<TabParamTypes>();
export default function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ lazy: true }}
      tabBar={props => <MyTabBar {...props} />}
    >
      <Tab.Screen name="homeTab" component={HomeScreen} options={{
        headerRight: () => (
          <HeaderButton onPress={() => navigation.navigate('settings')}>
            <Text>Close</Text>
          </HeaderButton>
        ),
      }} />
      <Tab.Screen name="summaryTab" component={SummaryScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}