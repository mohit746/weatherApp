import axios from 'axios';

export const ApiCallPost = async (url, parameters, headers) => {
  try {
    const response = await axios.post(url, parameters, {headers: headers});
    return response.data;
  } catch (error) {
    return error;
  }
};

export const ApiCallGet = async (url, headers) => {
  try {
    const response = await axios.get(url, {headers: headers});
    return response.data;
  } catch (error) {
    return error;
  }
};

export const ApiCallPut = async (url, parameters, headers) => {
  try {
    const response = await axios.put(url, parameters, {headers: headers});
    return response.data;
  } catch (error) {
    return error;
  }
};

export const ApiCallDelete = async (url, parameters, headers) => {
  try {
    const response = await axios.delete(url, {
      headers: headers,
      data: parameters,
    });
    return response.data;
  } catch (error) {
    return error;
  }
};
