import { FC, ReactNode } from "react";
import NavBar from "../NavBar/NavBar";
import { useLocation } from "react-router-dom";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation();
  const pathsNotRenderNavBar = ["/login", "/sign-up"];

  const shouldRenderNavBar = !pathsNotRenderNavBar.includes(location.pathname);
  return (
    <div>
      {shouldRenderNavBar && <NavBar />}

      <main>{children}</main>
    </div>
  );
};

export default Layout;
