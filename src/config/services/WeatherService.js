import {ApiConfig} from '../apiConfig/ApiConfig';

import {ApiCallGet} from '../apiConfig/ApiCall';
import {ApplicationConstants} from '../../utils/AppConstants';

const WeatherService = {
  getWeatherOfCity: async (cityName) => {
    const {baseUrl, APIKey} = ApiConfig; //q={city}&appid={api key}
    const url =
      baseUrl + cityName + '&' + ApplicationConstants.appid + '=' + APIKey;
    console.log('getWeatherOfCity  url', url);
    const headers = {
      'Content-Type': 'application/json',
    };
    console.log('the header is ', headers);
    return ApiCallGet(url, headers);
  },
};

export default WeatherService;
