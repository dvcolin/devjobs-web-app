import { useState } from "react";
import Layout from "./components/layout/Layout";
import { ThemeContext } from "./contexts/ThemeContext";
import JobList from "./components/JobList";
import data from "./data.json";

const App = () => {
  const themeHook = useState("light");
  return (
    <ThemeContext.Provider value={themeHook}>
      <Layout>
        <JobList jobs={data} />
      </Layout>
    </ThemeContext.Provider>
  );
};

export default App;
