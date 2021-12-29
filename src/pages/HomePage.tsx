import "../scss/pages/HomePage.scss";
import JobList from "../components/JobList";
import data from "../data.json";

const HomePage = () => {
  return (
    <div className="home-page">
      <JobList jobs={data} />
    </div>
  );
};

export default HomePage;
