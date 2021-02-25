import { CLEAR_EVENTS } from "../constants/constants.js";

const clearEvents = () => {
    return {
        type:  CLEAR_EVENTS
    };
};

export default clearEvents;