import { useState, useContext, useEffect } from "react";
import "../scss/pages/HomePage.scss";
import data from "../data.json";
import JobList from "../components/JobList";
import FilterGroup from "../components/FilterGroup";
import Modal from "../components/Modal";
import SearchContext from "../contexts/SearchContext";
import { JobType } from "../types";

const HomePage = () => {
  const [searchFields] = useContext(SearchContext);
  const [jobs, setJobs] = useState<null | JobType[]>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filterJobs = () => {
    const { queryString, location, fullTime } = searchFields;
    let filteredJobs = data.filter(
      (job) =>
        job.position.toLowerCase().includes(queryString.toLowerCase()) &&
        job.location.toLowerCase().includes(location.toLowerCase())
    );

    if (fullTime)
      filteredJobs = filteredJobs.filter((job) => job.contract === "Full Time");

    setJobs(filteredJobs);
  };

  useEffect(() => {
    setTimeout(filterJobs, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="home-page">
      <FilterGroup filterJobs={filterJobs} setModalOpen={setModalOpen} />
      <JobList jobs={jobs} />
      {modalOpen ? (
        <Modal setModalOpen={setModalOpen} filterJobs={filterJobs} />
      ) : null}
    </div>
  );
};

export default HomePage;
