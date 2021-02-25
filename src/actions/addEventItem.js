import { ADD_EVENT_ITEM } from "../constants/constants.js";

const addEventItem = (title, description, priority) => {
    return {
        type:  ADD_EVENT_ITEM,
        item: {
            title: title,
            description: description,
            priority: parseInt(priority)
        }
    };
};

export default addEventItem;