const LOGIN_USER = "LOGIN_USER";
const ADD_EVENT_ITEM = "ADD_EVENT_ITEM";
const EDIT_EVENT_ITEM = "EDIT_EVENT_ITEM";
const DELETE_EVENT_ITEM = "DELETE_EVENT_ITEM";
const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
const FILTER_EVENT_ITEMS = "FILTER_EVENT_ITEMS";

const FiltersEnum = Object.freeze({"all":1, "complete":2, "incomplete":3});

module.exports = {
    LOGIN_USER,
    ADD_EVENT_ITEM,
    EDIT_EVENT_ITEM,
    DELETE_EVENT_ITEM,
    TOGGLE_COMPLETE,
    FILTER_EVENT_ITEMS,
    FiltersEnum
};