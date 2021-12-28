import { useEffect } from "react";
import Layout from "./components/layout/Layout";
import JobList from "./components/JobList";
import data from "./data.json";

const App = () => {
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (!storedTheme) {
      localStorage.setItem("theme", "light");
    }

    const root = document.documentElement;
    root.setAttribute("data-theme", localStorage.getItem("theme")!);
  }, []);

  return (
    <Layout>
      <JobList jobs={data} />
    </Layout>
  );
};

export default App;
