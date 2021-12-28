import Layout from "./components/layout/Layout";
import JobList from "./components/JobList";
import data from "./data.json";

const App = () => {
  return (
    <Layout>
      <JobList jobs={data} />
    </Layout>
  );
};

export default App;
