import { EDIT_EVENT_ITEM } from "../constants/constants.js";

const editEventItem = (id, title, description) => {
    return {
        type:  EDIT_EVENT_ITEM,
        id: id,
        title: title,
        description: description
    };
};

export default editEventItem;