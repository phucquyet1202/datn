import { Outlet } from "react-router-dom";

import { Footer, NavBar, Sidebar } from "../../components";
import { Toaster } from "react-hot-toast";

const BaseAuth = () => {
  return (
    <div className="bg-backgroundLight dark:bg-backgroundDark">
      <NavBar />
      <Toaster />

      <div className="mx-auto flex flex-row gap-3 py-5 md:px-20 px-3">
        <Sidebar />
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default BaseAuth;
