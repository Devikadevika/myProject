import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import Participants from './Participants';

const data = [
  {
    key: '1',
    text1: 'Meeting with front-end developers',
    text2: 'Flose Real Estate Project',
    text3: '9:50AM-10:50AM',
    backgroundColor: '#fee3e8',
    textColor: 'brown',
  },
  {
    key: '2',
    text1: 'Internal marketing session',
    text2: 'Marketing Department',
    text3: '11:00AM-12:00AM',
    backgroundColor: '#e9e5ee',
    textColor: '#002D5A',
  },
  {
    key: '3',
    text1: 'Internal marketing session',
    text2: 'Marketing Department',
    text3: '11:00AM-12:00AM',
    backgroundColor: '#eebfbc',
    textColor: '#002D5A',
  },
];

const Meeting = ({item}) => {
  return (
    <View style={[styles.card, {backgroundColor: item.backgroundColor}]}>
      <View
        style={{
          marginLeft: 9,
          flexDirection: 'column',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <Text
          style={{
            color: item.textColor,
            fontWeight: 'bold',
          }}>
          {item.text1}
        </Text>
        <Text style={{color: item.textColor}}>{item.text2}</Text>
      </View>

      <View style={{marginTop: 20}}>
        <Participants />
        <Text style={{marginLeft: 120, color: item.textColor}}>
          {item.text3}
        </Text>
      </View>
    </View>
  );
};

const MeetingData = () => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => <Meeting item={item} />}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 240,
    height: 110,
    borderRadius: 20,
    marginTop: 20,
  },
});

export default MeetingData;
