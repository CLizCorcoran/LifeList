import React from "react";
import { FiltersEnum } from "../constants/constants.js";


const Filter = props => {

    function changeActive(event) {

        var rbn_group = document.getElementsByName("btn_filters");
        rbn_group.forEach((item) => {
            
            console.log(item);
            if (item.id == event.currentTarget.id) {
                event.target.classList.add("active");

                var filterEnum;
                switch (item.id) {
                    case "incomplete_lbl" :
                        filterEnum = FiltersEnum.incomplete;
                        break;
                    case "complete_lbl" :
                        filterEnum = FiltersEnum.complete;
                        break;
                    default:
                        filterEnum = FiltersEnum.all;
                }

                props.onFilter(filterEnum);
            }
            else
                item.classList.remove("active");
        });

        console.log(event);

        //event.target.checked = true;
    }
    return (
        <div id="filter_group" className="btn-group btn-group-toggle">
            <label className="btn btn-secondary btn_filter" id="incomplete_lbl" name="btn_filters" onClick={(event) => {changeActive(event)}}>
                <input type="radio" id="incomplete" name="filter_items" />
            Active
            </label>
            <label className="btn btn-secondary btn_filter" id="complete_lbl" name="btn_filters" onClick={(event) => {changeActive(event)}} >
                <input type="radio" id="completed" name="filter_items" />
            Completed
            </label>
            <label className="btn btn-secondary btn_filter" id="all_lbl" name="btn_filters" onClick={(event) => {changeActive(event)}} >
                <input type="radio" id="all" name="filter_items" />
            All
            </label>
        </div>

    );
}

export default Filter;