import { LOGIN_USER } from "../constants/constants.js";

const userData = (state = "", action) => {
    switch (action.type) {
        case LOGIN_USER:
            return action.username;
        default:
            return state;
    }
};

export default userData;