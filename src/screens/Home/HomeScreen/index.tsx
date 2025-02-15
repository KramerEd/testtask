import React from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import HomePageCarousel from '../../../components/HomeScreenCarousel';
import HomeScreenInfo from '../../../components/HomeScreenInfo';
import MilestoneCard from '../../../components/MileStonesImage';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

export const HomeScreen = () => {
  const {bottom} = useSafeAreaInsets();

  const {navigate} = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ScrollView contentContainerStyle={{paddingBottom: bottom ? bottom : 12}}>
        <HomePageCarousel />
        <HomeScreenInfo />
        <View style={{paddingHorizontal: 20}}>
          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() => {
              navigate('BigBundle');
            }}>
            <Image
              style={{width: '100%'}}
              source={require('../../../assets/images/BannerImage.png')}
            />
          </TouchableOpacity>
          <MilestoneCard
            month={1}
            onNext={() => {
              navigate('MileStones');
            }}
            image={
              'https://images.unsplash.com/photo-1522700373732-73f561debf0b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJhYmllc3xlbnwwfHwwfHx8MA%3D%3D'
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};
