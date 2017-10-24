import axios from 'axios';
import { AsyncStorage } from 'react-native';

const ROOT_URL = "http://52.79.180.194:5000/api";

const setStorage = async (userId) => {
    try {
      await AsyncStorage.setItem('userId', userId);
    } catch (error) {
      console.log(error);
    }
};

const getStorage = async () => {
  try {
    let userId = await AsyncStorage.getItem('userId');
    // console.log(valueToken);
    if (userId !== null) {
      // 로그인 정보 status 보내기.
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

export const requestSignUp = (accessToken) => {
    return axios.post(`${ROOT_URL}/signup`, {
        accesstoken: accessToken
    }).then((res) => {
        setStorage(res.data._id);
        console.log(res.data);
        return res;
    }).catch((err) => {
        if(err) throw err;
    });
}