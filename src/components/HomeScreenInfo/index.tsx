import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {INFO_DATA} from '../../constants';

type CardProps = {
  title: string;
  value: string;
  timestamp: string;
  backgroundColor: string;
};

const Card = ({title, value, timestamp, backgroundColor}: CardProps) => (
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
      data={INFO_DATA}
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
