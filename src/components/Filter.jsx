import React from "react";
import { FiltersEnum } from "../constants/constants.js";
import './css/App.css';


const FilterButton = props => {

    return (
        <label className={props.className} onClick={props.onChange}>
                <input type="radio" id={props.id} name="filter_items" />
           {props.label}
        </label>
    )
}

const Filter = props => {

    var activeClass = "btn btn-secondary btn_filter active";
    var inactiveClass = "btn btn-secondary btn_filter";

    return (
        <div id="filter_group" className="btn-group btn-group-toggle">
            <FilterButton label="All" id="all" className={(props.filter === FiltersEnum.all) ? activeClass : inactiveClass} onChange={() => props.onFilter(FiltersEnum.all)} />
            <FilterButton label="Incomplete" id="incomplete" className={props.filter === FiltersEnum.incomplete ? activeClass : inactiveClass} onChange={() => props.onFilter(FiltersEnum.incomplete)} />
            <FilterButton label="Complete" id="complete" className={props.filter === FiltersEnum.complete ? activeClass : inactiveClass} onChange={() => props.onFilter(FiltersEnum.complete)} />
        </div>

    );
}

export default Filter;