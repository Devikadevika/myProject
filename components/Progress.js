import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';

const data = [
  {
    key: '1',
    text1: 'Working',
    text2: 'Hours',
    text3: 'Working hours Exceeded by 3 hours',
    backgroundColor: '#f46b61',
    textColor: 'white',
    progresscolor: 'white',
    value: '19',
  },
  {
    key: '2',
    text1: 'Your ',
    text2: 'Efficiency',
    text3: 'Excellent result',
    backgroundColor: '#ffd565',
    textColor: '#795548',
    progresscolor: '#896e37',
    value: '82',
  },
  {
    key: '3',
    text1: 'Working',
    text2: 'Hours',
    text3: 'Working hours Exceeded by 3 hours',
    backgroundColor: '#ffd565',
    textColor: '#795548',
    progresscolor: '#896e37',
    value: '13',
  },
];

const ProgressCard = ({item}) => {
  return (
    <View style={[styles.card, {backgroundColor: item.backgroundColor}]}>
      <View style={{marginLeft: 10, marginTop: 20}}>
        <CircularProgress
          value={item.value}
          radius={50}
          duration={40}
          progressValueColor={item.progresscolor}
          maxValue={100}
          progressText={`${Math.round((item.value / 40) * 100)}%`}
          titleColor={'white'}
          titleStyle={{fontWeight: 'bold'}}
        />
      </View>
      <View style={{flexDirection: 'column', marginLeft: 10, marginTop: 30}}>
        <Text style={{fontSize: 18, color: item.textColor}}>{item.text1}</Text>
        <Text style={{fontSize: 18, color: item.textColor}}>{item.text2}</Text>
        <Text style={{fontSize: 10, color: item.textColor}}>{item.text3}</Text>
      </View>
    </View>
  );
};

const ProgressList = () => {
  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={({item}) => <ProgressCard item={item} />}
      keyExtractor={item => item.key}
      contentContainerStyle={styles.flatListContainer}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 250,
    borderRadius: 10,
    marginRight: 20,
    marginTop: 10,
    flexDirection: 'column',
  },
  flatListContainer: {
    paddingHorizontal: 20,
  },
});

export default ProgressList;
