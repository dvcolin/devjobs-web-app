import { createContext } from "react";
import { SearchContextType } from "../types";

const SearchContext = createContext<SearchContextType>([
  {
    queryString: "",
    location: "",
    fullTime: false,
  },
  () => {},
]);

export default SearchContext;
