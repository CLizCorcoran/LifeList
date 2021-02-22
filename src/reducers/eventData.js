import {
    ADD_EVENT_ITEM,
    DELETE_EVENT_ITEM
} from "../constants/constants.js";

var initialEventData = [];
var nextId = 0;

const eventData = (state = initialEventData, action) => {
    switch(action.type) {
        case ADD_EVENT_ITEM:
            var stateCopy = [];
            stateCopy = state.slice();
            action.item.id = nextId;
            stateCopy.push(action.item);
            nextId++;
            return stateCopy;

        case DELETE_EVENT_ITEM:
            var stateCopy = [];
            stateCopy = state.slice();
            const delIdx = stateCopy.findIndex(element => element.id === action.id);
            stateCopy.splice(delIdx, 1);
            return stateCopy;
        
        default:
            return state;
    }
};

export default eventData;