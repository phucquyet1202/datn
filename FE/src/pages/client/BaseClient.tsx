import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import {
  CalendarRangerModal,
  Footer,
  LoginModal,
  NavBar,
  RegisterModal,
  SearchModal,
} from "../../components";
import CheckCodeModal from "../../components/client/Modal/CheckCodeModal";

const BaseClient = () => {
  return (
    <>
      <div className="bg-backgroundLight dark:bg-backgroundDark">
        <Toaster />
        <NavBar />
        <CalendarRangerModal />
        <SearchModal />
        <CheckCodeModal />
        <LoginModal />
        <RegisterModal />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default BaseClient;
