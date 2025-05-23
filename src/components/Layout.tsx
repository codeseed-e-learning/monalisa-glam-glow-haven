
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageLoadingIndicator from "./PageLoadingIndicator";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <PageLoadingIndicator />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
