import axios from 'axios'

export const BOOK_SELECTED = 'BOOK_SELECTED';
export function selectBook(book) {
    //selectBook is an Action Creator, it needs to return an action, an object with a type property
    return{
        type: BOOK_SELECTED,
        payload: book
    };
}

export const FETCH_WEATHER = 'FETCH_WEATHER';
export function fetchWeather(city) {

    const OPEN_WEATHER_API_KEY='67a0bb91dbe08405f9abdee9933c6a17';
    const OPEN_WEATHER_API_URL=`https://api.openweathermap.org/data/2.5/forecast?appid=${OPEN_WEATHER_API_KEY}`;

    const url = `${OPEN_WEATHER_API_URL}&q=${city},de`;
    const request = axios.request(url); //async request

    return{
        type: FETCH_WEATHER,
        payload: request
    };
}

export const FETCH_POSTS = 'FETCH_POSTS';
const BLOG_API_KEY='key=q1w2e3r4';
const BLOG_API_URL='http://reduxblog.herokuapp.com/api';
const BLOG_API_POSTS_PATH=`/posts`;
export function fetchPosts() {
    const url = `${BLOG_API_URL}${BLOG_API_POSTS_PATH}?${BLOG_API_KEY}`;
    const request = axios.get(url); //async request

    return{
        type: FETCH_POSTS,
        payload: request
    };
}

export const CREATE_POST = 'CREATE_POST';
export function createPost(values, callback) {

    console.log("=====>" + values.toString());

    const url = `${BLOG_API_URL}${BLOG_API_POSTS_PATH}?${BLOG_API_KEY}`;
    const request = axios.post(url, values).then(() => callback()); //async request

    return{
        type: CREATE_POST,
        payload: request
    };
}

export const FETCH_POST = 'FETCH_POST';
export function fetchPost(id) {
    const url = `${BLOG_API_URL}${BLOG_API_POSTS_PATH}/${id}?${BLOG_API_KEY}`;
    const request = axios.get(url); //async request

    return{
        type: FETCH_POST,
        payload: request
    };
}

export const DELETE_POST = 'DELETE_POST';
export function deletePost(id, callback) {
    const url = `${BLOG_API_URL}${BLOG_API_POSTS_PATH}/${id}?${BLOG_API_KEY}`;
    axios.delete(url).then(() => callback()); //async request

    return{
        type: DELETE_POST,
        payload: id
    };
}