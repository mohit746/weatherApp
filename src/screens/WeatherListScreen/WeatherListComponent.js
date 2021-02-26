import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  StyleSheet,
} from 'react-native';
import {Header, Left, Body, Title, Button, Right} from 'native-base';
import {
  heightPercentageToDP,
  responsiveFontSize,
  responsiveHorizontalSize,
} from '../../themes/styles/pxDimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../../themes/colors';

const WeatherListComponent = (props) => {
  const {navigation, list, city, handleBackPress, handleClickOnItem} = props;
  console.log(JSON.stringify(city));
  return (
    <View>
      <Header
        style={[styles.headerStyle]}
        iosStatusbar="light-content"
        androidStatusBarColor={colors.lightGrey}>
        <Left style={[styles.zeroFlex, styles.leftTextStyle]}>
          <TouchableOpacity transparent onPress={() => handleBackPress()}>
            <Icon name={'keyboard-backspace'} style={styles.leftIconStyle} />
          </TouchableOpacity>
        </Left>
        <Body style={[styles.fullFlex, styles.bodyStyle]}>
          <Text style={styles.headerTitle}>{city.name}</Text>
        </Body>
        <Right style={styles.zeroFlex} />
      </Header>
      <FlatList
        data={list}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => {
              handleClickOnItem(index);
            }}>
            <Text style={styles.tempTextStyle}>Temp: {item.main.temp}</Text>
            <Text style={styles.mainStyles}>{item.weather[0].main}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        numColumns={1}
      />
    </View>
  );
};
const styles = StyleSheet.create({
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
  headerTitle: {
    fontSize: responsiveFontSize(18),
    color: colors.white,
    marginStart: responsiveHorizontalSize(2),
  },
  leftIconStyle: {
    color: colors.white,
    fontSize: responsiveFontSize(42),
  },
  listItem: {
    borderBottomWidth: 0.5,
    height: heightPercentageToDP(10),
    justifyContent: 'center',
  },
  tempTextStyle: {
    position: 'absolute',
    right: 0,
    marginEnd: responsiveHorizontalSize(4),
  },
  mainStyles: {
    position: 'absolute',
    left: 0,
    marginStart: responsiveHorizontalSize(4),
  },
  bodyStyle: {
    height: heightPercentageToDP(10),
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  leftTextStyle: {
    height: heightPercentageToDP(10),
    justifyContent: 'center',
  },
});
export default WeatherListComponent;
