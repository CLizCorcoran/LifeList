import { DELETE_EVENT_ITEM } from "../constants/constants.js";

const deleteEventItem = id => {
    return {
        type: DELETE_EVENT_ITEM,
        id: id
    };
};

export default deleteEventItem;