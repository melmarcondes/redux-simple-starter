import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import BooksReducer from './books/reducer_books';
import ActiveBookReducer from './books/reducer_active_book';
import WeatherReducer from './weather/reducer_weather';
import PostsReducer from './blog/reducer_posts'

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer,
  weather: WeatherReducer,
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
