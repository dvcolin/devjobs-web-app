import "../scss/components/JobCard.scss";
import { Link } from "react-router-dom";
import { JobType } from "../types";

const JobCard = ({
  id,
  logo,
  logoBackground,
  postedAt,
  contract,
  position,
  company,
  location,
}: JobType) => {
  return (
    <div className="job-card">
      <div
        className="job-card__company-logo-box"
        style={{ backgroundColor: logoBackground }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/${logo}`}
          alt={`${company} logo`}
          className="job-card__company-logo"
        />
      </div>
      <div className="job-card__content">
        <p className="job-card__details">
          {postedAt} &middot; {contract}
        </p>
        <h3 className="job-card__position">
          <Link className="job-card__link" to={`/${id}`}>
            {position}
          </Link>
        </h3>
        <p className="job-card__company">{company}</p>
        <h4 className="job-card__location">{location}</h4>
      </div>
    </div>
  );
};

export default JobCard;
