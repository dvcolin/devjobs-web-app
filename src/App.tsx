import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import JobPage from "./pages/JobPage";
import SearchContext from "./contexts/SearchContext";

const App = () => {
  const searchHook = useState({
    queryString: "",
    location: "",
    fullTime: false,
  });

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
      <Routes>
        <Route
          path="/"
          element={
            <SearchContext.Provider value={searchHook}>
              <HomePage />
            </SearchContext.Provider>
          }
        />
        <Route path="/:id" element={<JobPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
