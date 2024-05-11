import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Lottie from 'lottie-react-native';

const BusInfo = () => {
  const [seats, setSeats] = useState(60);
  const [loading, setLoading] = useState(false);
  const [people, setPeople] = useState(0);
  const findSeats = () => {
    setLoading(true);
    // console.log(loading);
    fetch('http://192.168.29.89:5000/process_video')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setPeople(data.total_people_inside);
        setLoading(false);
      });
  };
  if (loading) {
    console.log('running');
    return (
      <View>
        <Lottie
          source={require('../../animation/loader.json')}
          autoPlay
          style={{width: 400, height: 400, alignSelf: 'center'}}
        />
      </View>
    );
  }
  return (
    <View>
      <Text
        style={{color: 'black', fontWeight: '700', margin: 30, fontSize: 20}}>
        Total Seats = {seats}
      </Text>
      <Text
        style={{color: 'black', fontWeight: '700', margin: 30, fontSize: 20}}>
        Total seats available {seats - people}
      </Text>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
          height: 40,
          borderRadius: 10,
          backgroundColor: 'black',
          marginTop: 10,
          marginBottom: 20,
        }}
        onPress={findSeats}>
        <Text style={{color: 'white'}}>Fetch seats available</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BusInfo;
