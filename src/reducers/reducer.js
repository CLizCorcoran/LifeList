import { combineReducers } from "redux";

import userData from "./userData.js";
import eventData from "./eventData.js";

const reducer = combineReducers( {
    userData,
    eventData
});

export default reducer;