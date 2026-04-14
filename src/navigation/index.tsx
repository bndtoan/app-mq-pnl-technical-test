import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from './types';
import { createURL } from 'expo-linking';
import { screenConfig } from './screenConfig';
import { MyNavigationHeader } from '../components';


const prefix = createURL('/');

const Stack = createNativeStackNavigator<RootStackParamList>();

type Props = {
  onReady: () => void
}

export default function Navigation({ onReady }: Props) {
  return (
    <NavigationContainer
      theme={{ ...DarkTheme, colors: { ...DarkTheme.colors, background: 'transparent' } }}
      linking={{
        prefixes: [prefix],
        config: {
          screens: { notFound: '*' }
        }
      }}
      onReady={onReady}
    >
      <Stack.Navigator
        initialRouteName='tabs'
        screenOptions={{
          // headerTitleAlign: 'left',
          // headerBackButtonDisplayMode: 'minimal',
          header: (props) => <MyNavigationHeader {...props} />
        }}
      >
        {screenConfig.map(config => {
          const { name, ...options } = config
          return <Stack.Screen key={name} name={name} {...options} />
        })}
      </Stack.Navigator>
    </NavigationContainer>
  )
}