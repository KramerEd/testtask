import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/Home/HomeScreen';
import HomeScreenHeader from '../components/HomeScreenHeader';

const Stack = createNativeStackNavigator();

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MoreScreen from '../screens/Home/MoreScreen';
import LogoScreen from '../screens/Home/LogoScreen';
import TabNavigation from '../components/TabNavigation';
import MilestonesScreen from '../screens/Home/MilestonesScreen';
import ProfileScreen from '../screens/Home/ProfileScreen';
import InboxScreen from '../screens/Home/InboxScreen';
import BigBundleScreen from '../screens/Home/BigBundleScreen';

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator
      tabBar={props => <TabNavigation {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'rgba(254, 249, 245, 1)',
          height: 80,
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen name="Home" component={RootStack} />
      <Tab.Screen name="Logo" component={LogoScreen} />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>
  );
}

export function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: () => <HomeScreenHeader />,
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Inbox"
        component={InboxScreen}
        options={{
          header: () => <HomeScreenHeader />,
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          header: () => <HomeScreenHeader />,
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="BigBundle"
        component={BigBundleScreen}
        options={{
          header: () => <HomeScreenHeader />,
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="MileStones"
        component={MilestonesScreen}
        options={{
          header: () => <HomeScreenHeader />,
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
