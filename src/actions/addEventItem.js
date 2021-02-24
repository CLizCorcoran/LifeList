import { ADD_EVENT_ITEM } from "../constants/constants.js";

const addEventItem = (title, description) => {
    return {
        type:  ADD_EVENT_ITEM,
        item: {
            title: title,
            description: description
        }
    };
};

export default addEventItem;