import { useContext } from "react";
import "../../scss/components/layout/Layout.scss";
import Header from "./Header";
import { ThemeContext } from "../../contexts/ThemeContext";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [theme] = useContext(ThemeContext);
  return (
    <div className={`layout layout--${theme}`}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
