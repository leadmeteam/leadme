import axios from 'axios';
import { AsyncStorage } from 'react-native';

const ROOT_URL = "http://52.79.180.194:5000/api";

const getStorage = async () => {
    try {
      
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

export const requestPostFeed = async (district, feedBody) => {
    try {
        let userId = await AsyncStorage.getItem('userId');
        return axios.post(`${ROOT_URL}/addFeed`, {
            userId,
            district,
            feedBody
        }).then((res) => {
            console.log(res.data);
            return res;
        }).catch((err) => {
            if(err) throw err;
        });
    } catch (e) {
        if(e) throw e;
    }
}

export const requestFirstFeedList = () => {
    return axios.get(`${ROOT_URL}/firstFeed`)
    .then((res) => {
        console.log(res.data);
        return res;
    }).catch((err) => {
        if(err) throw err;
    });
}