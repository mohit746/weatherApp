import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import WeatherService from '../../config/services/WeatherService';
import HomeComponent from './HomeComponent';

const HomeContainer = (props) => {
  const {navigation} = props;
  const [cityName, setCityName] = useState('');
  const handleLookup = async () => {
    await WeatherService.getWeatherOfCity(cityName)
      .then((result) => {
        console.log('HomeContainer', 'result: ' + JSON.stringify(result));
        const {cod, list, city} = result;
        if (cod == 200) {
          console.log('GOT 200 list ', JSON.stringify(list));
          console.log('GOT 200 city ', JSON.stringify(city));
          navigation.navigate('WeatherListContainer', {
            listData: list,
            cityData: city,
          });
        } else {
          Alert.alert('No data found');
        }
      })
      .catch((error) => {
        Alert.alert('Please try again');
        console.log(error);
      });
  };
  return (
    <HomeComponent
      navigation={navigation}
      handleLookup={handleLookup}
      cityName={cityName}
      setCityName={setCityName}
    />
  );
};

export default HomeContainer;
