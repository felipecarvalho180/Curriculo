import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://curriculo-c6781.firebaseio.com/'
}); 

export default instance;