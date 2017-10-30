import axios from 'axios';
import { AsyncStorage } from 'react-native';

const ROOT_URL = "http://52.79.174.252:5000/api";

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

export const requestPostFeed = async (district, feedBody, photoUrl) => {
    try {
        let userId = await AsyncStorage.getItem('userId');
        let formData = new FormData();
        let newTime = Date.parse(new Date());
        
        formData.append("userId", userId);
        formData.append("district", district);
        if(photoUrl !== '') {
            formData.append("feed_image", {uri: photoUrl, name: `${newTime}.jpg`, type: 'image/jpg'});
        }

        formData.append("feedBody", feedBody);
        return axios.post(`${ROOT_URL}/feeds/addFeed`, formData).then(res => {
            console.log(res.data);
            return res;
        }).catch(err => {
            if(err) throw err;
        });
    } catch (e) {
        if(e) throw e;
    }
}

export const requestFirstFeedList = () => {
    return axios.get(`${ROOT_URL}/feeds/allFeed`)
    .then(res => {
        console.log(res.data);
        return res;
    }).catch(err => {
        if(err) throw err;
    });
}

export const requestPostFeedComment = async (feedId, comment) => {
    try {
        let userId = await AsyncStorage.getItem('userId');
        return axios.post(`${ROOT_URL}/comments/addComment/${feedId}`, {
            _id: userId,
            commentBody: comment,
        }).then(res => {
            return res;
        }).catch(err => {
            if(err) throw err;
        });
    } catch (e) {
        if(e) throw e;
    }
}

export const requestRemoveFeedComment = async (feedId, commentId) => {
    try {
        let userId = await AsyncStorage.getItem('userId');
        
        return axios.delete(`${ROOT_URL}/comments/deleteComment/${feedId}/${commentId}/${userId}`)
                    .then(res => {
                        return res;
                    }).catch(err => {
                        if(err) throw err;
                    });
    } catch (e) {
        if(e) throw e;
    }
}

export const requestToggleLikeFeed = async (feedId) => {
    try {
        let userId = await AsyncStorage.getItem('userId');

        return axios.put(`${ROOT_URL}/feeds/addLike`, {
            userId,
            feedId
        }).then(res => {
            return res;
        }).catch(err => {
            if(err) throw err;
        });
    } catch (e) {
        if(e) throw e;
    }
}

export const requestSearchFeed = async (qs) => {
    return axios.get(`${ROOT_URL}/feeds/search/${qs}`)
                .then(res => {
                    return res;
                }).catch(err => {
                    if(err) throw err;
                });
}