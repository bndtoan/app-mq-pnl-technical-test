import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

import { TabParamTypes } from './types';
import MyTabBar from '../components/MyTabBar';
import { HomeScreen, SummaryScreen } from '../screens';
import { strings } from '../themes';
import HomeHeaderButton from '../screens/home/HomeHeaderButton';
import { MyNavigationHeader } from '../components';

const Tab = createBottomTabNavigator<TabParamTypes>();
export default function TabsNavigator() {
  const navigation = useNavigation()

  return (
    <Tab.Navigator
      screenOptions={{ lazy: true, header: (props) => <MyNavigationHeader {...props} /> }}
      initialRouteName='homeTab'
      tabBar={props => <MyTabBar {...props} />}
    >
      <Tab.Screen name="homeTab" component={HomeScreen} options={{
        title: strings.home,
        headerRight: () => <HomeHeaderButton onPress={() => navigation.navigate('settings')} />,
      }} />
      <Tab.Screen name="summaryTab" component={SummaryScreen} options={{ title: strings.summary, headerShown: false }} />
    </Tab.Navigator>
  );
}