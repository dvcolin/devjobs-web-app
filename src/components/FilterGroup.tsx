import { useContext } from "react";
import "../scss/components/FilterGroup.scss";
import filterIcon from "../assets/mobile/icon-filter.svg";
import searchIconMobile from "../assets/mobile/icon-search.svg";
import searchIconDesktop from "../assets/desktop/icon-search.svg";
import locationIcon from "../assets/desktop/icon-location.svg";
import checkIcon from "../assets/desktop/icon-check.svg";
import SearchContext from "../contexts/SearchContext";

interface FilterGroupProps {
  filterJobs: () => void;
  setModalOpen: (value: boolean) => void;
}

const FilterGroup = ({ filterJobs, setModalOpen }: FilterGroupProps) => {
  const [searchFields, setSearchFields] = useContext(SearchContext);
  const { queryString, location, fullTime } = searchFields;

  return (
    <div className="filter-group">
      <form
        className="filter-group__form"
        onSubmit={(e) => {
          e.preventDefault();
          filterJobs();
        }}
      >
        <div className="filter-group__item-box filter-group__title-box">
          <img
            src={searchIconDesktop}
            alt="Search icon"
            className="filter-group__item-icon filter-group__title-icon"
          />
          <input
            className="filter-group__item-input"
            placeholder="Filter by title..."
            value={queryString}
            onChange={(e) => {
              setSearchFields({
                ...searchFields,
                queryString: e.target.value,
              });
            }}
          />
        </div>
        <div className="filter-group__item-box filter-group__location-box">
          <img
            src={locationIcon}
            alt="Location icon"
            className="filter-group__item-icon"
          />
          <input
            className="filter-group__item-input"
            placeholder="Filter by location..."
            value={location}
            onChange={(e) => {
              setSearchFields({
                ...searchFields,
                location: e.target.value,
              });
            }}
          />
        </div>
        <div className="filter-group__item-box filter-group__full-time-box">
          <label className="filter-group__full-time-label">
            <input
              type="checkbox"
              className="filter-group__full-time-input"
              checked={fullTime}
              onChange={() => {
                setSearchFields({
                  ...searchFields,
                  fullTime: !fullTime,
                });
              }}
            />
            <span className="checkbox">
              <img className="checkbox-icon" src={checkIcon} alt="Check icon" />
            </span>
            <span className="filter-group__full-time-label-text">
              Full Time{" "}
              <span className="filter-group__full-time-label-text-only">
                Only
              </span>
            </span>
          </label>
        </div>

        <button className="filter-group__search-button" type="submit">
          Search
        </button>

        <div className="filter-group__icon-buttons">
          <button
            type="button"
            className="filter-group__icon-button filter-group__icon-button--filter"
            onClick={() => setModalOpen(true)}
          >
            <img src={filterIcon} alt="Filter" />
          </button>
          <button
            type="submit"
            className="filter-group__icon-button filter-group__icon-button--search"
          >
            <img src={searchIconMobile} alt="Search" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterGroup;
