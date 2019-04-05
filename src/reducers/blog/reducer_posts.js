import _ from 'lodash'
import {FETCH_POSTS, FETCH_POST, DELETE_POST} from "../../actions/index";

export default function (state = {}, action) {

    switch(action.type) {
        case FETCH_POST:
            /*const post = action.payload.data;
            const newState = {...state};
            newState[post.id] = post;
            return newState;*/
            const post = action.payload.data;
            return {...state, [post.id]: post}; //same as commented code above
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        case DELETE_POST:
            return _.omit(state, action.payload);
        default:
            console.log(state);
            return state;
    }
}