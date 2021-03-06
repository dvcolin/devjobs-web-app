import "../scss/components/JobList.scss";
import { JobType } from "../types";
import JobCard from "./JobCard";
import Spinner from "./Spinner";

interface JobListProps {
  jobs: null | JobType[];
}

const JobList = ({ jobs }: JobListProps) => {
  return (
    <div className="job-list">
      {jobs ? (
        <>
          <div className="job-list__grid">
            {jobs.map(
              ({
                id,
                company,
                logo,
                logoBackground,
                position,
                postedAt,
                contract,
                location,
                website,
                apply,
                description,
                requirements,
                role,
              }) => (
                <JobCard
                  key={id}
                  id={id}
                  company={company}
                  logo={logo}
                  logoBackground={logoBackground}
                  position={position}
                  postedAt={postedAt}
                  contract={contract}
                  location={location}
                  website={website}
                  apply={apply}
                  description={description}
                  requirements={requirements}
                  role={role}
                />
              )
            )}
          </div>
          <button className="job-list__button">Load More</button>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default JobList;
