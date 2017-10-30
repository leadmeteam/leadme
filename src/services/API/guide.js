import axios from 'axios';

const ROOT_URL = "http://52.79.174.252:5000/api";

export const requestGetGuideList = () => {
    return axios.get(`${ROOT_URL}/feeds/allGuides`).then(res => {
        return res;
    }).catch(err => {
        if(err) throw err;
    });
}

export const requestRegisterGuide = (guideInfo) => {
    return axios({
        method: 'POST',
        url: `${ROOT_URL}/feeds/signUp`
    }).then(res => {
        return res;
    }).catch(err => {
        if(err) throw err;
    });
}