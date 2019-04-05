//only the state this reducer is responsible for (not app state)
import {BOOK_SELECTED} from "../../actions/index";

export default function (state = null, action) {
    switch(action.type) {
        case BOOK_SELECTED:
            return action.payload;
    }
    return state;
}