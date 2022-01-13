import { useContext } from "react";
import "../scss/components/Modal.scss";
import locationIcon from "../assets/desktop/icon-location.svg";
import checkIcon from "../assets/desktop/icon-check.svg";
import SearchContext from "../contexts/SearchContext";

interface ModalProps {
  setModalOpen: (value: boolean) => void;
  filterJobs: () => void;
}

const Modal = ({ setModalOpen, filterJobs }: ModalProps) => {
  const [searchFields, setSearchFields] = useContext(SearchContext);
  const { location, fullTime } = searchFields;
  return (
    <div className="modal">
      <div className="modal__overlay" onClick={() => setModalOpen(false)}>
        <div className="modal__form-container">
          <form
            className="modal__form"
            onClick={(e) => {
              e.stopPropagation();
            }}
            onSubmit={(e) => {
              e.preventDefault();
              setModalOpen(false);
              filterJobs();
            }}
          >
            <div className="modal__location-input-box">
              <img
                className="modal__location-icon"
                src={locationIcon}
                alt="Location"
              />
              <input
                className="modal__location-input"
                type="text"
                placeholder="Filter by location..."
                value={location}
                onChange={(e) =>
                  setSearchFields({
                    ...searchFields,
                    location: e.target.value,
                  })
                }
              />
            </div>
            <hr className="modal__line" />
            <div className="modal__full-time-box">
              <label className="modal__full-time-label">
                <input
                  type="checkbox"
                  className="modal__full-time-input"
                  checked={fullTime}
                  onChange={() => {
                    setSearchFields({
                      ...searchFields,
                      fullTime: !fullTime,
                    });
                  }}
                />
                <span className="checkbox">
                  <img
                    className="checkbox-icon"
                    src={checkIcon}
                    alt="Check icon"
                  />
                </span>
                <span className="modal__full-time-label-text">
                  Full Time Only
                </span>
              </label>
            </div>
            <div className="modal__button-container">
              <button className="modal__button" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
