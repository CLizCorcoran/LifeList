import { combineReducers } from "redux";

import userData from "./userData.js";
import eventData from "./eventData.js";
import filterValue from "./filterValue.js";

const reducer = combineReducers( {
    userData,
    eventData,
    filterValue
});

export default reducer;