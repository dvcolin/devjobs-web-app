import "../../scss/components/layout/Layout.scss";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
