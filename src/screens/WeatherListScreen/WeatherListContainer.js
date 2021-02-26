import React, {useState, useEffect} from 'react';
import WeatherListComponent from './WeatherListComponent';

const WeatherListContainer = (props) => {
  const {navigation} = props;
  const [listData, setListData] = useState(props.route.params.listData);
  const [cityData, setCityData] = useState(props.route.params.cityData);
  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleClickOnItem = (index) => {
    console.log(
      'WeatherListContainer: ',
      'handleClickOnItem... ' + listData[index],
    );
    navigation.navigate('WeatherDetailsContainer', {
      item: listData[index],
      city: cityData,
    });
  };

  return (
    <WeatherListComponent
      navigation={navigation}
      city={cityData}
      list={listData}
      handleBackPress={handleBackPress}
      handleClickOnItem={handleClickOnItem}
    />
  );
};

export default WeatherListContainer;
