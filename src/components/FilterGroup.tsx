import { useContext } from "react";
import "../scss/components/FilterGroup.scss";
import filterIcon from "../assets/mobile/icon-filter.svg";
import searchIcon from "../assets/mobile/icon-search.svg";
import SearchContext from "../contexts/SearchContext";

interface FilterGroupProps {
  filterJobs: () => void;
  setModalOpen: (value: boolean) => void;
}

const FilterGroup = ({ filterJobs, setModalOpen }: FilterGroupProps) => {
  const [searchFields, setSearchFields] = useContext(SearchContext);
  const { queryString } = searchFields;

  return (
    <div className="filter-group">
      <form
        className="filter-group__form"
        onSubmit={(e) => {
          e.preventDefault();
          filterJobs();
        }}
      >
        <div className="filter-group__title-box">
          <input
            className="filter-group__title-input"
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
        <div className="filter-group__icon-buttons">
          <button
            className="filter-group__icon-button filter-group__icon-button--filter"
            onClick={() => setModalOpen(true)}
          >
            <img src={filterIcon} alt="Filter" />
          </button>
          <button className="filter-group__icon-button filter-group__icon-button--search">
            <img src={searchIcon} alt="Search" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterGroup;
