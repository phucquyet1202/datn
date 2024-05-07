import { Route, Routes } from "react-router-dom";

import {
  BaseAuth,
  InfoBookingPage,
  Page404,
  ProfilePage,
  SecurityPage,
} from "..";

const RouteClient = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseAuth />}>
          <Route index element={<ProfilePage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/booking" element={<InfoBookingPage />} />
        </Route>

        <Route path="/*" element={<Page404 />} />
      </Routes>
    </>
  );
};

export default RouteClient;
