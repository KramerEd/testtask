import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {PHONE_WIDTH} from '../../constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import InboxSvg from '../../assets/icons/Inbox.tsx';

const HomeScreenHeader = () => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={[styles.container, {paddingTop: top}]}>
      <View style={styles.noFlex}>
        <Text style={styles.headerTitle}>Woddle</Text>
      </View>
      <View style={styles.headerIcons}>
        <TouchableOpacity style={styles.inboxIcon}>
          <InboxSvg hasDot />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{uri: 'https://avatar.iran.liara.run/public'}}
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: PHONE_WIDTH,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  headerIcons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 20,
  },
  noFlex: {
    flex: 0,
  },
  headerTitle: {
    fontFamily: 'Ribeye',
    fontSize: 40,
    letterSpacing: -0.5,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 20,
    objectFit: 'cover',
  },
  inboxIcon: {
    transform: [{scale: 0.9}],
  },
});

export default HomeScreenHeader;
