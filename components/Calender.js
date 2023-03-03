import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';

const Calender = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleCalendarPress = () => {
    setShowCalendar(true);
  };

  const handleDayPress = day => {
    setSelectedDate(day.dateString);
    setShowCalendar(false);
  };

  const formattedDate = selectedDate
    ? moment(selectedDate).format('dddd, MMMM D')
    : 'Select a date';

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{formattedDate}</Text>
      </View>
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={handleCalendarPress}>
        <Image
          style={styles.image}
          source={require('../assests/images/calender.png')}
        />
      </TouchableOpacity>
      {showCalendar && (
        <Calendar
          onDayPress={handleDayPress}
          markedDates={{[selectedDate]: {selected: true}}}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    color: '#002D5A',
    fontWeight: 'bold',
    fontSize: 15,
  },
  imageContainer: {
    marginLeft: 20,
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default Calender;
