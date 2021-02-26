import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import {
  heightPercentageToDP,
  responsiveFontSize,
  responsiveHorizontalSize,
  responsiveVerticalSize,
  widthPercentageToDP,
} from '../../themes/styles/pxDimensions';
import colors from '../../themes/colors';

const HomeComponent = (props) => {
  const {navigation, cityName, setCityName, handleLookup} = props;
  return (
    <View style={styles.rootView}>
      <TextInput
        style={styles.textInputStyle}
        placeholder={'Enter city name'}
        keyboardType="default"
        underlineColorAndroid="transparent"
        value={cityName}
        autoCapitalize="none"
        ref={(input) => {
          // textInputEmail = input;
        }}
        onChangeText={(e) => {
          console.log('hg', e);
          setCityName(e);
        }}
      />
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => handleLookup()}>
        <Text>{'Lookup'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: heightPercentageToDP(6),
    width: widthPercentageToDP(40),
  },
  rootView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  zeroFlex: {
    flex: 0,
  },
  textInputStyle: {
    height: heightPercentageToDP(10),
    width: widthPercentageToDP(60),
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.4,
    marginVertical: responsiveVerticalSize(4),
  },
  headerTitle: {
    fontSize: responsiveFontSize(18),
    color: colors.black,
    marginStart: responsiveHorizontalSize(2),
  },
});
export default HomeComponent;
