import { TOGGLE_COMPLETE } from "../constants/constants.js";

const toggleComplete = id => {
    return {
        type: TOGGLE_COMPLETE,
        id: id
    };
};

export default toggleComplete;