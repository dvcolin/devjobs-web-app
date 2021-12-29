import { useState } from "react";
import "../scss/components/FilterGroup.scss";
import filterIcon from "../assets/mobile/icon-filter.svg";
import searchIcon from "../assets/mobile/icon-search.svg";
import { FilterJobsArgs } from "../types";

interface FilterGroupProps {
  filterJobs: (args: FilterJobsArgs) => void;
}

const FilterGroup = ({ filterJobs }: FilterGroupProps) => {
  const [title, setTitle] = useState("");

  return (
    <div className="filter-group">
      <div className="filter-group__title-box">
        <input
          className="filter-group__title-input"
          placeholder="Filter by title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="filter-group__icon-buttons">
        <button className="filter-group__icon-button filter-group__icon-button--filter">
          <img src={filterIcon} alt="Filter" />
        </button>
        <button
          className="filter-group__icon-button filter-group__icon-button--search"
          onClick={() => filterJobs({ title: title })}
        >
          <img src={searchIcon} alt="Search" />
        </button>
      </div>
    </div>
  );
};

export default FilterGroup;
