import { ADD_EVENT_ITEM } from "../constants/constants.js";

const addEventItem = (title, description, priority, id) => {
    return {
        type:  ADD_EVENT_ITEM,
        //eventId: id,
        item: {
            title: title,
            description: description
            
        }
    };
};

export default addEventItem;