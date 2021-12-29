import { useState } from "react";
import "../scss/pages/HomePage.scss";
import data from "../data.json";
import JobList from "../components/JobList";
import FilterGroup from "../components/FilterGroup";
import { FilterJobsArgs } from "../types";

const HomePage = () => {
  const [jobs, setJobs] = useState(data);

  const filterJobs = ({ title }: FilterJobsArgs) => {
    let filteredJobs = data;

    filteredJobs = filteredJobs.filter((job) =>
      job.position.toLowerCase().includes(title.toLowerCase())
    );

    setJobs(filteredJobs);
  };

  return (
    <div className="home-page">
      <FilterGroup filterJobs={filterJobs} />
      <JobList jobs={jobs} />
    </div>
  );
};

export default HomePage;
