import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Header, Left, Body, Title, Button, Right} from 'native-base';
import {
  heightPercentageToDP,
  responsiveFontSize,
  responsiveHorizontalSize,
  responsiveVerticalSize,
} from '../../themes/styles/pxDimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../themes/colors';

const WeatherDetailsComponent = (props) => {
  const {navigation, item, city, handleBackPress} = props;
  return (
    <View style={{flex: 1}}>
      <Header
        style={[styles.headerStyle]}
        iosStatusbar="light-content"
        androidStatusBarColor={colors.lightGrey}>
        <Left style={[styles.zeroFlex, ,]}>
          <TouchableOpacity transparent onPress={() => handleBackPress()}>
            <Icon name={'keyboard-backspace'} style={styles.leftIconStyle} />
          </TouchableOpacity>
        </Left>
        <Body style={[styles.fullFlex, styles.bodyStyle]}>
          <Text style={styles.headerTitle}>{city.name}</Text>
        </Body>
        <Right style={styles.zeroFlex} />
      </Header>

      <View style={styles.container}>
        <Text style={styles.textStyle}>{item.main.temp}</Text>
        <Text style={styles.textFeelsStyle}>
          Feels Like:{item.main.feels_like}
        </Text>
        <Text style={{fontSize: responsiveFontSize(30)}}>
          {item.weather[0].main}
        </Text>
        <Text style={{fontSize: responsiveFontSize(20)}}>
          {item.weather[0].description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: responsiveHorizontalSize(2),
    paddingVertical: 14,
  },
  headerStyle: {
    backgroundColor: 'blue',
    height: heightPercentageToDP(8),
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0,
    elevation: 0,
    shadowColor: 'transparent',
    borderBottomWidth: 0,
  },
  zeroFlex: {
    flex: 0,
  },
  bodyStyle: {
    height: heightPercentageToDP(10),
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerTitle: {
    fontSize: responsiveFontSize(18),
    color: colors.white,
    marginStart: responsiveHorizontalSize(2),
  },
  leftIconStyle: {
    color: colors.white,
    fontSize: responsiveFontSize(42),
  },
  textStyle: {
    textAlign: 'center',
    fontSize: responsiveFontSize(40),
    fontWeight: 'bold',
    marginVertical: responsiveVerticalSize(4),
  },
  textFeelsStyle: {
    textAlign: 'right',
    fontSize: responsiveFontSize(20),
    marginVertical: responsiveVerticalSize(4),
  },
});
export default WeatherDetailsComponent;
