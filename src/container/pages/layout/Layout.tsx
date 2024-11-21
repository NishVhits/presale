import { Outlet } from "react-router-dom";
import PagesIndex from "../../PagesIndex";

const Layout = () => {
  const location: ReturnType<typeof PagesIndex.useLocation> =
    PagesIndex.useLocation();
  return (
    <>
      <PagesIndex.Header />
      <Outlet />
      {location.pathname === `/home` ? (
        <PagesIndex.Footer />
      ) : (
        <PagesIndex.IcoFooter />
      )}
    </>
  );
};

export default Layout;
