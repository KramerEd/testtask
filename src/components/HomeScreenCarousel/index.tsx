import React from 'react';
import {
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {CAROUSEL_DATA, PHONE_WIDTH} from '../../constants';
import Gender from '../../assets/icons/Gender.tsx';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
// type Props = {
//   data: typeof CAROUSEL_DATA;
// };

type ItemProps = {
  item: (typeof CAROUSEL_DATA)[number];
};

const RenderItem = ({item: {age, url, gender, name}}: ItemProps) => {
  return (
    <View style={style.itemContainer}>
      <View style={style.itemInfo}>
        <View style={{flexDirection: 'row', gap: 10, flex: 1}}>
          <Text>{name}</Text>
          {gender === 'male' ? <Gender /> : <Text>{gender}</Text>}
        </View>
        <Text>{age}</Text>
      </View>
      <Image style={style.itemImage} source={{uri: url}} />
    </View>
  );
};

const RenderDot = ({
  scrollX,
  index,
}: {
  scrollX: Animated.SharedValue<number>;
  index: number;
}) => {
  const toSnap = PHONE_WIDTH - 10 * 2;

  const inputRange = [
    (index - 1) * toSnap,
    index * toSnap + 12,
    (index + 1) * toSnap,
  ];

  const inputRangeScale = [...inputRange];
  const animatedDotStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(scrollX.value, inputRange, [
      'rgba(0, 0, 0, 0)',
      'rgba(0, 0, 0, 1)',
      'rgba(0, 0, 0, 0)',
    ]);

    const dotWidth = interpolate(scrollX.value, inputRangeScale, [9, 9, 9]);

    return {
      backgroundColor,
      width: dotWidth,
      height: dotWidth,
    };
  });

  return (
    <Animated.View
      style={[
        {width: 10, height: 10, borderRadius: 10, borderWidth: 1},
        animatedDotStyle,
      ]}
    />
  );
};

const HomePageCarousel = () => {
  const scrollX = useSharedValue<number>(0);

  const onCarouselScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollX.value = e.nativeEvent.contentOffset.x;
  };

  return (
    <View>
      <FlatList
        onScroll={onCarouselScroll}
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        decelerationRate={'fast'}
        snapToInterval={PHONE_WIDTH - 20}
        style={{paddingHorizontal: 20}}
        contentContainerStyle={{gap: 20, marginTop: 12, paddingRight: 20}}
        showsHorizontalScrollIndicator={false}
        data={CAROUSEL_DATA}
        renderItem={({item}) => <RenderItem item={item} />}
      />
      <FlatList
        style={style.dotsFlatList}
        contentContainerStyle={style.dotsGap}
        horizontal
        data={CAROUSEL_DATA}
        renderItem={({item: _, index}) => (
          <RenderDot scrollX={scrollX} index={index} />
        )}
      />
    </View>
  );
};

const style = StyleSheet.create({
  dotsFlatList: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    backgroundColor: 'rgba(243, 247, 250, 0.7)',
    borderRadius: 23,
    padding: 5,
  },
  itemContainer: {
    width: PHONE_WIDTH - 20 * 2,
    height: 225,
    borderRadius: 23,
    overflow: 'hidden',
  },
  dotsGap: {
    gap: 6,
  },
  itemImage: {
    width: '100%',
    height: '100%',
  },
  itemInfo: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: 'rgba(243, 247, 250, 0.7)',
    borderRadius: 23,
    paddingVertical: 10,
    paddingHorizontal: 20,
    top: 10,
    left: 10,
  },
});

export default HomePageCarousel;
