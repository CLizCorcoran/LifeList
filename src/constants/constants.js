const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";
const ADD_EVENT_ITEM = "ADD_EVENT_ITEM";
const EDIT_EVENT_ITEM = "EDIT_EVENT_ITEM";
const DELETE_EVENT_ITEM = "DELETE_EVENT_ITEM";
const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
const FILTER_EVENT_ITEMS = "FILTER_EVENT_ITEMS";
const CLEAR_EVENTS = "CLEAR_EVENTS";

const FiltersEnum = Object.freeze({"all":1, "complete":2, "incomplete":3});
const PriorityEnum = Object.freeze({"none": 0, "low":1, "medium":2, "high":3});

module.exports = {
    LOGIN_USER,
    LOGOUT_USER,
    ADD_EVENT_ITEM,
    EDIT_EVENT_ITEM,
    DELETE_EVENT_ITEM,
    TOGGLE_COMPLETE,
    CLEAR_EVENTS,
    FILTER_EVENT_ITEMS,
    FiltersEnum,
    PriorityEnum
};