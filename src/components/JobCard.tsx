import { useContext } from "react";
import "../scss/components/JobCard.scss";
import { ThemeContext } from "../contexts/ThemeContext";
import { JobType } from "../types";

const JobCard = ({
  logo,
  logoBackground,
  postedAt,
  contract,
  position,
  company,
  location,
}: JobType) => {
  const [theme] = useContext(ThemeContext);
  return (
    <div className={`job-card job-card--${theme}`}>
      <div
        className="job-card__logo-box"
        style={{ backgroundColor: logoBackground }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/${logo}`}
          alt=""
          className="job-card__logo"
        />
      </div>
      <div className="job-card__content">
        <p className="job-card__details">
          {postedAt} &middot; {contract}
        </p>
        <h3 className={`job-card__position job-card__position--${theme}`}>
          {position}
        </h3>
        <p className="job-card__company">{company}</p>
        <h4 className="job-card__location">{location}</h4>
      </div>
    </div>
  );
};

export default JobCard;
