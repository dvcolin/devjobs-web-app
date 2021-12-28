import "../scss/components/JobCard.scss";
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
  return (
    <div className="job-card">
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
        <h3 className="job-card__position">{position}</h3>
        <p className="job-card__company">{company}</p>
        <h4 className="job-card__location">{location}</h4>
      </div>
    </div>
  );
};

export default JobCard;
