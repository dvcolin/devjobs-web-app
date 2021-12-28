import JobList from "../components/JobList";
import data from "../data.json";

const HomePage = () => {
  return <JobList jobs={data} />;
};

export default HomePage;
