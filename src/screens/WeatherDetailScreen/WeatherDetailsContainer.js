import React, {useState, useEffect} from 'react';
import WeatherDetailsComponent from './WeatherDetailsComponent';

const WeatherDetailsContainer = (props) => {
  const {navigation} = props;
  const [item, setItem] = useState(props.route.params.item);
  const [city, setCity] = useState(props.route.params.city);

  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <WeatherDetailsComponent
      navigation={navigation}
      item={item}
      city={city}
      handleBackPress={handleBackPress}
    />
  );
};

export default WeatherDetailsContainer;
