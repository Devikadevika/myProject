import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import ProgressList from './Progress';
import Calender from './Calender';
import MeetingData from './Meeting';

const home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerone}>
        <ScrollView style={styles.containertwo}>
          <View
            style={{
              marginLeft: 20,
              marginTop: 30,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 30, color: '#002D5A', fontWeight: '700'}}>
              Hello, Villie!
            </Text>
            <View style={{marginLeft: 20, alignSelf: 'flex-end'}}>
              <View style={styles.circle}>
                <Image
                  source={require('../assests/images/profile.png')}
                  style={styles.image}
                />
              </View>
            </View>
          </View>
          <Text
            style={{
              fontSize: 15,
              color: '#002D5A',
              marginTop: 20,
              fontWeight: 'bold',
              marginLeft: 20,
            }}>
            Your progress
          </Text>
          <View style={{marginTop: 20}}>
            <ProgressList />
          </View>
          <View style={{marginLeft: 10, marginTop: 20}}>
            <Calender />
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.time}>
              <Text
                style={{color: '#002D5A', fontWeight: 'bold', marginTop: 10}}>
                10:00 AM
              </Text>
              <Text
                style={{color: '#002D5A', fontWeight: 'bold', marginTop: -10}}>
                11:00 AM
              </Text>
              <Text
                style={{color: '#002D5A', fontWeight: 'bold', marginTop: -10}}>
                12:00 AM
              </Text>
            </View>
            <View style={{marginLeft: 10, marginBottom: 10}}>
              <MeetingData />
            </View>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecedf4',
  },
  containerone: {
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    borderRadius: 40,
  },
  containertwo: {
    backgroundColor: '#fcfcfe',
    margin: 20,
    borderRadius: 20,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'grey',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  time: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
