import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Participants = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={[styles.profileCard, {left: 60, zIndex: 3}]}>
          <Image
            style={styles.img}
            source={{uri: 'https://randomuser.me/api/portraits/men/25.jpg'}}
          />
        </View>
        <View style={[styles.profileCard, {left: 40, zIndex: 4}]}>
          <Image
            style={[styles.img]}
            source={{uri: 'https://randomuser.me/api/portraits/men/26.jpg'}}
          />
        </View>
        <View style={[styles.profileCard, {left: 20, zIndex: 5}]}>
          <Image
            style={styles.img}
            source={{uri: 'https://randomuser.me/api/portraits/men/28.jpg'}}
          />
        </View>
        <View style={[styles.profileCard, {left: 80, zIndex: 2}]}>
          <Image
            style={styles.img}
            source={{uri: 'https://randomuser.me/api/portraits/men/24.jpg'}}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  wrapper: {},
  profileCard: {
    position: 'absolute',
    width: 25,
    height: 25,
    borderRadius: 12.5,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#fff',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default Participants;
