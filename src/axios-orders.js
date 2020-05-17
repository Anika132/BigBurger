import axios from 'axios';

const instance = axios.create({
    baseURL: "https://macburger-d29dc.firebaseio.com/"
});

export default instance;