import axios from 'axios';

const ROOT_URL = "http://52.79.180.194:5000/api";

export const requestSignUp = (accessToken) => {
    return axios.post(`${ROOT_URL}/signup`, {
        accesstoken: accessToken
    }).then((res) => {
        return res;
    }).catch((err) => {
        if(err) throw err;
    });
}