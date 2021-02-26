import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeContainer from '../screens/HomeScreen/HomeContainer';
import WeatherDetailsContainer from '../screens/WeatherDetailScreen/WeatherDetailsContainer';
import WeatherListContainer from '../screens/WeatherListScreen/WeatherListContainer';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

const NavigationStack = (props) => {
  console.log('NavigationStack', 'inside the methof');
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeContainer"
        screenOptions={({route, navigation}) => ({
          gestureEnabled: false,
          cardOverlayEnabled: true,
        })}
        mode="modal"
        headerMode="none">
        <Stack.Screen name="HomeContainer" component={HomeContainer} />
        <Stack.Screen
          name="WeatherListContainer"
          component={WeatherListContainer}
        />
        <Stack.Screen
          name="WeatherDetailsContainer"
          component={WeatherDetailsContainer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
