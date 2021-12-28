import "../scss/components/JobList.scss";
import { JobType } from "../types";
import JobCard from "./JobCard";

interface JobListProps {
  jobs: JobType[];
}

const JobList = ({ jobs }: JobListProps) => {
  return (
    <div className="job-list">
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
          />
        )
      )}
    </div>
  );
};

export default JobList;
