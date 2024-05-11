import {View, Text} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ListBuses = ({navigation}) => {
  return (
    <View>
      <View
        style={{
          marginTop: 30,
          backgroundColor: 'white',
          width: 300,
          alignSelf: 'center',
          borderRadius: 10,
          padding: 10,
        }}>
        <Text style={{color: 'black', fontWeight: 900, padding: 20}}>
          Bus 2 (Noida --- Delhi)
        </Text>

        <Text style={{color: 'black', fontWeight: 600, padding: 20}}>
          Bus Id #438
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
          onPress={() => {
            navigation.navigate('BusInfo');
          }}>
          <Text style={{color: 'white'}}> Choose your location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListBuses;
