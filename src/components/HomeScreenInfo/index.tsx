import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Weight',
    value: '15 lbs\n3 oz',
    timestamp: '1:00 PM Dec 05 2023',
    backgroundColor: '#FFF7E5', // Light yellow
  },
  {
    id: '2',
    title: 'Diaper',
    value: 'Pee\nMedium',
    timestamp: '2h 55m ago',
    backgroundColor: 'rgb(180,187,218)', // Light blue
  },
  {
    id: '3',
    title: 'Feeding',
    value: 'Formula\n5 oz',
    timestamp: '2h 30m ago',
    backgroundColor: '#ecc1af', // Light peach
  },
  {
    id: '4',
    title: 'Sleep',
    value: '2h 20m',
    timestamp: '3h 35m ago',
    backgroundColor: '#bcb1ce', // Light purple
  },
];

const Card = ({title, value, timestamp, backgroundColor}) => (
  <View style={[styles.card, {backgroundColor}]}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.value}>{value}</Text>
    <Text style={styles.timestamp}>{timestamp}</Text>
  </View>
);

const HomeScreenInfo = () => {
  return (
    <FlatList
      scrollEnabled={false}
      data={DATA}
      renderItem={({item}) => (
        <Card
          title={item.title}
          value={item.value}
          timestamp={item.timestamp}
          backgroundColor={item.backgroundColor}
        />
      )}
      style={{marginTop: 20}}
      keyExtractor={item => item.id}
      contentContainerStyle={{gap: 20, marginHorizontal: 10}}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: '400',
    marginBottom: 10,
    color: '#333',
  },
  value: {
    fontSize: 24,
    fontWeight: '300',
    color: 'black',
    marginBottom: 10,
  },
  timestamp: {
    fontSize: 10,
    color: 'rgba(135, 133, 133, 1)',
  },
});
export default HomeScreenInfo;
