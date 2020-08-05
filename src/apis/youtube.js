import axios from 'axios';

const KEY = 'AIzaSyCcHJWrBrfRgeRKv2ybGkUn43GLDd0cYxs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
});