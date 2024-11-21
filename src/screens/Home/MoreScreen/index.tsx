import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {PHONE_HEIGHT, PHONE_WIDTH} from '../../../constants';

const MoreScreen = () => {
  return (
    <View>
      <SafeAreaView />

      <Text style={{fontSize: 40, color: 'pink'}}>MoreScreen</Text>

      <Image
        style={{width: PHONE_WIDTH, height: PHONE_HEIGHT - 200}}
        source={{
          uri: 'https://media1.tenor.com/m/h8JSvVOZt6oAAAAd/lorem-ipsum-dolor-sit-amet-connor.gif',
        }}
      />
    </View>
  );
};

export default MoreScreen;
