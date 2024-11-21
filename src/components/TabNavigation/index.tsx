import React from 'react';
import {View, Pressable, Text, StyleSheet, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import HomeTabIco from '../../assets/icons/TabsIcons/HomeTabIco.tsx';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MoreTabIco from '../../assets/icons/TabsIcons/MoreTabIco.tsx';
import LogoTabIco from '../../assets/icons/TabsIcons/LogoTabIco.tsx';

type TabProps = {
  title: string;
  isFocused: boolean;
};

const Tab = ({isFocused, title}: TabProps) => {
  const isLogo = title === 'Logo';

  return (
    <View>
      <View
        style={{
          position: isLogo ? 'absolute' : 'static',
          top: Platform.OS === 'ios' ? -60 : -70,
          left: -56,
          backgroundColor: 'rgba(254, 249, 245, 1)',
          padding: isLogo ? 10 : 0,
          borderRadius: 200,
        }}>
        {Tabs.get(title)?.icon({})}
      </View>
      {isLogo ? null : <Text style={styles.tabBarText}>{title}</Text>}
    </View>
  );
};

const Tabs = new Map([
  [
    'Logo',
    {component: (props: TabProps) => <Tab {...props} />, icon: LogoTabIco},
  ],
  [
    'Home',
    {component: (props: TabProps) => <Tab {...props} />, icon: HomeTabIco},
  ],
  [
    'More',
    {component: (props: TabProps) => <Tab {...props} />, icon: MoreTabIco},
  ],
]);

const CustomTabBar = ({state, descriptors, navigation}: BottomTabBarProps) => {
  const {navigate} = useNavigation();

  const {bottom} = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.tabBar,
        {paddingBottom: bottom ? bottom + 6 : 12, paddingTop: 12},
      ]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigate(String(route.name));
          }
        };

        return (
          <Pressable
            onPress={onPress}
            style={styles.tabBarButton}
            key={route.name}>
            {Tabs.get(String(label))?.component({
              title: String(label),
              isFocused,
            })}
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'rgba(254, 249, 245, 1)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  tabBarButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarText: {
    fontSize: 10,
    fontWeight: '700',
    color: 'rgba(54,54,54,1)',
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default CustomTabBar;
