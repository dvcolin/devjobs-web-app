import { createContext } from "react";

type ThemeContextType = [string, (value: "light" | "dark") => void];

export const ThemeContext = createContext<ThemeContextType>([
  "light",
  () => {},
]);
