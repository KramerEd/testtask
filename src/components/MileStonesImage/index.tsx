import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

type Props = {
  image: string;
  month: number;
  onNext: () => void;
};

const MilestoneCard = ({onNext, month, image}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />

      <View style={styles.content}>
        <View>
          <Text style={styles.milestoneText}>Milestones</Text>
          <View>
            <Text style={styles.monthText}>Month {month}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={onNext} style={styles.nextButton}>
          <Text style={styles.arrow}>&#8594;</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  milestoneText: {
    fontSize: 12,
    color: 'black',
    fontWeight: '500',
  },
  monthText: {
    fontSize: 32,
    fontWeight: '300',
    flex: 1,
    marginTop: 12,
  },
  nextButton: {
    width: 32,
    height: 32,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  arrow: {
    fontSize: 24,
    fontWeight: '100',
  },
});

export default MilestoneCard;
